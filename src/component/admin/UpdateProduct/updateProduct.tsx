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


  const [nameError, setNameError] = useState<string>("");
  const [priceError, setPriceError] = useState<string>("");
  const [quantityError, setQuantityError] = useState<string>("");
  const [colorError, setColorError] = useState<string>("");
  const [catError, setCatError] = useState<string>("");

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
    if (!name) {
      setNameError("Tên sản phảm không được để trống");
      return;
    }
    if (!price) {
      setPriceError("Giá sản phảm không được để trống");
      return;
    }
    if (price < 0) {
      setPriceError("Giá sản phảm không được dưới 0");
      return;
    }
    if (!quantity) {
      setPriceError("Số lượng sản phảm không được để trống");
      return;
    }
    if (quantity <= 0) {
      setPriceError("Số lượng sản phảm không được bằng hoặc nhỏ hơn 0");
      return;
    }
    if (!color) {
      setColorError("Màu sản phảm không được để trống");
      return;
    }
    if (!cat_id) {
      setCatError("Category không được để trống");
      return;
    }
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
    if (value) {
      setCatId(value);
      setCatError("");
    } else {
      setCatError("Category không để trống");
    }
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
        <Form.Item label="Name " name="name" validateStatus={nameError ? "error" : ""}
          help={nameError}>
          <Input
            onChange={(e: any) => {
              setname(e.target.value);
              setNameError("");
            }}
          />
        </Form.Item>
        <Form.Item label="Price " name="price" validateStatus={priceError ? "error" : ""}
          help={priceError}>
          <Input
            type="number"
            onChange={(e: any) => {
              setprice(e.target.value);
              setPriceError("");
            }
            } />
        </Form.Item>
        <Form.Item label="Quantity " name="quantity" validateStatus={quantityError ? "error" : ""}
          help={quantityError}>
          <Input
            type="number"
            onChange={(e: any) => {
              setquantity(e.target.value);
              setQuantityError("");
            }} />
        </Form.Item>
        <Form.Item label="Description " name="description">
          <Input onChange={(e: any) => setdescription(e.target.value)} />
        </Form.Item>
        <Form.Item label="Color " name="color" validateStatus={colorError ? "error" : ""}
          help={colorError}>
          <Input onChange={(e: any) => {
            setcolor(e.target.value);
            setColorError("")
          }} />
        </Form.Item>
        <Form.Item label="Category" name="cat_id" validateStatus={catError ? "error" : ""}
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
