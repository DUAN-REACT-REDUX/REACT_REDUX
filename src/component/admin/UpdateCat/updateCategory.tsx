import axios from "axios";
import { Button, Form, Input, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Select } from "antd";
import { AddCategory, UpdateCategoriesAction, fetchCat, getOneCat } from "../../../actions/category";
import { instance } from "../../../api/instance";
const { Option } = Select;

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const UpdateCategory = () => {
    const [form] = Form.useForm();
    const [name, setname] = useState([]);
    const [image, setimage] = useState("");
    const [nameError, setNameError] = useState<string>("");
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const { id } = useParams();
    const { category } = useSelector((state: any) => state.category);

    useEffect(() => {
        dispatch(fetchCat());
        dispatch(getOneCat(id));
    }, []);

    useEffect(() => {
        form.setFieldsValue(categories);
        setname(categories.name);
    }, [category]);


    console.log(category);

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
    // if (image) {
    //     alert("done");
    // }
    const handleUpdate = () => {
        if (!name) {
            setNameError("Bạn chưa nhập tên danh mục");
            return;
        }
        dispatch(
            UpdateCategoriesAction({
                id: id,
                name: name,
                image: image,
            })
        );
        navigate("/admin/categories");
    };
    return (
        <>
            <h1 style={{ marginTop: "50px", marginBottom: "50px" }}>
                Update Categories
            </h1>
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
                onFinish={() =>
                    dispatch(
                        AddCategory({
                            name: name,
                            image: `${image}`,
                        })
                    )
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
                        <Button onClick={handleUpdate}>Update Category</Button>
                    </Form.Item>
                ) : (
                    ""
                )}
            </Form>
        </>
    );
};

export default UpdateCategory;
