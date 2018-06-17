import Document, { Head, Main, NextScript } from 'next/document'
import * as React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang='ja'>
        <Head>
          <link rel='stylesheet' href='/_next/static/style.css' />
          <link rel='apple-touch-icon' sizes='180x180' href='/static/favicon/apple-touch-icon.png' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta http-equiv='X-UA-Compatible' content='ie=edge' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/static/favicon/site.webmanifest' />
          <link rel='mask-icon' href='/static/favicon/safari-pinned-tab.svg' color='#37a070' />
          <meta name='apple-mobile-web-app-title' content='kenshir0f' />
          <meta name='application-name' content='kenshir0f' />
          <meta name='msapplication-TileColor' content='#37a070' />
          <meta name='theme-color' content='#ffffff' />

          <title>ふじけん</title>
          <meta property='og:title' content={'ふじけん'} />
          <meta property='og:description' content={'ふじけんのポートフォリオ'} />
          <meta name='keywords' content={'kenshir0f'} />
          <meta property='og:type' content='article' />
          <meta property='og:url' content={'https://kenshir0f.com'} />
          <meta property='og:image' content={'https://kenshir0f.com/static/images/ogp.jpg'} />
          <meta property='og:site_name' content={'ふじけん'} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@kenshir0f' />
          <meta name='twitter:url' content={'https://kenshir0f.com/static/images/ogp.jpg'} />
          <meta name='twitter:title' content={'kenshir0f.com'} />
          <meta name='twitter:description' content={'ふじけんのポートフォリオサイトだよ。'} />
          <meta name='twitter:image' content={'https://kenshir0f.com/static/images/ogp.jpg'} />
          <link rel='canonical' href={'https://kenshir0f.com'} />
          <link rel='shortcut icon' href={'/static/favicon/favicon-32x32.png'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
