// AddProduct.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProductAction } from "../../../actions/product";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    quantity: 0,
    description: "",
    color: "",
    image: "",
    cat_id: 1,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onHandleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(AddProductAction(formData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="quantity"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="description"
        />
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="color"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="image"
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
