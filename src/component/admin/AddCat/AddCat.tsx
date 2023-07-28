
import axios from 'axios';
import {
    Button,
    Form,
    Input,
    Upload,
} from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddCategory } from '../../../actions/category';
const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const AddCat: React.FC = () => {
    const [name, setname] = useState([])
    const [image, setimage] = useState('')
    const dispatch = useDispatch<any>();

    const handleUpload = async ({ file }: any) => {
        const cloud_name = 'dw6wgytc3';
        const preset_name = 'demo_upload';
        const folder_name = 'DUAN';
        const api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`

        const formdata = new FormData();
        formdata.append('upload_preset', preset_name)
        formdata.append('folder', folder_name)

        formdata.append('file', file)
        const response = await axios.post(api, formdata, {

            headers: { "Content-Type": "multipart/form-data" }

        })
        setimage(response.data.secure_url)

    }

    console.log(image, name);
    if (image) {
        alert("done")
    }
    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
                onFinish={() => dispatch(AddCategory({ name: name, image: image }))}
            >
                <Form.Item label="Name Category">
                    <Input onChange={(e: any) => setname(e.target.value)} />
                </Form.Item>
                <Form.Item label="Upload Image" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload listType="picture-card" customRequest={({ file }: any) => handleUpload({ file })}>
                        <div>
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
                {image ? <Form.Item label="Add Category">
                    <Button onClick={() => dispatch(AddCategory({ name: name, image: image }))}>Add Category</Button>
                </Form.Item> : ""
                }

            </Form>
        </>
    );
};

export default AddCat