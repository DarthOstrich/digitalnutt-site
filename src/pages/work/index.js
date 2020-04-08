import React from "react";
import Layout from "../../components/Layout";
import ProjectRoll from "../../components/ProjectRoll";

export default class WorkIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1 className="title is-1 has-text-centered">Recent Work</h1>
            <ProjectRoll />
            {/* <h1 className="title is-1 has-text-centered">Other Things I've worked on</h1> */}
          </div>
        </section>
      </Layout>
    );
  }
}
