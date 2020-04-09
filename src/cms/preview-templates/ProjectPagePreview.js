import React from "react";
import PropTypes from "prop-types";
import { ProjectPageTemplate } from "../../templates/project";

const ProjectPagePreview = ({ entry, widgetFor }) => {
  return (
    <ProjectPageTemplate
      content={widgetFor("body")}
      image={entry.getIn(["data", "featuredimage"])}
      title={entry.getIn(["data", "title"])}
      description={entry.getIn(["data", "description"])}
      role={entry.getIn(["data", "role"])}
      technology={entry.getIn(["data", "technology"])}
      tags={entry.getIn(["data", "tags"])}
    />
  );
};

ProjectPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ProjectPagePreview;
