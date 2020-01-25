import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

import Layout from '../components/Layout';
// import Features from '../components/Features';
// import BlogRoll from '../components/BlogRoll';
import ProjectRoll from '../components/ProjectRoll';

const IconHolder = ({ icon, title }) => (
  <>
    <figure className="image is-96x96" style={{ margin: 'auto' }}>
      <img src={`/img/icons/${icon}.png`} alt={`${icon} icon`} />
    </figure>
    <h4 className="subtitle">{title}</h4>
  </>
);
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
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">Latest Projects</h1>
        <ProjectRoll />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">Skills</h1>
        <h2 className="title is-2">Bottom Line</h2>
        <p className="subtitle">
          I am a web developer who mainly works in Javascript. I also write a
          lot. You can find me on{' '}
          <a href="https://medium.com/@jarednutt27">Medium</a>,{' '}
          <a href="https://dev.to/darthostrich">Practical Dev</a> or in video
          version on{' '}
          <a href="https://www.youtube.com/channel/UCZ9sBtbkSoLhjUaS-B0I-BQ">
            Youtube
          </a>
          .
        </p>
        <h2 className="title is-2">Development</h2>
        <h3 className="title is-3">Everyday Languages</h3>
        <article className="columns">
          <div className="column has-text-centered">
            <IconHolder icon="javascript" title="Javascript" />
            <p>
              <strong>Flavors:</strong>
            </p>
            <p>Vanilla, ES6+, Node</p>
          </div>
          <div className="column has-text-centered">
            <IconHolder icon="html5" title="HTML" />
            <p>
              <strong>Flavors:</strong>
            </p>
            <p>Pug</p>
          </div>
          <div className="column has-text-centered">
            <IconHolder icon="css3" title="CSS" />
            <p>
              <strong>Flavors:</strong>
            </p>
            <p>Sass</p>
          </div>
        </article>
        <h3 className="title is-3">Familiar Languages</h3>
        <article className="columns">
          <div className="column has-text-centered">
            <IconHolder title="Swift" icon="swift" />
          </div>
          <div className="column has-text-centered">
            <IconHolder title="Kotlin" icon="kotlin" />
          </div>
          <div className="column has-text-centered">
            <IconHolder title="Python" icon="python" />
          </div>
          <div className="column has-text-centered">
            <IconHolder title="PhP" icon="php" />
          </div>
        </article>
        <h3 className="title is-3">Frameworks</h3>
        <article className="columns">
          <div className="column has-text-centered">
            <IconHolder title="MongoDB" icon="mongodb" />
          </div>
          <div className="column has-text-centered">
            <IconHolder title="AWS" icon="aws" />
          </div>
          <div className="column has-text-centered">
            <IconHolder title="MySQL" icon="mysql" />
          </div>
          <div className="column has-text-centered">
            <IconHolder title="React" icon="react" />
          </div>
          <div className="column has-text-centered">
            <IconHolder title="Shopify" icon="shopify" />
          </div>
          <div className="column has-text-centered">
            <div className="column">
              <IconHolder title="Gatsby" icon="gatsby" />
            </div>
          </div>
        </article>
        <h3 className="title">Tools</h3>
        <article className="columns">
          <div className="column has-text-centered">
            <IconHolder title="github" icon="github" />
          </div>
          <div className="column has-text-centered">
            <IconHolder title="npm" icon="npm" />
          </div>
          <div className="column has-text-centered">
            <IconHolder title="webpack" icon="webpack" />
          </div>
        </article>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">About</h1>
        <div className="columns">
          <div className="column">
            <blockquote>I Just want to build cool things.</blockquote>
          </div>
          <div className="column">
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
