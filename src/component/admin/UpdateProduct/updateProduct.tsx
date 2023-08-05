import axios from "axios";
import { Button, Form, Input, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddProductAction,
  GetOneProduct,
  UpdateProductAction,
} from "../../../actions/product";
import { Select } from "antd";
import { fetchCat } from "../../../actions/category";
import { instance } from "../../../api/instance";
const { Option } = Select;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const UpdateProduct = () => {
  const [form] = Form.useForm();
  const [name, setname] = useState([]);
  const [price, setprice] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [description, setdescription] = useState("");
  const [color, setcolor] = useState("");
  const [cat_id, setCatId] = useState(0);
  const [image, setimage] = useState("");
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { id } = useParams();
  const { products } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(fetchCat());
    dispatch(GetOneProduct(id));
  }, []);

  useEffect(() => {
    form.setFieldsValue(products);
    setname(products.name);
    setprice(products.price);
    setquantity(products.quantity);
    setdescription(products.description);
    setcolor(products.color);
    setCatId(products.cat_id);
    // setimage(products.image);
  }, [products]);
  //   useEffect(() => {
  //     setname(products.name);
  //     setprice(products.price);
  //     setquantity(products.quantity);
  //     setdescription(products.description);
  //     setcolor(products.color);
  //     setCatId(products.cat_id);
  //     setimage(products.image);
  //   }, [products]);

  console.log(products);

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
  if (image) {
    alert("done");
  }
  const handleUpdate = () => {
    dispatch(
      UpdateProductAction({
        id: id,
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
      <h1 style={{ marginTop: "50px", marginBottom: "50px" }}>
        Update Product
      </h1>
      <Form
        form={form}
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
        <Form.Item label="Name " name="name">
          <Input onChange={(e: any) => setname(e.target.value)} />
        </Form.Item>
        <Form.Item label="Price " name="price">
          <Input onChange={(e: any) => setprice(e.target.value)} />
        </Form.Item>
        <Form.Item label="Quantity " name="quantity">
          <Input onChange={(e: any) => setquantity(e.target.value)} />
        </Form.Item>
        <Form.Item label="Description " name="description">
          <Input onChange={(e: any) => setdescription(e.target.value)} />
        </Form.Item>
        <Form.Item label="Color " name="color">
          <Input onChange={(e: any) => setcolor(e.target.value)} />
        </Form.Item>
        <Form.Item label="Category" name="cat_id">
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
          <Form.Item label="Update Product">
            <Button onClick={handleUpdate}>Update Product</Button>
          </Form.Item>
        ) : (
          ""
        )}
      </Form>
    </>
  );
};

export default UpdateProduct;
