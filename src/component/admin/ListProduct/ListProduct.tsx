import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../actions/product';
import './loadingfetch.css'
import { fetchCat, getOneCat } from '../../../actions/category';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}


const ListProduct: React.FC = () => {
    const dispatch = useDispatch()
    const { products, isloading, error } = useSelector((state: any) => state.products)
    const { categories } = useSelector((state: any) => state.category)
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    const handeleCat = (id: any) => {
        dispatch(getOneCat(id))
    }
    if (isloading) {
        return <div className="loader">
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
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            key: 'name',
            render(e: any) {
                return (
                    e.name
                );
            }
        },
        {
            title: 'Price',
            key: 'price',
            render(e: any) {
                return (
                    e.price
                );
            }
        },
        {
            title: 'Image',
            key: 'image',
            render(e: any) {
                return (
                    <img src={e.image} alt="" />
                );
            }
        },
        {
            title: 'Color',
            key: 'color',

            render(e: any) {
                return (
                    e.color
                );
            }
        },
        {
            title: 'Description',
            key: 'description',
            render(e: any) {
                return (
                    e.description
                );
            }

        },
        {
            title: 'Categories',
            key: 'cat_id',
            render(e: any) {
                handeleCat(e.cat_id)
                return (
                    categories?.name
                );
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: () => {
                return <>
                    <Button type="primary">DELETE</Button>
                    <Button type="primary">UPDATE</Button>
                </>
            }
        },
    ]

    return <>

        <Table columns={columns} dataSource={products} />
    </>
}

export default ListProduct;