import React from 'react'
import { BrandArrowIconIcon } from "../../Res/icons";
import "./blogheder.scss";
const BlogHeader = ({ title, button }) => {
  return (
    <div className="blogs-header">
      <h2>{title}</h2>     
      <button className="view-all">
        {button}
          <BrandArrowIconIcon className="Icon"/>
      </button>
    </div>
  );
};

export default BlogHeader
