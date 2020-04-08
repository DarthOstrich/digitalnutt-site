import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
// import PreviewCompatibleImage from './PreviewCompatibleImage';

const ProjectCard = ({ project }) => {
  const { frontmatter, fields } = project;
  const { type, profileimage, featuredimage } = frontmatter;
  return (
    <article className="column " style={{ padding: "0" }}>
      <Link to={project.fields.slug} style={{ position: "relative" }}>
        <figure className="image is-3by2">
          <img src={profileimage.childImageSharp.fluid.src} alt={profileimage.name} />
          <div className="label">
            <h1 className="title has-text-yellow">{frontmatter.title}</h1>
            <h2 className="subtitle has-text-white">{frontmatter.type}</h2>
          </div>
        </figure>
        {/* <PreviewCompatibleImage imageInfo={project.frontmatter.featuredimage} /> */}
      </Link>
    </article>
  );
};

class ProjectRoll extends React.Component {
  render() {
    const { data, caseStudiesOnly } = this.props;
    const { edges: projects } = data.allMarkdownRemark;

    return (
      <article className="columns ">
        {projects.map(({ node }) => {
          if (caseStudiesOnly === true && node.frontmatter.featured) {
            return <ProjectCard project={node} key={node.id} />;
          } else {
            return <ProjectCard project={node} key={node.id} />;
          }
        })}
      </article>
    );
  }
}
ProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default ({ caseStudiesOnly }) => {
  return (
    <StaticQuery
      query={graphql`
        query ProjectRollQuery {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey: { eq: "project" } } }) {
            edges {
              node {
                id
                frontmatter {
                  title
                  type
                  featured
                  featuredimage {
                    childImageSharp {
                      fluid(maxWidth: 600, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  profileimage {
                    childImageSharp {
                      fluid(maxWidth: 600, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data, count) => {
        return <ProjectRoll data={data} count={count} caseStudiesOnly={caseStudiesOnly} />;
      }}
    />
  );
};
