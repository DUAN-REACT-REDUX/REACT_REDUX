import { Link, Outlet, useNavigate } from "react-router-dom"
import './css/style.css'
import './css/style.min.css'
import { ToastContainer, toast } from "react-toastify";
import { pause } from "../../utils/pause";
// import 'font-awesome/css/font-awesome.min.css';
const Client = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user')!);
    const isLogin = () => {
        const accesstoken = user ? user.accesstoken : undefined;
        if (accesstoken) {
            return true;
        } else {
            return false;
        }

    }
    const LogOut = async () => {
        localStorage.removeItem('user')
        toast.success('Bạn đã đăng xuất!')
        await pause(1500)
        navigate('/')
    }
    return (
        <>
            <ToastContainer />
            <div className="container-fluid">
                <div className="row bg-secondary py-2 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-dark" href="">FAQs</a>
                            <span className="text-muted px-2">|</span>
                            <a className="text-dark" href="">Help</a>
                            <span className="text-muted px-2">|</span>
                            <a className="text-dark" href="">Support</a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="text-dark pl-2" href="">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a href="" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold">
                                <span className="text-primary font-weight-bold border px-3 mr-1">Adam</span>Store
                            </h1>
                        </a>
                    </div>
                    <div className="col-lg-6 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        <a href="" className="btn border">
                            <i className="fas fa-heart text-primary"></i>
                            <span className="badge">0</span>
                        </a>
                        <a href="/cart" className="btn border">
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span className="badge" style={{ color: "black" }}>0</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">

                    </div>
                    <div className="col-lg-9">
                        <div className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0 display-5 font-weight-semi-bold">
                                    <span className="text-primary font-weight-bold border px-3 mr-1">Adam</span>Store
                                </h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <a href="/" className="nav-item nav-link active">Home</a>
                                    <a href="/shop" className="nav-item nav-link">Shop</a>
                                    <a href="detail.html" className="nav-item nav-link">About</a>
                                    <a href="detail.html" className="nav-item nav-link">Blog</a>
                                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                                </div>
                                {isLogin() ? <><div className="user-info">
                                    <a
                                        className="nav-link nav-user-img"
                                        href="#"
                                        id="navbarDropdownMenuLink2"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <Link to={'profile'}>
                                            <img
                                                src={user?.user?.image}
                                                alt=""
                                                className="user-avatar-md rounded-circle"

                                            />
                                        </Link>

                                    </a>
                                </div><button className="nav-item nav-link" onClick={() => LogOut()}>
                                        Logout
                                    </button></> :


                                    <div className="navbar-nav ml-auto py-0">
                                        <a href="login" className="nav-item nav-link">Login</a>
                                        <a href="register" className="nav-item nav-link">Register</a>
                                    </div>}

                            </div >
                        </div >
                    </div >
                </div >
            </div >

            <Outlet />

            <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
                <div className="row px-xl-5 pt-5">
                    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                        <a href="" className="text-decoration-none">
                            <h1 className="mb-4 display-5 font-weight-semi-bold">
                                <span className="text-primary font-weight-bold border border-white px-3 mr-1">Adam</span>Store
                            </h1>
                        </a>
                        <p>
                            Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
                            sit erat lorem et magna ipsum dolore amet erat.
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street,
                            New York, USA
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-envelope text-primary mr-3"></i>info@example.com
                        </p>
                        <p className="mb-0">
                            <i className="fa fa-phone-alt text-primary mr-3"></i>(+84) 72620091
                        </p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-dark mb-2" href="index.html"><i className="fa fa-angle-right mr-2"></i>Home</a>
                                    <a className="text-dark mb-2" href="shop.html"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                                    <a className="text-dark mb-2" href="detail.html"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                                    <a className="text-dark mb-2" href="cart.html"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                                    <a className="text-dark mb-2" href="checkout.html"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                                    <a className="text-dark" href="contact.html"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-dark mb-2" href="index.html"><i className="fa fa-angle-right mr-2"></i>Home</a>
                                    <a className="text-dark mb-2" href="shop.html"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                                    <a className="text-dark mb-2" href="detail.html"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                                    <a className="text-dark mb-2" href="cart.html"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                                    <a className="text-dark mb-2" href="checkout.html"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                                    <a className="text-dark" href="contact.html"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control border-0 py-4" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control border-0 py-4" placeholder="Your Email" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block border-0 py-3" type="submit">
                                            Subscribe Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
        </>
    )
}

export default Client