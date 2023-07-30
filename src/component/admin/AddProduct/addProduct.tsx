import axios from "axios";
import { Button, Form, Input, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddProductAction } from "../../../actions/product";
import { Select } from "antd";
import { fetchCat, getAllCategory } from "../../../actions/category";
const { Option } = Select;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddProduct: React.FC = () => {
  const [name, setname] = useState([]);
  const [price, setprice] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [description, setdescription] = useState("");
  const [color, setcolor] = useState("");
  const [cat_id, setCatId] = useState(0);
  const [image, setimage] = useState("");
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCat());
  }, []);
  const { categories } = useSelector((state: any) => state.category);

  //
  const handleUpload = async ({ file }: any) => {
    const cloud_name = "dw6wgytc3";
    const preset_name = "demo_upload";
    const folder_name = "DUAN";
    const api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

    const formdata = new FormData();
    formdata.append("upload_preset", preset_name);
    formdata.append("folder", folder_name);

    formdata.append("file", file);
    const response = await axios.post(api, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setimage(response.data.secure_url);
  };
  //
  console.log(image, name, price, quantity, description, color, cat_id);
  if (image) {
    alert("done");
  }
  const handleAdd = () => {
    dispatch(
      AddProductAction({
        name: name,
        price: price,
        quantity: quantity,
        description: description,
        color: color,
        cat_id: cat_id,
        image: image,
      })
    );
    navigate("/admin/product");
  };
  const handleCategoryChange = (value: any) => {
    setCatId(value);
    console.log(value);
  };

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={() =>
          dispatch(
            AddProductAction({
              name: name,
              price: price,
              quantity: quantity,
              description: description,
              color: color,
              catId: cat_id,
              image: `${image}`,
            })
          )
        }
      >
        <Form.Item label="Name ">
          <Input onChange={(e: any) => setname(e.target.value)} />
        </Form.Item>
        <Form.Item label="Price ">
          <Input onChange={(e: any) => setprice(e.target.value)} />
        </Form.Item>
        <Form.Item label="Quantity ">
          <Input onChange={(e: any) => setquantity(e.target.value)} />
        </Form.Item>
        <Form.Item label="Description ">
          <Input onChange={(e: any) => setdescription(e.target.value)} />
        </Form.Item>
        <Form.Item label="Color ">
          <Input onChange={(e: any) => setcolor(e.target.value)} />
        </Form.Item>
        <Form.Item label="Category">
          <Select onChange={handleCategoryChange}>
            {categories?.data?.map((item: any) => {
              return (
                <>
                  <Option value={item.cat_id}>{item.name}</Option>
                </>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label="Upload Image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            listType="picture-card"
            customRequest={({ file }: any) => handleUpload({ file })}
          >
            <div>
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        {image ? (
          <Form.Item label="Add Product">
            <Button onClick={handleAdd}>Add Product</Button>
          </Form.Item>
        ) : (
          ""
        )}
      </Form>
    </>
  );
};

export default AddProduct;
