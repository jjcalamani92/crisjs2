import type { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'

import { useRouter } from 'next/router'
import { Layout } from '../../../../../../components/layouts/layout'
import { graphQLClientS } from '../../../../../../src/swr/graphQLClient'
import { SITE, SITES, SITES_ID } from '../../../../../../src/graphql'
import { Children, ChildrenForm, Site } from '../../../../../../src/interfaces/site'
import { Dashboard } from '../../../../../../components/layouts/dashboard'
import { getDataTree } from '../../../../../../src/utils/getDataTree'
import useSWR from 'swr'
import { HeadingDashboard, HeadingForm } from '../../../../../../components/component/component'
import { GridSkeleton } from '../../../../../../components/component/grid/gridSkeleton'
import { GridSite } from '../../../../../../components/component/grid/gridSite'
import { GridChildren } from '../../../../../../components/component/grid/gridPages'
import { CHILDRENS_0, CHILDRENS_1, CHILDREN_0 } from '../../../../../../src/graphql/query/site.query';
import { FormChildren } from '../../../../../../components/component/form/childrenForm'
import { getPathsByChildren0 } from '../../../../../../src/utils/functionV2'

interface Props {
  site: Site
  sites: Site[]
  children: ChildrenForm
}

const Children0: FC<Props> = ({ site, sites, children }) => {
  const { query } = useRouter()


  const { data, isValidating, error } = useSWR([CHILDRENS_1, { _id: query.id, input: { children_uid_0: query.children0 } }])

  return (
    <Layout
      title='Dashboard'
      site={site}
    >
      <Dashboard tree={getDataTree(sites)} >
        {
          query.children0 === 'new'
            ?
            null
            :
            <>
              <HeadingDashboard title='Pages' />
              {isValidating
                ?
                <GridSkeleton />
                :
                <GridChildren data={data?.getChildrens1} />
              }
              <HeadingForm title="Page" />
            </>
        }
        <FormChildren data={children} />
      </Dashboard>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { sitesAll } = await graphQLClientS.request(SITES)

  // const paths = getPathsByChildren0(sitesAll)
  // const paths = sitesAll.map((data: { _id: string }) => ({ params: { id: data._id } }))
  return {
    paths: getPathsByChildren0(sitesAll),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id = '', children0 = '' } = params as { id: string, children0: string }


  const { site } = await graphQLClientS.request(SITE, { _id: process.env.API_SITE })
  const { sitesAll } = await graphQLClientS.request(SITES)
  let children: Children | null | any

  if (children0 === 'new') {
    children = {
      name: "",
      description: "description",
      imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      imageAlt: "image description",
    }
  } else {
    const data = await graphQLClientS.request(CHILDREN_0, { _id: id, input: { children_uid_0: children0 } })
    children = {
      uid: data!.getChildren0.uid,
      name: data!.getChildren0.name,
      imageSrc: data!.getChildren0.imageSrc,
      imageAlt: data!.getChildren0.imageAlt,
      description: data!.getChildren0.description,
    };
  }
  return {
    props: { site, sites: sitesAll, children },
    revalidate: 10,
  }
}
export default Children0
