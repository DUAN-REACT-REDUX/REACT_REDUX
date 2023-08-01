import React, { useEffect } from 'react';
import { Table, Button, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
// import { GetAllPro, fetchProduct } from '../../../actions/product';
import './loadingfetch.css'
import './custom-table.css'
// import { getOneCat } from '../../../actions/category';
import { fetchUser } from '../../../actions/user';
interface DataType {
    key: string
    name: string
    province: string
    district: string
    ward: string
    address: string
    email: string
    password: string
    image: string
    role: 'member' | 'admin';

}
let dispatched = false;


const ListUser: React.FC = () => {
    const dispatch = useDispatch<any>()
    const { users, isloading, error, currentPage } = useSelector((state: any) => state.users)
    // const { categories } = useSelector((state: any) => state.category)

    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    if (isloading) {
        return <div className="loader" style={{ marginTop: "150px" }}>
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
    if (error) {
        return <h2>
            {error}
        </h2>
    }
    // const onTotal = (total: any) => {
    //     console.log(total);
    //     // dispatch(GetAllPro(total));
    //     dispatch(GetAllPro(total));
    // }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            key: 'name',
            render(e: any) {
                return <h5>{e.name}</h5>;
            }
        },
        {
            title: 'Province',
            key: 'province',
            render(e: any) {
                return (
                    e.province
                );
            }
        },
        {
            title: 'Ward',
            key: 'ward',
            render(e: any) {
                return (
                    e.province
                );
            }
        },
        {
            title: 'Address',
            key: 'address',
            render(e: any) {
                return (
                    e.address
                );
            }
        },
        {
            title: 'Password',
            key: 'password',

            render(e: any) {
                return (
                    e.password
                );
            }
        },
        {
            title: 'Image',
            key: 'image',
            width:"15%",
            render(e: any) {
                return (
                    <img src={e.image} alt="" style={{ width: "40%" }} />
                );
            }
        },
        {
            title: 'Role',
            key: 'role',
            render(e: any) {
                return (
                    e.role
                );
            }

        },

        {
            title: 'Action',
            key: 'action',
            render: () => {
                return <>
                    <Button danger>DELETE</Button>
                    <span>      </span>

                </>
            }
        },
    ]
    return <>
        <h1 style={{marginTop:"50px", marginBottom:"50px"}}>List User</h1>
        <div style={{ padding: '16px' }}>
            <Table columns={columns} dataSource={users.data} pagination={false} rowKey="_id" />
        </div>
        {/* <Pagination

            pageSize={1}
            total={products.totalPages}
            current={currentPage}
            onChange={(page) => onTotal(page)}
        /> */}
    </>
}
export default ListUser;