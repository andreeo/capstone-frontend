import React from "react";
import "./About.css";
import ImageRestaurant from "../../../assets/restaurant.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
          Little Lemon is a family-owned restaurant located in the heart of
          Chicago. We serve a variety of delicious meals and drinks. Our
          restaurant is a perfect place to enjoy a meal with your family and
          friends. We offer a cozy and welcoming atmosphere for our customers.
          Our menu includes a variety of meals such as pasta, pizza, and
          sandwiches. We also offer a variety of drinks including wine, beer,
          and cocktails. Our restaurant is open for lunch and dinner every day
          of the week. We look forward to serving you at Little Lemon! 
        </p>
      </div>

      <img
        className="about-image-bruchetta"
        src={ImageRestaurant}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  );
};

export default About;
