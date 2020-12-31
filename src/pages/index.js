import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Anasayfa" />
      <div className="max-w-3xl mr-auto ml-auto p-4">
        <h4>{data.allMarkdownRemark.totalCount} Adet Yazı</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              <Link
                to={`posts${node.fields.slug}`}
                className="visited underline text-blue-700 hover:no-underline"
              >
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </Link>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
