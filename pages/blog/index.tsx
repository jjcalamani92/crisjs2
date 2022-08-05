import { GetStaticProps } from "next";
import { FC } from "react";
import { Blogs } from "../../components/component/blogs";
import { Layout } from "../../components/layouts/layout";
import { SITE } from "../../src/graphql";
import { Site } from "../../src/interfaces/site";
import { graphQLClientS } from "../../src/swr/graphQLClient";

interface Props {
  site: Site
}

const Blog:FC<Props> =({site}) => {
  return ( 
    <Layout
    title='Inicio'
    site={site}
  >
    <Blogs />
  </Layout>
   );
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { site } = await graphQLClientS.request(SITE, { _id: process.env.API_SITE })

  return {
    props: { site }, // will be passed to the page component as props
    revalidate: 10,
  }
}
export default Blog;