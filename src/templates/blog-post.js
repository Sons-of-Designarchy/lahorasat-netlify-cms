import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/page-layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  image,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {helmet || ""}
      <div className="section section-purple">
        <div className="container content">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              {image ? (
                <div className="featured-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: image,
                      alt: `featured image thumbnail for post ${title}`,
                    }}
                  />
                </div>
              ) : null}
              <h1 className="text-primary mt-5">{title}</h1>
              <p className="text-light font-lg">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-white blog-content">
        <div className="container content">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <PostContent content={content} />
              {tags && (
                      <>
                        <div className="d-flex my-4">
                          {tags.map((tag) => (
                            <div className="label label-primary label-sm" style={{ marginRight: '0.33rem' }} key={tag + `tag`} >
                              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        image={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
