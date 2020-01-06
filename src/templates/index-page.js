import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

import Layout from '../components/Layout';
// import Features from '../components/Features';
// import BlogRoll from '../components/BlogRoll';
import ProjectRoll from '../components/ProjectRoll';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>
    {/* <div */}
    {/*   className="full-width-image margin-top-0" */}
    {/*   style={{ */}
    {/*     backgroundImage: `url(${ */}
    {/*       !!image.childImageSharp ? image.childImageSharp.fluid.src : image */}
    {/*     })`, */}
    {/*     backgroundPosition: `top left`, */}
    {/*     backgroundAttachment: `fixed`, */}
    {/*   }} */}
    {/* > */}
    {/*   <div */}
    {/*     style={{ */}
    {/*       display: 'flex', */}
    {/*       height: '150px', */}
    {/*       lineHeight: '1', */}
    {/*       justifyContent: 'space-around', */}
    {/*       alignItems: 'left', */}
    {/*       flexDirection: 'column', */}
    {/*     }} */}
    {/*   > */}
    {/*     <h1 */}
    {/*       className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen" */}
    {/*       style={{ */}
    {/*         boxShadow: */}
    {/*           'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px', */}
    {/*         backgroundColor: 'rgb(255, 68, 0)', */}
    {/*         color: 'white', */}
    {/*         lineHeight: '1', */}
    {/*         padding: '0.25em', */}
    {/*       }} */}
    {/*     > */}
    {/*       {title} */}
    {/*     </h1> */}
    {/*     <h3 */}
    {/*       className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen" */}
    {/*       style={{ */}
    {/*         boxShadow: */}
    {/*           'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px', */}
    {/*         backgroundColor: 'rgb(255, 68, 0)', */}
    {/*         color: 'white', */}
    {/*         lineHeight: '1', */}
    {/*         padding: '0.25em', */}
    {/*       }} */}
    {/*     > */}
    {/*       {subheading} */}
    {/*     </h3> */}
    {/*   </div> */}
    {/* </div> */}
    <div className="container">
      <section className="section">
        <h1 className="title">Latest Projects</h1>
        <ProjectRoll />
      </section>
    </div>
    <div className="container">
      <section className="section">
        <h1 className="title">Skills</h1>
        <p>Skills</p>
        <h2 className="title">Bottom Line</h2>
        <p>
          I am a web developer who mainly works in Javascript. If you like
          lists, keep reading!
        </p>
        <h2 className="title">Development</h2>
        <h3 className="subtitle">Everyday Languages</h3>
        <article className="columns">
          <div className="column">Javascript</div>
          <div className="column">HTML</div>
          <div className="column">CSS</div>
        </article>
        <h3 className="subtitle">Familiar Languages</h3>
        <article className="columns">
          <div className="column">Swift</div>
          <div className="column">Kotlin</div>
          <div className="column">Python</div>
          <div className="column">PhP</div>
        </article>
        <h3 className="subtitle">Frameworks</h3>
        <article className="columns">
          <div className="column">MongoDB</div>
          <div className="column">AWS</div>
          <div className="column">MySQL</div>
          <div className="column">React</div>
          <div className="column">Shopify</div>
          <div className="column">Gatsby</div>
        </article>
        <h3 className="subtitle">Tools</h3>
        <article className="columns">
          <div className="column">GitHub</div>
          <div className="column">npm</div>
          <div className="column">webpack</div>
        </article>
      </section>
    </div>
    <div className="container">
      <section className="section">
        <h1 className="title">About</h1>
        <blockquote>I Just want to build cool things.</blockquote>
        <p>
          The years I spent in the Air Force and as a developer have taught me
          the importance of order and structure. Through this, and my
          fascination with philosophy, I have grown a passion for functional
          minimalism. These ideals translate into how I conduct my work. Every
          project serves a function, and every element serves a purpose.
        </p>
        <p>
          I am currently working as a freelance web developer, and trying to
          learn as much about Javascript along the way. When it comes down to
          it, I just want to build cool things. When I'm not writing code I'm
          probably playing <strike>Overwatch</strike> Apex Legends, listening to
          an audiobook or drinking craft beer...or possibly all three.
        </p>
      </section>
    </div>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
      // image={frontmatter.image}
      // title={frontmatter.title}
      // heading={frontmatter.heading}
      // subheading={frontmatter.subheading}
      // mainpitch={frontmatter.mainpitch}
      // description={frontmatter.description}
      // intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         subheading
//         mainpitch {
//           title
//           description
//         }
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `;
