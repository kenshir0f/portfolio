import * as React from 'react'
import Head from 'next/head'

interface Props {
  title: string
  description: string
  keyword: string
  image: string
  url: string
}

export default ({ title, description, keyword, image, url }: Props) => {
  return (
    <Head>
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

      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta name='keywords' content={keyword} />
      <meta property='og:type' content='article' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={image} />
      <meta property='og:site_name' content={title} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@kenshir0f' />
      <meta name='twitter:url' content={image} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <link rel='canonical' href={url} />
      <link rel='shortcut icon' href={'/static/favicon/favicon-32x32.png'} />
    </Head>
  )
}
