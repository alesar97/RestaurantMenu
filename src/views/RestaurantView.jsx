import { useState } from "react";

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
  const [selectedItem, setSelectedItem] = useState([]);

  const toggleAddToCart = (itemName) => {
    if (selectedItem.includes(itemName)) {
      setSelectedItem((prevItems) =>
        prevItems.filter((selected) => selected !== itemName)
      );
    } else {
      setSelectedItem((prevItems) => [...prevItems, itemName]);
    }
  };

  return (
    <div className="container mx-auto py-8  text-lg">
      <h1 className="font-semibold text-3xl text-gray-900 mb-4">Restaurant</h1>

      <div className="mt-8 text-center">
        <h3 className="text-2xl mb-2">Your Cart: </h3>
        <div className="inline-block">
          <ul className="text-left list-disc text-xl text-black">
            {selectedItem.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
          {selectedItem.length > 0 && (
            <button
              className="bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 py-2 px-4 rounded-md focus:outline-none m-4"
              onClick={() => setSelectedItem([])}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {menu.map((item) => (
          <Item
            toggleAddToCart={toggleAddToCart}
            name={item.name}
            src={item.image}
            key={item.name}
            inCart={selectedItem.includes(item.name)}
          />
        ))}
      </div>
      {selectedItem.length >= 3 ? (
        <p className="font-semibold text-3xl text-gray-600 m-4">
          You unlocked a 10% discount 🎉
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

function Item(props) {
  const addButton = () => {
    props.toggleAddToCart(props.name);
  };
  return (
    <div className="bg-gray-100 p-4 rounded-lg text-center">
      <img
        className="rounded-md mx-auto w-full h-48 object-cover"
        src={props.src}
        alt={props.name}
      />
      <h3 className="text-lg font-semibold my-2">{props.name}</h3>
      <button
        onClick={addButton}
        className={
          props.inCart
            ? "bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 py-2 px-4 rounded-md focus:outline-none"
            : "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 py-2 px-4 rounded-md focus:outline-none"
        }
      >
        {props.inCart ? "Remove from your Cart" : "Add to your Cart"}
      </button>
    </div>
  );
}

export default RestaurantView;
