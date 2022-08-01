import type { GetStaticProps } from 'next'
import { FC } from 'react'

import { useRouter } from 'next/router'
import { Layout } from '../../../components/layouts/layout'
import { graphQLClientS } from '../../../src/swr/graphQLClient'
import { SITE, SITES } from '../../../src/graphql'
import { Site } from '../../../src/interfaces/site'
import { Dashboard } from '../../../components/layouts/dashboard'
import { getDataTree } from '../../../src/utils/getDataTree'
import useSWR from 'swr'
import { HeadingDashboard } from '../../../components/component/component'
import { GridSkeleton } from '../../../components/component/grid/gridSkeleton'
import { GridSite } from '../../../components/component/grid/gridSite'

interface Props {
  site: Site
  sites: Site[]
}

const Sites: FC<Props> = ({ site, sites }) => {
  const { query } = useRouter()
  const { data, isValidating, error } = useSWR(SITES)
  
  return (
    <Layout
      title='Dashboard'
      site={site}
    >
      <Dashboard tree={getDataTree(sites)} >
        <HeadingDashboard title='Sites' />
        {!data
          ?
          <GridSkeleton />
          :
          <GridSite data={data.sitesAll} />
        }
      </Dashboard>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { site } = await graphQLClientS.request(SITE, { _id: process.env.API_SITE })
  const { sitesAll } = await graphQLClientS.request(SITES)
  
  return {
    props: { site, sites: sitesAll },
    revalidate: 10,
  }
}
export default Sites
