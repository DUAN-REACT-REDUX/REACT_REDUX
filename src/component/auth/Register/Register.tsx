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
    const dispatch = useDispatch()
    const handleSignup = (e) => {
        e.preventDefault();
        const userSignup = {
            name, province, district, ward, address, email, password, image
        }
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
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="province" placeholder="Province" value={province}
                                    onChange={(e) => setProvince(e.target.value)} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-frog" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="district" placeholder="District" value={district}
                                    onChange={(e) => setDistrict(e.target.value)} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-hippo" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="ward" placeholder="Ward" value={ward}
                                    onChange={(e) => setWard(e.target.value)} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-award" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="address" placeholder="Address" value={address}
                                    onChange={(e) => setAddress(e.target.value)} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-address-book" aria-hidden="true"></i>
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
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="file" name="image" placeholder="Image" style={{ marginTop: "2px" }} value={image}
                                    onChange={(e) => setImage(e.target.value)} />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-image" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Register
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register