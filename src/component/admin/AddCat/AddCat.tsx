import axios from "axios";
import { Button, Form, Input, Upload } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddCategory } from "../../../actions/category";
import { useNavigate } from "react-router-dom";

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddCat: React.FC = () => {
  const [name, setname] = useState<string>("");
  const [image, setimage] = useState<string>("");
  const [nameError, setNameError] = useState<string>(""); // Thêm state để lưu trữ lỗi

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

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

  console.log(image, name);

  const handleAdd = () => {
    if (!name) {
      setNameError("Bạn chưa nhập tên danh mục");
      return;
    }

    dispatch(AddCategory({ name: name, image: image }));
    navigate("/admin/categories");
  };

  return (
    <>
      <h1 style={{ marginTop: "50px", marginBottom: "50px" }}>
        Add Categories
      </h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={() =>
          dispatch(AddCategory({ name: name, image: `${image}` }))
        }
      >
        <Form.Item
          label="Name Category"
          validateStatus={nameError ? "error" : ""}
          help={nameError}
        >
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setname(e.target.value);
              setNameError("");
            }}
          />
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
          <Form.Item>
            <Button onClick={handleAdd}>Add Category</Button>
          </Form.Item>
        ) : (
          ""
        )}
      </Form>
    </>
  );
};

export default AddCat;
