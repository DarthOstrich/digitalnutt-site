import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
// import Features from '../components/Features';
// import Testimonials from '../components/Testimonials';
// import Pricing from '../components/Pricing';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { HTMLContent } from '../components/Content';

export const ProjectPageTemplate = ({
  image,
  title,
  description,
  content,
  role,
  technology,
  url,
}) => {
  // const PostContent = contentComponent || Content;
  return (
    <div className="content">
      <div
        className="full-width-image-container margin-top-0 margin-bottom-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}></div>
      <section className="section">
        <h1
          className="has-text-centered title is-1"
          style={{
            marginTop: '-5rem',
            position: 'relative',
          }}>
          <a
            className="has-text-white"
            href={url}
            style={{
              background: '#CB4B16',
              paddingLeft: '2rem',
              paddingRight: '2rem',
            }}>
            {title}
          </a>
        </h1>
        <article className="columns container">
          <div className="column">
            <h2 className="title is-2">Role</h2>
            <p>{role}</p>
          </div>
          <div className="column">
            <h2 className="title is-2">Technology</h2>
            <div className="tags">
              {technology.map(tech => (
                <span className="tag is-success" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
        <h2 className="title is-2">Description</h2>
        <p>{description}</p>
        <p>Link: {<a href={url}>{title}</a> || 'No Link available'}</p>
        <h2 className="title is-2">Project Details</h2>
        <HTMLContent content={content} />
      </section>
    </div>
  );
};

ProjectPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  // heading: PropTypes.string,
  description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
  // main: PropTypes.shape({
  //   heading: PropTypes.string,
  //   description: PropTypes.string,
  //   image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  //   image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  //   image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // }),
  // testimonials: PropTypes.array,
  // fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // pricing: PropTypes.shape({
  //   heading: PropTypes.string,
  //   description: PropTypes.string,
  //   plans: PropTypes.array,
  // }),
};

const ProjectPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <ProjectPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        url={frontmatter.url}
        role={frontmatter.role}
        technology={frontmatter.technology}
        image={frontmatter.featuredimage}
        content={html}
      />
    </Layout>
  );
};

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProjectPage;

export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        role
        technology
        url
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
