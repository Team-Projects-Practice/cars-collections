import React from 'react'
import { ArrowIcon } from "../../Res/icons";
import "./blogheder.scss";
const BlogHeader = ({ title, button }) => {
  return (
    <div className="blogs-header">
      <h2>{title}</h2>     
      <button className="view-all">
        {button}
          <ArrowIcon className="Icon"/>
      </button>
    </div>
  );
};

export default BlogHeader
