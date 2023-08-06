import { useEffect, useState } from 'react'
import './css/main.css'
import './css/util.css'
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../../actions/auth';
import { fetchUser } from '../../../actions/user';
import { useNavigate } from 'react-router-dom';
import { pause } from '../../../utils/pause';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch<any>()
    const { isloading } = useSelector((state: any) => state.auth)
    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    const navigate = useNavigate()
    const handleLogin = async (e: any) => {
        e.preventDefault();


        if (!email) {
            toast.error('Vui lòng nhập email!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            toast.error('Email không hợp lệ!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }

        if (!password) {
            toast.error('Mật khẩu không được để trống!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }
        if (!password || password.length < 6) {
            toast.error('Mật khẩu phải có ít nhất 6 ký tự!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }


        const dis = await dispatch(logIn({ email, password }))
        if (dis.payload.user) {
            console.log(dis.payload.user);

            if (dis.payload.user.role == 'admin') {
                localStorage.setItem("user", JSON.stringify(dis.payload))
                toast.success('Đăng nhập thành công Admin!', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                await pause(1000)
                navigate('/admin')
            } else if (dis.payload.user.role == 'member') {
                localStorage.setItem("user", JSON.stringify(dis.payload))
                toast.success('Đăng nhập thành công!', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                await pause(1000)
                navigate('/')
            }
        }
        if (!dis.payload.user) {
            toast.error('Đăng nhập thất bại!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="limiter"        >
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt="IMG" />
                        </div>
                        <form className="login100-form validate-form" onSubmit={handleLogin}>
                            <span className="login100-form-title">
                                Login
                            </span>
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" placeholder="Email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" placeholder="Password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    {isloading ? 'Đang đăng nhập...' : 'Login'}
                                </button>
                            </div>
                            <div className="text-center p-t-12">
                                <span className="txt1">
                                    Forgot
                                </span>
                                <a className="txt2" href="#">
                                    Username / Password?
                                </a>
                            </div>
                            <div className="text-center p-t-136">
                                <a className="txt2" href="register">
                                    Create your Account
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

export default Login