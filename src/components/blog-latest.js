import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { kebabCase } from "lodash-es";

class BlogLatest extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="container">
        <div className="section">
          <h3 className="mb-5 text-center">
            Aprende más sobre el Sat en nuestro blog
          </h3>
          <div className="row justify-content-center">
            {posts &&
              posts.slice(0, 3).map(({ node: post }) => (
                <Link
                  to={post.fields.slug}
                  className="col-lg-4 mb-4"
                  key={post.id}
                >
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
                                <Link to={`/tags/${kebabCase(tag)}/`}>
                                  {tag}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      <h6 className="mt-2">{post.frontmatter.title}</h6>
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
          <div className="text-center">
            <a href="/blog/" className="btn btn-primary d-inline-block">
              Ver todas las entradas del blog...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

BlogLatest.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogLatestQuery {
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
    render={(data, count) => <BlogLatest data={data} count={count} />}
  />
);
