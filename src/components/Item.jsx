function Item(props) {
  const handleClick = () => {
    const value = props.name;
    props.valueChange(value);
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
        onClick={handleClick}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
