import { useState } from "react";
import Item from "../components/Item.jsx";

const menu = [
  {
    name: "Soup",
    image: "foods/soup.jpg",
  },
  {
    name: "Avocado eggs",
    image: "foods/egg.jpg",
  },
  {
    name: "Hamburger",
    image: "foods/hamburger.jpg",
  },
  {
    name: "Pizza Funghi",
    image: "foods/funghi.jpg",
  },
  {
    name: "Cake",
    image: "foods/cake.jpg",
  },
  {
    name: "Noodles",
    image: "foods/noodles.jpg",
  },
];

const RestaurantView = () => {
  const [selectedMenuItem, setMenuItem] = useState("");

  const valueChange = (newValue) => {
    setMenuItem(newValue);
  };
  return (
    <div className="container mx-auto py-8">
      <h1 className="font-semibold text-3xl text-gray-900 mb-4">Restaurant</h1>
      <h3 className="text-lg text-gray-700 mb-2">
        Your Cart: {selectedMenuItem}
      </h3>
      <Menu valueChange={valueChange} />
    </div>
  );
};

function Menu(props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {menu.map((item) => (
        <Item
          valueChange={props.valueChange}
          name={item.name}
          src={item.image}
          key={item.name}
        />
      ))}
    </div>
  );
}

export default RestaurantView;
