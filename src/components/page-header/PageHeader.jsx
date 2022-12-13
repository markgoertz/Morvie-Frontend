import React from "react";

import "./page-header.scss";

import bg from "../../assets/footer-bg.jpg";
import { Link } from "react-router-dom";

const PageHeader = (props) => {
  if (props.children === "Not found")
    return (
      <section class="notFound">
        <div class="img">
          <img
            src="https://assets.codepen.io/5647096/backToTheHomepage.png"
            alt="Back to the Homepage"
          />
          <img
            src="https://assets.codepen.io/5647096/Delorean.png"
            alt="El Delorean, El Doc y Marti McFly"
          />
        </div>
        <div class="text">
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <h3>BACK TO HOME?</h3>
          <Link to="/" class="yes">
            YES
          </Link>
          <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
        </div>
      </section>
    )
    return (
        <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
          <h2>{props.children}</h2>
        </div>
      )
    
};

export default PageHeader;
