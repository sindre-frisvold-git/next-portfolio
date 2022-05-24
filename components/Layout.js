import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'
import { useIsMedium, useIsSmall } from '../utils/hooks'
import Home from './Home'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Layout = ({ children, route, ...customMeta }) => {
  const router = useRouter()
  const meta = {
    title: 'Sindre Frisvold, Full-Stack Developer',
    description: `I can help you realise your next web project. Get in touch, I'd love to have a chat.`,
    image: '/avatar.png',
    type: 'website',
    ...customMeta,
  }
  const isMedium = useIsMedium()
  return (
    <div className="content">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <main className="bg-slate-100 text-gray-800 dark:bg-gray-800 dark:text-slate-100 w-full">
        <Header />
        <Home isMedium={isMedium}>{children}</Home>
        <Footer />
      </main>
    </div>
  )
}

export default Layout
