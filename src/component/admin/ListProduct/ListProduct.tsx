import React, { useEffect } from "react";
import { Table, Button, Pagination } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteProduct,
  GetAllPro,
  UpdateProductAction,
  fetchProduct,
} from "../../../actions/product";
import "./loadingfetch.css";
import "./custom-table.css";
import { fetchCat } from "../../../actions/category";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const ListProduct: React.FC = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user")!);
  console.log(accesstoken.accesstoken);
  // console.log(productId);
  if (!accesstoken) {
    throw new Error("Bạn phải đăng nhập để thực hiện xóa!");
  }
  const dispatch = useDispatch<any>();
  const { products, isloading, error, currentPage } = useSelector(
    (state: any) => state.products
  );
  const { categories } = useSelector((state: any) => state.category);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCat());
  }, []);
  // console.log(products);

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
        <div className="box box3">
          <div></div>
        </div>
        <div className="box box4">
          <div></div>
        </div>
        <div className="box box5">
          <div></div>
        </div>
        <div className="box box6">
          <div></div>
        </div>
        <div className="box box7">
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
    // dispatch(GetAllPro(total));
    dispatch(GetAllPro(total));
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
      title: "Price",
      key: "price",
      render(e: any) {
        return e.price;
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
      title: "Color",
      key: "color",

      render(e: any) {
        return e.color;
      },
    },
    {
      title: "Description",
      width: "30%",
      key: "description",
      render(e: any) {
        return e.description;
      },
    },
    {
      title: "Categories",
      key: "cat_id",
      render: (record: any) => {
        console.log(categories);

        const category = categories?.data?.find(
          (item: any) => item.cat_id === record.cat_id
        );
        return category ? category.name : "N/A";
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
                  DeleteProduct({
                    idproduct: id.product_id,
                    token: accesstoken.accesstoken,
                  })
                )
              }
            >
              DELETE
            </Button>
            <span> </span>
            <Button>
              <Link to={`${id.product_id}/update`}>Update</Link>
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <>
      <h1 style={{ marginTop: "50px", marginBottom: "50px" }}>List Products</h1>
      <div style={{ padding: "16px" }}>
        <Table
          columns={columns}
          dataSource={products.data}
          pagination={false}
          rowKey="_id"
        />
      </div>
      <Pagination
        pageSize={1}
        total={products.totalPages}
        current={currentPage}
        onChange={(page) => onTotal(page)}
      />
      <ToastContainer />
    </>
  );
};
export default ListProduct;
