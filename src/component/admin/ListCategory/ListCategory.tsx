import React, { useEffect } from "react";
import { Table, Button, Pagination } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";

import { DeleteCategory, fetchCat, getAllCategory, getOneCat } from "../../../actions/category";
interface DataType {
    key: string;
    name: string;
    image: string;

}
let dispatched = false;

const ListCategories: React.FC = () => {
    const dispatch = useDispatch<any>();
    const { categories, isloading, error, currentPage } = useSelector((state: any) => state.category);

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
    // const onTotal = (page: number) => {
    //     dispatch(getAllCategory(page));
    // };

    const columns: ColumnsType<DataType> = [
        {
            title: "Name",
            key: "name",
            render(e: any) {
                return e.name;
            },
        },
        {
            title: "Image",
            key: "image",
            render(e: any) {
                return <img src={e.image} alt="" style={{ width: "10%" }} />;
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
                            onClick={() => dispatch(DeleteCategory(id.cat_id))}
                        >
                            DELETE
                        </Button>
                        <span> </span>
                        <Button>UPDATE</Button>
                    </>
                );
            },
        },
    ];
    return (
        <>
            <h1>List Categories</h1>
            <div style={{ padding: "16px" }}>
                <Table
                    columns={columns}
                    dataSource={categories.data}
                    pagination={false}
                    rowKey="_id"
                />
            </div>
            {/* <Pagination
                pageSize={1}
                total={categories.totalPages}
                current={currentPage}
                onChange={(page) => onTotal(page)}
            /> */}
        </>
    );
};
export default ListCategories;
