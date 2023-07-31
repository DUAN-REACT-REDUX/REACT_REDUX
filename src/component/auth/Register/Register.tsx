import { useDispatch } from 'react-redux';
import './css/main.css'
import './css/util.css'
import { useState } from 'react';
import { Signup } from '../../../actions/auth';
import toastr from 'toastr'
const Register = () => {
    const [name, setName] = useState('');
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [ward, setWard] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const dispatch = useDispatch<any>()
    const handleSignup = (e:any) => {
        e.preventDefault();
        dispatch(Signup(userSignup)).then((result) => {
            if (result.payload) {
                console.log("success")
                setPassword('');
                setEmail('');
                window.location.href = '/login';
                toastr.success('Đăng ký thành công!', 'Thông báo');
            } else {
                console.log("Fail")
                toastr.error('Đăng ký thất bại!', 'Thông báo');
            }
        })
    }
    return (
        <>
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
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" placeholder="Confirm Password" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Register
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