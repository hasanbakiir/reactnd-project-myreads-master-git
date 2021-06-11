import React from 'react';
import { Link } from 'react-router-dom';
import myNotFound from '../images/my.jpg';

const MyNotFound = () => (
  <div>
    <h1 className="not-found-title">

    </h1>
    <figure className="not-found-img">
      <img src={myNotFound} alt="Page Not Found" />
      <figcaption>

      </figcaption>
    </figure>
    <div className="home-link">
      <Link to="/">Return home and try again</Link>
    </div>
  </div>
);

export default MyNotFound;
