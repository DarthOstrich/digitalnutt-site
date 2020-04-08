import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Layout from "../../components/Layout";

const RecentPostsRoll = () => {
  return (
    <StaticQuery
      query={graphql`
        query allMediumPostsQuery {
          allMediumPost {
            edges {
              node {
                id
                title
                virtuals {
                  subtitle
                  previewImage {
                    imageId
                  }
                }
                slug
                medium_id
              }
            }
          }
        }
      `}
      render={(data, count) => {
        return data.allMediumPost.edges.map(({ node }) => {
          return (
            <p>
              <a href={`https://medium.com/@jarednutt27/${node.slug}-${node.medium_id}`}>{node.title}</a>
            </p>
          );
        });
      }}
    />
  );
};

export default class TeachingPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="title is-1 has-text-centered">Teaching</h1>
              <h2>Written</h2>
              <p>
                I write articles I wish I had when learning. I write on <a href="https://medium.com/@jarednutt27">Medium</a>, <a href="https://dev.to/codenutt">Practical Dev</a> and sometimes on <a href="https://www.freecodecamp.org/news/author/jared/">FreecodeCamp News</a>
              </p>
              <h3>Recent Posts</h3>
              <RecentPostsRoll />
              <h2>Video</h2>
              <h3>YouTube</h3>
              <p>I have a youtube channel dedicated to web development.</p>
              <h3>Twitch</h3>
              <p>Sometimes I stream on Twitch.</p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
