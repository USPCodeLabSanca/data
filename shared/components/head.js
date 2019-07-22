import React from 'react';
import HeadNext from 'next/head';

const Head = props => (
  <HeadNext>
    <meta charSet='UTF-8' />
    <title>data ICMC</title>
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/static/favicon/apple-touch-icon.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/static/favicon/favicon-32x32.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='16x16'
      href='/static/favicon/favicon-16x16.png'
    />
    <link rel='manifest' href='/static/favicon/manifest.json' />
    <link
      rel='mask-icon'
      href='/static/favicon/safari-pinned-tab.svg'
      color='#7fd3f5'
    />
    <link rel='shortcut icon' href='/static/favicon/favicon.ico' />
    <meta name='apple-mobile-web-app-title' content='data ICMC' />
    <meta name='application-name' content='data ICMC' />
    <meta name='msapplication-TileColor' content='#ffffff' />
    <meta
      name='msapplication-config'
      content='/static/favicon/browserconfig.xml'
    />
    <meta name='theme-color' content='#ffffff' />
    <meta http-equiv="Content-Language" content="pt-br" />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='stylesheet' href='/static/styles/tailwind.min.css' />
    <link rel='stylesheet' href='/static/styles/style.css' />
    <link href='/static/webfonts/roboto/stylesheet.css' rel='stylesheet' />
  </HeadNext>
);

export default Head;
