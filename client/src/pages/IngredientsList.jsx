import React from "react";

var i = 0;

const IngredientsList = (props) => {
  return ( <div> 

      {props.ingredients.map((ingredient, i)=>(
          <li key={i}>
          
          {ingredient.measures.us.amount*props.servingSize + " " + ingredient.measures.us.unitShort + " " + ingredient.name}
       
        </li>



      ))}
  </div>);
};

export default IngredientsList;
