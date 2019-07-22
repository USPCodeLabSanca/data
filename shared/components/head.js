import React from 'react';
import HeadNext from 'next/head';
import { string } from 'prop-types';

const Head = props => (
  <HeadNext>
    <meta charSet="UTF-8" />
    <title>data ICMC</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
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
