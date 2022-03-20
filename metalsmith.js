/* eslint-disable import/no-extraneous-dependencies */

const Metalsmith = require("metalsmith");
const markdown = require("@metalsmith/markdown");
const layouts = require("@metalsmith/layouts");
const collections = require("@metalsmith/collections");
const drafts = require("@metalsmith/drafts");
const permalinks = require("@metalsmith/permalinks");
const sass = require("@metalsmith/sass");
const postcss = require("@metalsmith/postcss");
const when = require("metalsmith-if");
const htmlMinifier = require("metalsmith-html-minifier");
const assets = require("metalsmith-static-files");
const metadata = require("metalsmith-metadata");
const prism = require("metalsmith-prism");

const marked = require("marked");
const esbuild = require("./local_plugins/metalsmith-esbuild");

const { dependencies } = require("./package.json");
const isProduction = process.env.NODE_ENV === "production";

// functions to extend Nunjucks environment
const toUpper = string => string.toUpperCase();
const spaceToDash = string => string.replace(/\s+/g, "-");
const condenseTitle = string => string.toLowerCase().replace(/\s+/g, "");
const UTCdate = date => date.toUTCString("M d, yyyy");
const blogDate = string => new Date(string).toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" });
const trimSlashes = string => string.replace(/(^\/)|(\/$)/g, "");
const mdToHTML = mdString => {
  try {
    return marked.parse(mdString);
  } catch (e) {
    console.error("Error parsing markdown:", e);
    return mdString;
  }
};

// Define engine options for the inplace and layouts plugins
const templateConfig = {
  directory: "templates",
  engineOptions: {
    path: ["templates"],
    filters: {
      toUpper,
      spaceToDash,
      condenseTitle,
      UTCdate,
      blogDate,
      trimSlashes,
      mdToHTML,
    },
  },
};

Metalsmith(__dirname)
  .source("./src/content")
  .destination("./build")
  .clean(true)
  .metadata({
    msVersion: dependencies.metalsmith,
    nodeVersion: process.version,
  })

  .use(when(isProduction, drafts()))

  .use(
    metadata({
      site: "data/site.json",
      nav: "data/navigation.json",
    })
  )

  .use(
    collections({
      blog: {
        pattern: "blog/*.md",
        sortBy: "date",
        reverse: true,
        limit: 10,
      },
    })
  )

  .use(markdown())

  .use(permalinks())

  .use(layouts(templateConfig))

  .use(
    prism({
      lineNumbers: true,
      decode: true,
    })
  )

  .use(
    assets({
      source: "src/assets/",
      destination: "assets/",
    })
  )

  .use(
    sass({
      entries: {
        "src/sass/styles.scss": "assets/styles.css",
      },
    })
  )
  .use(postcss({ plugins: ["postcss-preset-env", "autoprefixer", "cssnano"], map: !isProduction }))

  .use(
    esbuild({
      entries: {
        index: "src/js/main.js",
      },
      outdir: "assets",
    })
  )

  .use(when(isProduction, htmlMinifier()))
  .build(err => {
    if (err) {
      throw err;
    }
  });
