import type { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'

import { useRouter } from 'next/router'
import { Layout } from '../../../../components/layouts/layout'
import { graphQLClientS } from '../../../../src/swr/graphQLClient'
import { SITE, SITES, SITES_ID } from '../../../../src/graphql'
import { Site, SiteForm } from '../../../../src/interfaces/site'
import { Dashboard } from '../../../../components/layouts/dashboard'
import { getDataTree } from '../../../../src/utils/getDataTree'
import { HeadingDashboard, HeadingForm } from '../../../../components/component/component'
import { FormSite } from '../../../../components/component/form/siteForm'
import { Grid } from '../../../../components/component/grid/grid'
import { FormSite2 } from '../../../../components/component/form'
import { SiteF } from '../../../../components/component/form/site'

interface Props {
  data: SiteForm
  site: Site
  sites: Site[]
}

const datas = [
  {
    title: 'routes',
    href: 'routes',
    imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1659326531/React-jj/blogs/i/ecommerce-compra-ruta_sz2t0i.jpg"
  },
  {
    title: 'products',
    href: 'products',
    imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1659326962/React-jj/blogs/i/new-product-stamp-round-grunge-sign-label-181920855_h7dlkv.jpg"
  },
  {
    title: 'marks',
    href: 'marks',
    imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1659326775/React-jj/blogs/i/Marcas_gxthuk.png"
  },
  {
    title: 'blogs',
    href: 'marks',
    imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644021309/React-jj/blogs/blog2_nifxlo.jpg"
  },

]

const Id: FC<Props> = ({ data, site, sites }) => {
  const { query } = useRouter()
  return (
    <Layout
      title='Dashboard'
      site={site}
    >
      <Dashboard tree={getDataTree(sites)} >
        {
          query.id === 'new'
            ?
            null
            :
            <>
              <HeadingDashboard title='Sites' />
              <Grid data={datas} />
            </>
        }
        <HeadingForm title="Site" />
        <FormSite data={data} />
        {/* <FormSite2 data={data} /> */}
        {/* <SiteF /> */}
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id = '' } = params as { id: string }
  let data: SiteForm | null | any
  if (id === 'new') {
    data = {
      title: "",
      domain: ".com",
      logo: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      icon: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      imageSrc:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg",
      imageAlt: "nan",
      numberPhone: 123456,
      address: "address",
      location: "location",
      description: "description",
      type: "",
      client: "",
    };
  } else {
    const { site } = await graphQLClientS.request(SITE, { _id: id })
    data = {
      title: site!.data.title,
      domain: site!.domain,
      logo: site!.data.logo,
      icon: site!.data.icon,
      imageSrc: site!.data.imageSrc,
      imageAlt: site!.data.imageAlt,
      numberPhone: site!.data.numberPhone,
      address: site!.data.address,
      location: site!.data.location,
      description: site!.data.description,
      type: site!.type,
      client: site!.client,
    };
  }
  const { site } = await graphQLClientS.request(SITE, { _id: process.env.API_SITE })
  const { sitesAll } = await graphQLClientS.request(SITES)
  return {
    props: {
      data, site, sites: sitesAll
    }
  }
}
export default Id