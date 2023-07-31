import { useEffect, useState } from 'react'
import './css/main.css'
import './css/util.css'
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../../actions/auth';
import { fetchUser } from '../../../actions/user';
import { useNavigate } from 'react-router-dom';
import { pause } from '../../../utils/pause';

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
        const dis = await dispatch(logIn({ email, password }))
        if (dis.payload.user) {
            console.log(dis.payload.user);
            
            if (dis.payload.user.role == 'admin') {
                localStorage.setItem("user", JSON.stringify(dis.payload))
                await pause(1000)
                navigate('/admin')
            }else if (dis.payload.user.role == 'member'){
                localStorage.setItem("user", JSON.stringify(dis.payload))
                await pause(1000)
                navigate('/')
            }

        }
        if (!dis.payload.user) {
            alert('dang nhap that  bai')
        }
    }
    return (


        <>
            {isloading ? <h1>Loading...</h1> :
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
                                        Login
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


            }

        </>
    )
}

export default Login