/* eslint-disable import/no-extraneous-dependencies */

import { performance } from 'perf_hooks';
import browserSync from 'browser-sync';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import Metalsmith from 'metalsmith';
import markdown from '@metalsmith/markdown';
import layouts from '@metalsmith/layouts';
import collections from '@metalsmith/collections';
import drafts from '@metalsmith/drafts';
import permalinks from '@metalsmith/permalinks';
import sass from '@metalsmith/sass';
import postcss from '@metalsmith/postcss';
import htmlMinifier from 'metalsmith-html-minifier';
import assets from 'metalsmith-static-files';
import metadata from '@metalsmith/metadata';
import prism from 'metalsmith-prism';

import * as marked from 'marked';
import esbuild from '@metalsmith/js-bundle';

// ESM does not currently import JSON modules by default.
// Ergo we'll JSON.parse the file manually
import * as fs from 'fs';

const { dependencies } = JSON.parse( fs.readFileSync( './package.json' ) );

/* eslint-disable no-underscore-dangle */
const __dirname = dirname( fileURLToPath( import.meta.url ) );
const isProduction = process.env.NODE_ENV === 'production';

// functions to extend Nunjucks environment
const spaceToDash = ( string ) => string.replace( /\s+/g, '-' );
const condenseTitle = ( string ) => string.toLowerCase().replace( /\s+/g, '' );
const UTCdate = ( date ) => date.toUTCString( 'M d, yyyy' );
const blogDate = ( string ) =>
  new Date( string ).toLocaleString( 'en-US', { year: 'numeric', month: 'long', day: 'numeric' } );
const trimSlashes = ( string ) => string.replace( /(^\/)|(\/$)/g, '' );
const mdToHTML = ( mdString ) => {
  try {
    return marked.parse( mdString );
  } catch ( e ) {
    return mdString;
  }
};
const thisYear = () => new Date().getFullYear();

// Define engine options for the inplace and layouts plugins
const templateConfig = {
  directory: 'layouts',
  engineOptions: {
    path: [ 'layouts' ],
    filters: {
      spaceToDash,
      condenseTitle,
      UTCdate,
      blogDate,
      trimSlashes,
      mdToHTML,
      thisYear
    }
  }
};

function noop() { };
// to use a plugin conditionally, use this pattern:
// .use( isProduction ? htmlMinifier() : noop ) )

let devServer = null;
let t1 = performance.now();

function msBuild() {
  return (
    Metalsmith( __dirname )
      .clean( true )
      .watch( isProduction ? false : [ 'src', 'layouts' ] )
      .source( './src/content' )
      .destination( './build' )
      .metadata( {
        msVersion: dependencies.metalsmith,
        nodeVersion: process.version
      } )

      .use( isProduction ? noop : drafts() )

      .use(
        metadata( {
          site: 'src/content/data/site.json',
          nav: 'src/content/data/navigation.json'
        } )
      )

      .use(
        collections( {
          blog: {
            pattern: 'blog/*.md',
            sortBy: 'date',
            reverse: true,
            limit: 10
          }
        } )
      )

      .use( markdown() )

      .use( permalinks() )

      .use( layouts( templateConfig ) )

      .use(
        prism( {
          lineNumbers: true,
          decode: true
        } )
      )

      .use(
        assets( {
          source: 'src/assets/',
          destination: 'assets/'
        } )
      )

      .use(
        sass( {
          entries: {
            'src/sass/styles.scss': 'assets/styles.css'
          }
        } )
      )
      .use( postcss( { plugins: [ 'postcss-preset-env', 'autoprefixer', 'cssnano' ], map: !isProduction } ) )

      .use(
        esbuild( {
          entries: {
            'assets/scripts': 'src/js/main.js'
          }
        } )
      )

      .use( isProduction ? htmlMinifier() : noop )
  );
}

const ms = msBuild();
ms.build( ( err ) => {
  if ( err ) {
    throw err;
  }
  /* eslint-disable no-console */
  console.log( `Build success in ${ ( ( performance.now() - t1 ) / 1000 ).toFixed( 1 ) }s` );
  if ( ms.watch() ) {
    if ( devServer ) {
      t1 = performance.now();
      devServer.reload();
    } else {
      devServer = browserSync.create();
      devServer.init( {
        host: 'localhost',
        server: './build',
        port: 3000,
        injectChanges: false,
        reloadThrottle: 0
      } );
    }
  }
} );

