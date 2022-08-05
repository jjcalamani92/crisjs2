import type { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'

import { useRouter } from 'next/router'
import { Layout } from '../../../../../components/layouts/layout'
import { graphQLClientS } from '../../../../../src/swr/graphQLClient'
import { SITE, SITES, SITES_ID } from '../../../../../src/graphql'
import { Site } from '../../../../../src/interfaces/site'
import { Dashboard } from '../../../../../components/layouts/dashboard'
import { getDataTree } from '../../../../../src/utils/getDataTree'
import useSWR from 'swr'
import { HeadingDashboard, HeadingDashboard2 } from '../../../../../components/component/component'
import { GridSkeleton } from '../../../../../components/component/grid/gridSkeleton'
import { GridSite } from '../../../../../components/component/grid/gridSite'
import { GridChildren } from '../../../../../components/component/grid/gridPages'
import { CHILDRENS_0, CHILDREN_0 } from '../../../../../src/graphql/query/site.query';

interface Props {
  site: Site
  sites: Site[]
}

const Routes: FC<Props> = ({ site, sites }) => {
  const { query } = useRouter()
  const { data, isValidating, error } = useSWR([CHILDRENS_0, {_id: query.id, input: {}}])
  // console.log(query.id);
  
  return (
    <Layout
      title='Dashboard'
      site={site}
    >
      <Dashboard tree={getDataTree(sites)} >
        <HeadingDashboard title='Pages' />
        <HeadingDashboard2 title='Pages' />
        {isValidating
          ?
          <GridSkeleton />
          :
          <GridChildren data={data.getChildrens0} />
        }
      </Dashboard>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { sitesAll } = await graphQLClientS.request(SITES_ID)
  const paths = sitesAll.map((data: { _id: string }) => ({ params: { id: data._id } }))
  return {
    paths,
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  // console.log(ctx);
  
  const { site } = await graphQLClientS.request(SITE, { _id: process.env.API_SITE })
  const { sitesAll } = await graphQLClientS.request(SITES)
  
  return {
    props: { site, sites: sitesAll },
    revalidate: 10,
  }
}
export default Routes
