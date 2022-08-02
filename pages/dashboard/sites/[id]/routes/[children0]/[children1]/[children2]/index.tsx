import type { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'

import { useRouter } from 'next/router'
import { Layout } from '../../../../../../../../components/layouts/layout'
import { graphQLClientS } from '../../../../../../../../src/swr/graphQLClient'
import { SITE, SITES, SITES_ID } from '../../../../../../../../src/graphql'
import { Children, Site, ChildrenForm } from '../../../../../../../../src/interfaces/site';
import { Dashboard } from '../../../../../../../../components/layouts/dashboard'
import { getDataTree } from '../../../../../../../../src/utils/getDataTree'
import useSWR from 'swr'
import { HeadingDashboard, HeadingForm } from '../../../../../../../../components/component/component'
import { GridSkeleton } from '../../../../../../../../components/component/grid/gridSkeleton'
import { GridSite } from '../../../../../../../../components/component/grid/gridSite'
import { GridChildren } from '../../../../../../../../components/component/grid/gridPages'
import { CHILDRENS_2, CHILDRENS_3, CHILDREN_2 } from '../../../../../../../../src/graphql/query/site.query';
import { FormChildren } from '../../../../../../../../components/component/form/childrenForm'

interface Props {
  site: Site
  sites: Site[]
  children: ChildrenForm
}

const Children2: FC<Props> = ({ site, sites, children }) => {
  const { query } = useRouter()
  const { data, isValidating, error } = useSWR([CHILDRENS_3, {_id: query.id, input: {children_uid_0: query.children0, children_uid_1: query.children1, children_uid_2: query.children2}}])
  console.log(children);
  
  
  return (
    <Layout
      title='Dashboard'
      site={site}
    >
      <Dashboard tree={getDataTree(sites)} >
        <HeadingDashboard title='Pages' />
        {!data
          ?
          <GridSkeleton />
          :
          <GridChildren data={data.getChildrens3} />
          // <GridSkeleton />
        }
        <HeadingForm title="Page" />
        <FormChildren data={children} />
      </Dashboard>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { sitesAll } = await graphQLClientS.request(SITES_ID)
  // const paths = sitesAll.map((data: { _id: string }) => ({ params: { id: data._id } }))
  return {
    paths:[{ params: {id: '', children0: '', children1: '', children2: '' } }],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  // console.log(ctx);
  const { id = '', children0 = '', children1 = '' , children2 = '' } = params as {id: string, children0: string, children1: string, children2: string}
  
  const { site } = await graphQLClientS.request(SITE, { _id: process.env.API_SITE })
  const { sitesAll } = await graphQLClientS.request(SITES)
  let children: Children | null | any
  if (children1 === 'new') {
    children = {
      name: "",
      description: "",
      imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      imageAlt: "",
    }
  } else {
    const data = await graphQLClientS.request(CHILDREN_2, { _id: id, input:{children_uid_0: children0, children_uid_1: children1, children_uid_2: children2} })
    children = {
      uid: data!.getChildren2.uid,
      name: data!.getChildren2.name,
      imageSrc: data!.getChildren2.imageSrc,
      imageAlt: data!.getChildren2.imageAlt,
      description: data!.getChildren2.description,
    };
  }
  return {
    props: { site, sites: sitesAll, children },
    revalidate: 10,
  }
}
export default Children2
