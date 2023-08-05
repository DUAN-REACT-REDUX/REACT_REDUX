import React, { useEffect } from "react";
import { Table, Button, Pagination } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllPro,
  fetchProduct,
} from "../../../actions/product";
import "./loadingfetch.css";
import "./custom-table.css";
import { fetchCat } from "../../../actions/category";
import { fetchRecycle, getProductsFromRecyclebin } from "../../../actions/recyclebin";
import { fetchUser } from "../../../actions/user";
interface ProductType {
  key: string;

  product: {
    name: string;
    price: number;
    quantity: number;
    description: string;
    color: string;
    cat_id: string;
  }
  user_info: {
    name: string;
  }
  time: string;
}


const HistoryRemove: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { recyclebin, isloading, error, currentPage } = useSelector((state: any) => state.recyclebin);
  const { products } = useSelector((state: any) => state.products);

  const { categories } = useSelector((state: any) => state.category);

  const { users } = useSelector((state: any) => state.users)

  useEffect(() => {
    dispatch(fetchRecycle());
    dispatch(fetchProduct());
    dispatch(fetchCat());
    dispatch(fetchUser());
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
        <div className="box box8">
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
    dispatch(getProductsFromRecyclebin({ idrecycle: total }));
    dispatch(GetAllPro(total));
  };
  console.log("recyclebin:", recyclebin); // Log recyclebin data
  // console.log("products:", products); // Log products data
  // console.log("categories:", categories);
  // console.log("users:", users); // Log users data


  const columns: ColumnsType<ProductType> = [
    {
      title: "Name",
      key: "name",
      render: (product: ProductType) => <h5>{product.product.name}</h5>,
    },
    {
      title: "Price",
      key: "price",
      render: (product: ProductType) => product.product.price,
    },
    {
      title: "Color",
      key: "color",
      render: (product: ProductType) => product.product.color,
    },
    {
      title: "Description",
      key: "description",
      render: (product: ProductType) => product.product.description,
    },
    {
      title: "Quantily",
      key: "quantity",
      render: (product: ProductType) => product.product.quantity,
    },
    {
      title: "Category",
      key: "cat_id",
      render: (product: ProductType) => {
        const category = categories?.data?.find(
          (item: any) => item.cat_id === product.product.cat_id
        );
        return category ? category.name : "N/A";
      },
    },
    {
      title: "User name",
      key: "user_name",
      render: (user_info: ProductType) => user_info.user_info.name,
    },
    {
      title: "Time",
      key: "time",
      render: (product: ProductType) => <h5>{product.time}</h5>,
    },
    // ... Other columns ...
  ];

  return (
    <>
      <h1 style={{ marginTop: "50px", marginBottom: "50px" }}> Recycle Bin</h1>
      {/* Display Recently Deleted Product */}
      <Table
        columns={columns}
        dataSource={recyclebin.data}

        pagination={false}
        rowKey="_id"
      />



      <Pagination
        pageSize={1}
        total={recyclebin.totalPages}
        current={currentPage}
        onChange={(page) => onTotal(page)}
      />

    </>

  );

};

export default HistoryRemove;
