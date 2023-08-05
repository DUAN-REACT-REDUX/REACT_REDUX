import { useDispatch, useSelector } from 'react-redux';
import './css/main.css'
import './css/util.css'
import { useState } from 'react';
import { Signup } from '../../../actions/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { pause } from '../../../utils/pause';
const Register = () => {
    const [name, setName] = useState<any>();
    const [province, setProvince] = useState<any>('')
    const [district, setDistrict] = useState<any>('')
    const [ward, setWard] = useState<any>('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [nameError, setNameError] = useState('');
    const [image, setImage] = useState('')
    const [confirm, setConfirm] = useState('')
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    const { isloading } = useSelector((state: any) => state.auth)
    const handleSignup = async (e: any) => {
        e.preventDefault();

        // name
        if (!name) {
            toast.error('Vui lòng nhập tên!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }

        // email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            toast.error('Vui lòng nhập email hợp lệ!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }

        //mat khau
        if (!password || password.length < 6) {
            toast.error('Mật khẩu phải có ít nhất 6 ký tự!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }
        // xac nhan mat khau
        if (password !== confirm) {
            toast.error('Xác nhận mật khẩu không khớp!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }
        const dis = await dispatch(Signup({
            name,
            email,
            province,
            district,
            ward,
            address,
            image,
            password,
            confirmpassword: confirm,
            role: ""
        }))
        console.log(dis);

        if (dis.payload.accesstoken) {
            toast.success('Đăng ký thành công!', {
                position: toast.POSITION.TOP_RIGHT,

            });
            await pause(1500)
            navigate('/login')
        } else {
            toast.error('Đăng ký thất bại!', {
                position: toast.POSITION.TOP_RIGHT,

            });
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt="IMG" />
                        </div>
                        <form className="login100-form validate-form" onSubmit={handleSignup}>
                            <span className="login100-form-title">
                                Register
                            </span>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="name" placeholder="Name" value={name}
                                    onChange={(e) => setName(e.target.value)} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>
                            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" placeholder="Email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>
                            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" placeholder="Password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" placeholder="Confirm Password" onChange={(e: any) => setConfirm(e.target.value)} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    {isloading ? "Đang đăng ký..." : "Register"}
                                </button>
                            </div>
                            <div className="text-center p-t-136">
                                <a className="txt2" href="register">
                                    AdamStore
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register