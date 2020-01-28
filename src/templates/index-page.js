import React from 'react';
import PropTypes from 'prop-types';
// import { Link, graphql, StaticQuery } from 'gatsby';

import Layout from '../components/Layout';
// import Features from '../components/Features';
// import BlogRoll from '../components/BlogRoll';
import ProjectRoll from '../components/ProjectRoll';

const IconHolder = ({ icon, title, children }) => (
  <div className="column has-text-centered is-one-third ">
    <figure
      className="image is-64x64 skills-list-icon"
      style={{ margin: 'auto', marginBottom: '0.5rem' }}>
      <img src={`/img/icons/${icon}.png`} alt={`${icon} icon`} />
    </figure>
    <h4 className="subtitle">{title}</h4>
    {children}
  </div>
);
export const IndexPageTemplate = (
  {
    // image,
    // title,
    // heading,
    // subheading,
    // mainpitch,
    // description,
    // intro,
  },
) => (
  <>
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">Case Studies</h1>
        <ProjectRoll />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">Skills</h1>
        <div className="columns">
          <div className="column is-one-quarter has-text-centered">
            <h2 className="title is-2">Development</h2>
            <figure className="image ">
              <svg
                data-name="terminal-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 138 117.5"
                className="icon icon--section">
                <title>portfolio-logo-set</title>
                <path
                  d="M29.42,44.15V46.9L17.26,54.48l-1.44-2,11.3-7-11.3-6.94,1.31-2Z"
                  style={{ fill: '#231f20' }}
                />
                <path d="M30.92,52h16v2.37h-16Z" style={{ fill: '#231f20' }} />
                <rect
                  x="2"
                  y="2"
                  width="134"
                  height="113.5"
                  rx="10"
                  ry="10"
                  className="icon__stroke"
                />
                <line
                  x1="1.79"
                  y1="25.17"
                  x2="136.21"
                  y2="25.17"
                  className="icon__stroke icon__stroke--inner"
                />
              </svg>
            </figure>
          </div>
          <div className="column">
            <h3 className="title is-3">Bottom Line</h3>
            <p className="subtitle">
              I am a web developer who mainly works in Javascript. I also write
              a lot. You can find me on{' '}
              <a href="https://medium.com/@jarednutt27">Medium</a>,{' '}
              <a href="https://dev.to/darthostrich">Practical Dev</a> or in
              video form on{' '}
              <a href="https://www.youtube.com/channel/UCZ9sBtbkSoLhjUaS-B0I-BQ">
                Youtube
              </a>
              .
            </p>
            <h3 className="title is-3">Everyday Languages</h3>
            <article className="columns is-multiline is-mobile">
              <IconHolder icon="javascript" title="Javascript">
                <p>
                  <strong>Flavors:</strong>
                </p>
                <p>Vanilla, ES6+, Node</p>
              </IconHolder>
              <IconHolder icon="html5" title="HTML">
                <p>
                  <strong>Flavors:</strong>
                </p>
                <p>Pug</p>
              </IconHolder>
              <IconHolder icon="css3" title="CSS">
                <p>
                  <strong>Flavors:</strong>
                </p>
                <p>Sass</p>
              </IconHolder>
            </article>
            <h3 className="title is-3">Familiar Languages</h3>
            <article className="columns is-multiline is-mobile">
              <IconHolder title="Swift" icon="swift" />
              <IconHolder title="Kotlin" icon="kotlin" />
              <IconHolder title="Python" icon="python" />
              <IconHolder title="PhP" icon="php" />
            </article>
            <h3 className="title is-3">Frameworks</h3>
            <article className="columns is-multiline is-mobile">
              <IconHolder title="MongoDB" icon="mongodb" />
              <IconHolder title="AWS" icon="aws" />
              <IconHolder title="MySQL" icon="mysql" />
              <IconHolder title="React" icon="react" />
              <IconHolder title="Shopify" icon="shopify" />
              <IconHolder title="Gatsby" icon="gatsby" />
            </article>
            <h3 className="title">Tools</h3>
            <article className="columns is-multiline is-mobile">
              <IconHolder title="github" icon="github" />
              <IconHolder title="npm" icon="npm" />
              <IconHolder title="webpack" icon="webpack" />
            </article>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">About</h1>
        <div className="columns">
          <div className="column">
            <blockquote>I just want to build cool things.</blockquote>
          </div>
          <div className="column content">
            <p>
              The years I spent in the Air Force and as a developer have taught
              me the importance of order and structure. Through this, and my
              fascination with philosophy, I have grown a passion for functional
              minimalism. These ideals translate into how I conduct my work.
              Every project serves a function, and every element serves a
              purpose.
            </p>
            <p>
              I am currently working as a freelance web developer, and trying to
              learn as much about Javascript along the way. When it comes down
              to it, I just want to build cool things. When I'm not writing code
              I'm probably playing <strike>Overwatch</strike> Apex Legends,
              listening to an audiobook or drinking craft beer...or possibly all
              three.
            </p>
          </div>
        </div>
      </div>
    </section>
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
