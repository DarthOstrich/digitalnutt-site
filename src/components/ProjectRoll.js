import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
// import PreviewCompatibleImage from './PreviewCompatibleImage';

const ProjectCard = ({ project }) => (
  <article className="column " style={{ padding: '0' }}>
    <Link to={project.fields.slug} style={{ position: 'relative' }}>
      <figure className="image is-3by2">
        <img
          src={project.frontmatter.profileimage.childImageSharp.fluid.src}
          alt={project.frontmatter.profileimage.name}
        />
        <div className="label">
          <h1 className="title has-text-yellow">{project.frontmatter.title}</h1>
          <h2 className="subtitle has-text-white">
            {project.frontmatter.type}
          </h2>
        </div>
      </figure>
      {/* <PreviewCompatibleImage imageInfo={project.frontmatter.featuredimage} /> */}
    </Link>
  </article>
);

class ProjectRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: projects } = data.allMarkdownRemark;

    return (
      <article className="columns ">
        {projects.map(project => {
          return <ProjectCard project={project.node} key={project.node.id} />;
        })}
      </article>
    );
  }
}
ProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                type
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
      return <ProjectRoll data={data} count={count} />;
    }}
  />
);
