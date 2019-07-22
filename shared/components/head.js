import React from 'react';
import HeadNext from 'next/head';
import { string } from 'prop-types';

const defaultTitle = '';
const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => (
  <HeadNext>
    <meta charSet="UTF-8" />
    <title>{props.title || defaultTitle}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="stylesheet" href="/static/styles/tailwind.min.css" />
    <link rel="stylesheet" href="/static/styles/style.css" />
    <link href="/static/webfonts/roboto/stylesheet.css" rel="stylesheet" />
  </HeadNext>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
