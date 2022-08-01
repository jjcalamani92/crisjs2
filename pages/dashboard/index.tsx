import type { GetStaticProps } from 'next'
import { FC } from 'react'

import { useRouter } from 'next/router'
import { Layout } from '../../components/layouts/layout'
import { graphQLClientS } from '../../src/swr/graphQLClient'
import { SITE } from '../../src/graphql'
import { Site } from '../../src/interfaces/site'

interface Props {
  site: Site
}

const Home: FC<Props> = ({ site }) => {
  const {query} = useRouter()
  
  return (
    <Layout
      title='Dashboard'
      site={site}
    >
      <h1>dashboard</h1>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { site } = await graphQLClientS.request(SITE, { _id: process.env.API_SITE })

  return {
    props: { site }, 
    revalidate: 10,
  }
}
export default Home
