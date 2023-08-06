import axios from "axios";
import { Button, Form, Input, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddProductAction } from "../../../actions/product";
import { Select } from "antd";
import { fetchCat } from "../../../actions/category";
import { ToastContainer, toast } from "react-toastify";
import { pause } from "../../../utils/pause";
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

  const [nameError, setNameError] = useState<string>("");
  const [priceError, setPriceError] = useState<string>("");
  const [colorError, setColorError] = useState<string>("");
  const [descError, setDescError] = useState<string>("");
  const [catError, setCatError] = useState<string>("");
  const [quantityError, setQuantityError] = useState<string>("");
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
  const handleAdd =async () => {
    if (!name) {
      setNameError("Không được để trống!");
      return;
    }
    if (!price) {
      setPriceError("Không được để trống!");
      return;
    }
    if (!quantity) {
      setQuantityError("Không được để trống!");
      return;
    }
    if (!description) {
      setDescError("Không được để trống!");
      return;
    }
    if (!color) {
      setColorError("Không được để trống!");
      return;
    }
    if (!cat_id) {
      setCatError("Không được để trống!");
      return;
    }
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
  
    toast.success('Them thanh cong!', {
      position: toast.POSITION.TOP_RIGHT,
    });
    await pause(1000)
    navigate("/admin/product");
  };
  const handleCategoryChange = (value: any) => {
    setCatId(value);
    setNameError("");
  };

  return (
    <>
      <ToastContainer />
      <h1 style={{ marginTop: "50px", marginBottom: "50px" }}>Add Product</h1>
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
        <Form.Item label="Name "
          validateStatus={nameError ? "error" : ""}
          help={nameError}
          name="name">
          <Input onChange={(e: any) => {
            setname(e.target.value);
            setNameError("");
          }} />
        </Form.Item>
        <Form.Item label="Price " validateStatus={priceError ? "error" : ""}
          help={priceError} name="price">
          <Input onChange={(e: any) => {
            setprice(e.target.value);
            setPriceError("");
          }} />
        </Form.Item>
        <Form.Item label="Quantity " validateStatus={quantityError ? "error" : ""}
          help={quantityError} name="quantity">
          <Input onChange={(e: any) => {
            setquantity(e.target.value);
            setQuantityError("");
          }} />
        </Form.Item>
        <Form.Item label="Description " validateStatus={descError ? "error" : ""}
          help={descError} name="description">
          <Input onChange={(e: any) => {
            setdescription(e.target.value);
            setDescError("");
          }} />
        </Form.Item>
        <Form.Item label="Color " validateStatus={colorError ? "error" : ""}
          help={colorError} name="color">
          <Input onChange={(e: any) => {
            setcolor(e.target.value);
            setColorError("");
          }} />
        </Form.Item>
        <Form.Item label="Category" validateStatus={catError ? "error" : ""}
          help={catError}>
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
