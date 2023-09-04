import React from "react";

const Cake = ({ cake }) => {

    return(
        <div className="cake">
        <h3>{Cake.cakeName}</h3>
        <h4>Ingredients:</h4>
        <ul>
            {cake.ingredients.map( ingredient => {
                return <li>{ingredient}</li>
            })}
        </ul>
        <p>Rating: {cake.rating}</p>
        <p>Price: £{cake.price}</p>
    
        </div>
    )
}

export default Cake;