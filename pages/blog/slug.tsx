import { GetStaticProps } from "next";
import { FC } from "react";
import { Blog, Blog1, Blog2, Blog3 } from "../../components/component/blog"
import { Layout } from '../../components/layouts/layout';
import { SITE } from "../../src/graphql";
import { Site } from "../../src/interfaces/site";
import { graphQLClientS } from "../../src/swr/graphQLClient";

interface Props {
  site: Site
}

const Slug:FC<Props> =({site}) => {
  return (
    <Layout
    title='Blog'
    site={site}
  >
    <Blog3 />
    <Blog2 />
    <Blog1 />
    <Blog />
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
export default Slug