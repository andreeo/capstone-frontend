import React from "react";
import "./Hero.css";
import Button from "../../../components/Button/Button";
import Image from "../../../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Hero = () => {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(pages.get("reservations").path);
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>
           We are a family owned restaurant that has been serving the Chicago area for over 20 years. We offer a variety of dishes that are sure to please your taste buds. 
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
          className="image"
          src={Image}
          alt="Restarurant food"
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;
