import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { kebabCase } from "lodash-es";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="row justify-content-center">
        {posts &&
          posts.map(({ node: post }) => (
            <Link to={post.fields.slug} className="col-lg-4 mb-4" key={post.id}>
              <article
                className={`course-card ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
                <div className="p-3 featured-content d-flex flex-column flex-1">
                  {post.frontmatter.tags && (
                    <>
                      <div className="d-flex">
                        {post.frontmatter.tags.map((tag) => (
                          <div
                            className="label label-primary label-sm"
                            style={{ marginRight: "0.33rem" }}
                            key={tag + `tag`}
                          >
                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  <h4 className="mt-2">{post.frontmatter.title}</h4>
                  <p className="font-xs flex-1 mb-0">
                    {post.frontmatter.description}
                  </p>
                  <Link
                    className="btn btn-secondary d-block mt-3"
                    to={post.fields.slug}
                  >
                    Seguir leyendo →
                  </Link>
                </div>
                <p></p>
              </article>
            </Link>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                tags
                templateKey
                description
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
