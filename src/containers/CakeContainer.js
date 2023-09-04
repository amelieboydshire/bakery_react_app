import React, { useState } from "react";
import Cake from "../components/Cake";

const CakeContainer = () => {
  const [cakeRecipes, setCakeRecipes] = useState([
    {
      cakeName: "Victoria Sponge",
      ingredients: [
        "eggs",
        "butter",
        "sugar",
        "self-raising flour",
        "baking powder",
        "milk"
      ],
      price: 5,
      rating: 5
    },
    {
      cakeName: "Tea Loaf",
      ingredients: [
        "eggs",
        "oil",
        "dried fruit",
        "sugar",
        "self-raising flour",
        "strong tea"
      ],
      price: 2,
      rating: 3
    },
    {
      cakeName: "Carrot Cake",
      ingredients: [
        "carrots",
        "walnuts",
        "oil",
        "cream cheese",
        "flour",
        "sugar"
      ],
      price: 8,
      rating: 5
    }
  ]);

  const mappedCakes = cakeRecipes.map((cake, id) => (
    <Cake key={id} cake={cake} />
  ));

  return (
    <>
      <div className="container">
        {mappedCakes}
      </div>
    </>
  );
};

export default CakeContainer;