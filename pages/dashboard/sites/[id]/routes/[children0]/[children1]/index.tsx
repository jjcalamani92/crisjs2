import type { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'

import { useRouter } from 'next/router'
import { Layout } from '../../../../../../../components/layouts/layout'
import { graphQLClientS } from '../../../../../../../src/swr/graphQLClient'
import { SITE, SITES, SITES_ID } from '../../../../../../../src/graphql'
import { Children, ChildrenForm, Site } from '../../../../../../../src/interfaces/site'
import { Dashboard } from '../../../../../../../components/layouts/dashboard'
import { getDataTree } from '../../../../../../../src/utils/getDataTree'
import useSWR from 'swr'
import { HeadingDashboard, HeadingForm } from '../../../../../../../components/component/component'
import { GridSkeleton } from '../../../../../../../components/component/grid/gridSkeleton'
import { GridSite } from '../../../../../../../components/component/grid/gridSite'
import { GridChildren } from '../../../../../../../components/component/grid/gridPages'
import { CHILDRENS_0, CHILDRENS_1, CHILDRENS_2, CHILDREN_1 } from '../../../../../../../src/graphql/query/site.query';
import { FormChildren } from '../../../../../../../components/component/form/childrenForm'

interface Props {
  site: Site
  sites: Site[]
  children: ChildrenForm

}

const Children1: FC<Props> = ({ site, sites, children }) => {
  const { query } = useRouter()
  const { data, isValidating, error } = useSWR([CHILDRENS_2, {_id: query.id, input: {children_uid_0: query.children0, children_uid_1: query.children1}}])
  
  // console.log(children);
  
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
          <GridChildren data={data.getChildrens2} />
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
    paths:[{ params: {id: '', children0: '', children1: '' } }],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { id = '', children0 = '', children1 = '' } = params as {id: string, children0: string, children1: string}

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
    const data = await graphQLClientS.request(CHILDREN_1, { _id: id, input:{children_uid_0: children0, children_uid_1: children1} })
    children = {
      uid: data!.getChildren1.uid,
      name: data!.getChildren1.name,
      imageSrc: data!.getChildren1.imageSrc,
      imageAlt: data!.getChildren1.imageAlt,
      description: data!.getChildren1.description,
    };
  }
  return {
    props: { site, sites: sitesAll, children },
    revalidate: 120,
  }
}
export default Children1
