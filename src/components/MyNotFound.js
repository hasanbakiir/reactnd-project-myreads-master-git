import React from 'react';
import { Link } from 'react-router-dom';
import MyNotFound from '../images/MyNotFound.jpg';

const myNotFound = () => (
  <div>
    <h1 className="not-found-title">
      These are not the books you are looking for...
    </h1>
    <figure className="not-found-img">
      <img src={MyNotFound} alt="Page Not Found" />
      <figcaption>
        Photo by Hope House Press - Leather Diary Studio on Unsplash
      </figcaption>
    </figure>
    <div className="home-link">
      <Link to="/">Return home and try again</Link>
    </div>
  </div>
);

export default MyNotFound;
