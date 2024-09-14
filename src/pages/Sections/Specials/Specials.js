import React from "react";
import "./Specials.css";
import Button from "../../../components/Button/Button";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const specials = [
  {
    id: 1,
    title: "Greek salad",
    description:
      'This Greek salad is a must-try! It is made with fresh vegetables, feta cheese, and olives. It is a healthy and delicious option for lunch or dinner.',
    image:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg",
    price: "7.77 €",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Bruschetta is a classic Italian antipasto (appetizer) that consists of grilled bread topped with ripe tomatoes, fresh basil, garlic, and olive oil. It is a simple and delicious dish that is perfect for any occasion.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&resize=1200:*",
    price: "14.77 €",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "This lemon lush dessert is a refreshing and delicious treat that is perfect for any occasion. It is made with a buttery shortbread crust, a creamy lemon filling, and a fluffy whipped cream topping. It is sure to be a hit with family and friends!",
    image:
      "https://www.southernliving.com/thmb/z706skTv8rLcnFwyTEnMzr_H5zQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_27364_SR_Lemon-Lush_13190-fd96c709fc2946a7aeb5c869f9ad470e.jpg",
    price: "9.59 €",
  },
];

const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(pages.get("orders").path);
  };
  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">This weeks specials!</h1>
        <Button title={"Online Menu"} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {specials.map((special) => (
          <FoodCard
            key={special.id}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
