import './css/main.css'
import './css/util.css'
const Register = () => {
    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt="IMG" />
                        </div>
                        <form className="login100-form validate-form">
                            <span className="login100-form-title">
                                Register
                            </span>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="name" placeholder="Name" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="province" placeholder="Province" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-frog" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="district" placeholder="District" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-hippo" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="ward" placeholder="Ward" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-award" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="address" placeholder="Address" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-address-book" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" placeholder="Email" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" placeholder="Password" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="file" name="image" placeholder="Image" style={{ marginTop: "2px" }} />
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