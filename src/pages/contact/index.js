import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="title is-1 has-text-centered">Contact</h1>
              <p>
                The best way to get a hold of me is on <a href="https://twitter.com/code_nutt">twitter</a>.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
