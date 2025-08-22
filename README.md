<p align="center">
  <a href="https://www.metalsmith.io">
    <img alt="Metalsmith" src="https://www.glinka.co/assets/images/metalsmith-logo-bug.png" width="60" />
  </a>
</p>
<h1 align="center">
  Metalsmith company starter
</h1>

> **This starter is deprecated. Use the [Metalsmith2025 Structured Content Starter](https://github.com/wernerglinka/metalsmith2025-structured-content-starter) instead!**

Bootstrap your company website with this Metalsmith starter. This starter includes Markdown content and Nunjucks templating.

This starter is build in the style of a company marketing site. The components on this site are bare-bone interpretations of common information presentation patterns that can be found on many corporate websites.

The website behaves like a Single Page Application (SPA) with the help of [Barba.js](https://barba.js.org/).

Styles are written in SCSS, scripts in Javasript and compiled with Metalsmith plugins. Content is written in [Markdown](https://marked.js.org/) and templates are coded with [Nunjucks](https://mozilla.github.io/nunjucks/). **All page content is defined in the frontmatter of each page**. Except for blog pages, there are no long-text markdown sections. Rather content text area fields in the page frontmatter are compiled into HTML with a Nunjucks filter.

Page sections are defined as a YAML object in the frontmatter. This approach lends itself to an easy integration with headless CMSs like forestry.io. Get a more [detailed explanation in this blogpost](https://glinka.co/blog/).

## Quick start

1.  **Create a Metalsmith site.**

    Clone the starter repository to create a new site.

    ```shell
    git clone https://github.com/wernerglinka/metalsmith-company-starter.git new-site
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd new-site/
    npm install
    npm start
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!

    Open the `new-site` directory in your code editor of choice and edit `src/content/index.md`. Save your changes and the browser will update in real time!

## What's included?

A quick look at the top-level files and directories you'll see in this Metalsmith project.

    .
    ├── node_modules
    ├── src
    ├── templates
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── LICENSE
    ├── metalsmith.js
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all the node modules that your project depends on.

2.  **`/src`**: This directory will contain all the content that makes up your site.

3.  **`/templates`**: This directory will contain all the templates and template partials that will be used to render your site.

4.  **`/.eslintrc`**: This file contains all rules foir eslint.

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6.  **`.prettierignore`**: This file tells prettier what files it should ignore.

7.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

8.  **`LICENSE`**: This Metalsmith starter is licensed under the MIT license.

9.  **`metalsmith.js`**: This is the Metalsmith build file.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## Learn more about Metalsmith

Looking for more guidance? Full documentation for Metalsmith can be found [on the website](https://www.metalsmith.io).

## Deploy

Deploy and Host on any static hosting service. For example [Netlify](https://www.netlify.com), [Vercel](https://vercel.com/) or [Cloudflare Pages](https://pages.cloudflare.com/).

Here is an article about [how to deploy Metalsmith on Netlify](https://www.netlify.com/blog/2015/12/08/a-step-by-step-guide-metalsmith-on-netlify/).

## Join the Metalsmith community at [Gitter](https://gitter.im/metalsmith/community).
