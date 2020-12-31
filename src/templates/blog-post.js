import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  let featuredImgFluid = post.frontmatter.image.childImageSharp.fluid;

  console.log(featuredImgFluid);
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Img
        fluid={featuredImgFluid}
        sizes={{
          ...featuredImgFluid,
          aspectRatio: 21 / 9,
        }}
      />
      <div className="max-w-3xl mr-auto ml-auto p-4">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxHeight: 800, maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
