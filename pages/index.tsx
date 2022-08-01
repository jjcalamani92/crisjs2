import type { GetStaticProps } from 'next'
import { FC } from 'react'
import { graphQLClientS } from '../src/swr/graphQLClient'
import { SITE, SITE_PATHS } from '../src/graphql'
import { Layout } from '../components/layouts/layout'
import { Site } from '../src/interfaces/site'
import { Hero } from '../components/component/hero'
import { Brand } from '../components/component/brands'
import { useRouter } from 'next/router'

interface Props {
  site: Site
}

const Home: FC<Props> = ({ site }) => {
  const {query} = useRouter()
  
  return (
    <Layout
      title='Inicio'
      site={site}
    >
      <Hero contain={site.route.find(data => data.href === 'home')?.content.body!} />
      <Brand />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { site } = await graphQLClientS.request(SITE, { _id: process.env.API_SITE })

  return {
    props: { site }, // will be passed to the page component as props
    revalidate: 10,
  }
}
export default Home
