import React, { useEffect } from "react";
import { Table, Button, Pagination } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import {
    DeleteCategory,
    getAllCategory,
    fetchCat,
} from "../../../actions/category";
import { Link } from "react-router-dom";

interface DataType {
    key: string;
    name: string;
    image: string;
    tags: string[];
}

const ListCategories: React.FC = () => {
    const accesstoken = JSON.parse(localStorage.getItem("user")!);
    console.log(accesstoken.accesstoken);
    if (!accesstoken) {
        throw new Error("Bạn phải đăng nhập để thực hiện xóa!");
    }
    const dispatch = useDispatch<any>();
    const { categories, isloading, error, currentPage } = useSelector(
        (state: any) => state.category
    );

    useEffect(() => {
        dispatch(fetchCat());
    }, []);

    if (isloading) {
        return (
            <div className="loader" style={{ marginTop: "150px" }}>
                <div className="box box0">
                    <div></div>
                </div>
                <div className="box box1">
                    <div></div>
                </div>
                <div className="box box2">
                    <div></div>
                </div>
                <div className="ground">
                    <div></div>
                </div>
            </div>
        );
    }
    if (error) {
        return <h2>{error}</h2>;
    }
    const onTotal = (total: any) => {
        console.log(total);
        dispatch(getAllCategory(total));
    };

    const columns: ColumnsType<DataType> = [
        {
            title: "Name",
            key: "name",
            render(e: any) {
                return <h5>{e.name}</h5>;
            },
        },
        {
            title: "Image",
            key: "image",
            width: "20%",
            render(e: any) {
                return <img src={e.image} alt="" style={{ width: "40%" }} />;
                // return e.image;
            },
        },


        {
            title: "Action",
            key: "action",
            render: (id: any) => {
                return (
                    <>
                        <Button
                            danger
                            onClick={() =>
                                dispatch(
                                    DeleteCategory({
                                        idcat: id.cat_id,
                                        token: accesstoken.accesstoken,
                                    })
                                )
                            }
                        >
                            DELETE
                        </Button>
                        <span> </span>
                        <Button>
                            <Link to={`${id.cat_id}/update`}>Update</Link>
                        </Button>
                    </>
                );
            },
        },
    ];
    return (
        <>
            <h1 style={{ marginTop: "50px", marginBottom: "50px" }}>List Categories</h1>
            <div style={{ padding: "16px" }}>
                <Table
                    columns={columns}
                    dataSource={categories.data}
                    pagination={false}
                    rowKey="_id"
                />
            </div>
            <Pagination
                pageSize={1}
                total={categories.totalPages}
                current={currentPage}
                onChange={(page) => onTotal(page)}
            />
        </>
    );
};
export default ListCategories;
