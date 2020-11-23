import React from 'react';
import { IconContext } from 'react-icons';
import {
  GiPeanut, GiGrain, GiSaltShaker, GiChocolateBar, GiShinyApple, GiMilkCarton,
} from 'react-icons/gi';
import { BsDropletFill } from 'react-icons/bs';
import {
  FaCookie,
  FaBreadSlice,
  FaCheese,
  FaSeedling,
  FaWineBottle,
  FaBacon,
  FaFish,
  FaCarrot,
  FaPepperHot,
} from 'react-icons/fa';

const foodCategoryIconsLookup = {
  Baking: <FaCookie />,
  Bread: <FaBreadSlice />,
  Condiments: <GiSaltShaker />,
  Cheese: <FaCheese />,
  Dairy: <GiMilkCarton />,
  Fruits: <GiShinyApple />,
  Herbs: <FaSeedling />,
  Liquor: <FaWineBottle />,
  Meats: <FaBacon />,
  Nuts: <GiPeanut />,
  Snacks: <GiChocolateBar />,
  'Oil, Vinegar': <BsDropletFill />,
  'Pasta/Grains': <GiGrain />,
  Seafood: <FaFish />,
  'Spices/Seasoning': <FaPepperHot />,
  Vegetables: <FaCarrot />,
};

const categoryIcon = ({ category }) => (
  <IconContext.Provider value={{ size: '25px', className: 'iconWrapper' }}>
    {foodCategoryIconsLookup[category]}
  </IconContext.Provider>
);

export default categoryIcon;
