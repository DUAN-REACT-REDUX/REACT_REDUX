import React from "react";
import "./assets/libs/css/style.css";
import "./assets/vendor/fonts/flag-icon-css/flag-icon.min.css";
import "./assets/vendor/fonts/fontawesome/css/fontawesome-all.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/fonts/circular-std/style.css";
import "./assets/vendor/charts/c3charts/c3.css";
import "./assets/vendor/fonts/material-design-iconic-font/css/materialdesignicons.min.css";
import "./assets/vendor/charts/morris-bundle/morris.css";
import "./assets/vendor/charts/chartist-bundle/chartist.css";
import { Link, Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <>
      <div className="dashboard-main-wrapper">
        <div className="dashboard-header">
          <nav className="navbar navbar-expand-lg bg-white fixed-top">
            <a className="navbar-brand" href="index.html">
              No1-PRO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto navbar-right-top">
                <li className="nav-item">
                  <div id="custom-search" className="top-search-bar">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search.."
                    />
                  </div>
                </li>
                <li className="nav-item dropdown notification">
                  <a
                    className="nav-link nav-icons"
                    href="#"
                    id="navbarDropdownMenuLink1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-fw fa-bell"></i>{" "}
                    <span className="indicator"></span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                    <li>
                      <div className="notification-title"> Notification</div>
                      <div className="notification-list">
                        <div className="list-group">
                          <a
                            href="#"
                            className="list-group-item list-group-item-action active"
                          >
                            <div className="notification-info">
                              <div className="notification-list-user-img">
                                <img
                                  src="assets/images/avatar-2.jpg"
                                  alt=""
                                  className="user-avatar-md rounded-circle"
                                />
                              </div>
                              <div className="notification-list-user-block">
                                <span className="notification-list-user-name">
                                  Jeremy Rakestraw
                                </span>
                                accepted your invitation to join the team.
                                <div className="notification-date">
                                  2 min ago
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="notification-info">
                              <div className="notification-list-user-img">
                                <img
                                  src="assets/images/avatar-3.jpg"
                                  alt=""
                                  className="user-avatar-md rounded-circle"
                                />
                              </div>
                              <div className="notification-list-user-block">
                                <span className="notification-list-user-name">
                                  John Abraham{" "}
                                </span>
                                is now following you
                                <div className="notification-date">
                                  2 days ago
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="notification-info">
                              <div className="notification-list-user-img">
                                <img
                                  src="assets/images/avatar-4.jpg"
                                  alt=""
                                  className="user-avatar-md rounded-circle"
                                />
                              </div>
                              <div className="notification-list-user-block">
                                <span className="notification-list-user-name">
                                  Monaan Pechi
                                </span>{" "}
                                is watching your main repository
                                <div className="notification-date">
                                  2 min ago
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            <div className="notification-info">
                              <div className="notification-list-user-img">
                                <img
                                  src="assets/images/avatar-5.jpg"
                                  alt=""
                                  className="user-avatar-md rounded-circle"
                                />
                              </div>
                              <div className="notification-list-user-block">
                                <span className="notification-list-user-name">
                                  Jessica Caruso
                                </span>
                                accepted your invitation to join the team.
                                <div className="notification-date">
                                  2 min ago
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list-footer">
                        {" "}
                        <a href="#">View all notifications</a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown connection">
                  <a
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="fas fa-fw fa-th"></i>{" "}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
                    <li className="connection-list">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                          <a href="#" className="connection-item">
                            <img src="assets/images/github.png" alt="" />{" "}
                            <span>Github</span>
                          </a>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                          <a href="#" className="connection-item">
                            <img src="assets/images/dribbble.png" alt="" />{" "}
                            <span>Dribbble</span>
                          </a>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                          <a href="#" className="connection-item">
                            <img src="assets/images/dropbox.png" alt="" />{" "}
                            <span>Dropbox</span>
                          </a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                          <a href="#" className="connection-item">
                            <img src="assets/images/bitbucket.png" alt="" />{" "}
                            <span>Bitbucket</span>
                          </a>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                          <a href="#" className="connection-item">
                            <img src="assets/images/mail_chimp.png" alt="" />
                            <span>Mail chimp</span>
                          </a>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                          <a href="#" className="connection-item">
                            <img src="./assets/images/slack.png" alt="" />{" "}
                            <span>Slack</span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="conntection-footer">
                        <a href="#">More</a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown nav-user">
                  <a
                    className="nav-link nav-user-img"
                    href="#"
                    id="navbarDropdownMenuLink2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="https://res.cloudinary.com/dw6wgytc3/image/upload/v1686201786/NODEJS/ik3ugtnpledaah3vgtfk.jpg"
                      alt=""
                      className="user-avatar-md rounded-circle"
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right nav-user-dropdown"
                    aria-labelledby="navbarDropdownMenuLink2"
                  >
                    <div className="nav-user-info">
                      <h5 className="mb-0 text-white nav-user-name">
                        John Abraham{" "}
                      </h5>
                      <span className="status"></span>
                      <span className="ml-2">Available</span>
                    </div>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user mr-2"></i>Account
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cog mr-2"></i>Setting
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-power-off mr-2"></i>Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="nav-left-sidebar sidebar-dark">
          <div className="menu-list">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="d-xl-none d-lg-none" href="#">
                Dashboard
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav flex-column">
                  <li className="nav-divider">Menu</li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="#"
                      data-toggle="collapse"
                      aria-expanded="false"
                      data-target="#submenu-1"
                      aria-controls="submenu-1"
                    >
                      <i className="fa fa-fw fa-user-circle"></i>Dashboard{" "}
                      <span className="badge badge-success">6</span>
                    </a>
                    <div id="submenu-1" className="collapse submenu">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-toggle="collapse"
                            aria-expanded="false"
                            data-target="#submenu-1-2"
                            aria-controls="submenu-1-2"
                          >
                            E-Commerce
                          </a>
                          <div id="submenu-1-2" className="collapse submenu">
                            <ul className="nav flex-column">
                              <li className="nav-item">
                                <a className="nav-link" href="index.html">
                                  E Commerce Dashboard
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="ecommerce-product.html"
                                >
                                  Product List
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="ecommerce-product-single.html"
                                >
                                  Product Single
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="ecommerce-product-checkout.html"
                                >
                                  Product Checkout
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="dashboard-finance.html">
                            Finance
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="dashboard-sales.html">
                            Sales
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-toggle="collapse"
                            aria-expanded="false"
                            data-target="#submenu-1-1"
                            aria-controls="submenu-1-1"
                          >
                            Infulencer
                          </a>
                          <div id="submenu-1-1" className="collapse submenu">
                            <ul className="nav flex-column">
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="dashboard-influencer.html"
                                >
                                  Influencer
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="influencer-finder.html"
                                >
                                  Influencer Finder
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  href="influencer-profile.html"
                                >
                                  Influencer Profile
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="collapse"
                      aria-expanded="false"
                      data-target="#submenu-2"
                      aria-controls="submenu-2"
                    >
                      <i className="fa fa-fw fa-rocket"></i>Products
                    </a>
                    <div id="submenu-2" className="collapse submenu">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link
                              to="product"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              List Products{" "}
                            </Link>
                            <span className="badge badge-secondary">New</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link
                              to="product/add"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Add Products{" "}
                            </Link>
                            <span className="badge badge-secondary">New</span>
                          </a>
                        </li>
                        <li className="nav-item">

                          <a className="nav-link">
                            <Link
                              to="product/update"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Update Products{" "}
                            </Link>
                            <span className="badge badge-secondary">New</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="product/historyremove"
                            style={{ textDecoration: "none", color: "white", marginLeft: "12px" }}
                          >
                            History Remove{" "}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/typography.html">
                            Typography
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/accordions.html">
                            Accordions
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/tabs.html">
                            Tabs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="collapse"
                      aria-expanded="false"
                      data-target="#submenu-3"
                      aria-controls="submenu-3"
                    >
                      <i className="fas fa-fw fa-chart-pie"></i>User
                    </a>
                    <div id="submenu-3" className="collapse submenu">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link
                              to="users"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              List Users{" "}
                            </Link>
                            <span className="badge badge-secondary">New</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/chart-chartist.html"
                          >
                            Chartist Charts
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/chart-charts.html"
                          >
                            Chart
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/chart-morris.html"
                          >
                            Morris
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/chart-sparkline.html"
                          >
                            Sparkline
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/chart-gauge.html">
                            Guage
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="collapse"
                      aria-expanded="false"
                      data-target="#submenu-4"
                      aria-controls="submenu-4"
                    >
                      <i className="fab fa-fw fa-wpforms"></i>Categories
                    </a>
                    <div id="submenu-4" className="collapse submenu">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link
                              to="categories"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              List Category{" "}
                            </Link>
                            <span className="badge badge-secondary">New</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link
                              to="categories/add"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Add Category{" "}
                            </Link>
                            <span className="badge badge-secondary">New</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/multiselect.html">
                            Multiselect
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/datepicker.html">
                            Date Picker
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/bootstrap-select.html"
                          >
                            Bootstrap Select
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="collapse"
                      aria-expanded="false"
                      data-target="#submenu-5"
                      aria-controls="submenu-5"
                    >
                      <i className="fas fa-fw fa-table"></i>Tables
                    </a>
                    <div id="submenu-5" className="collapse submenu">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/general-table.html"
                          >
                            General Tables
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/data-tables.html">
                            Data Tables
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-divider">Features</li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="collapse"
                      aria-expanded="false"
                      data-target="#submenu-6"
                      aria-controls="submenu-6"
                    >
                      <i className="fas fa-fw fa-file"></i> Pages{" "}
                    </a>
                    <div id="submenu-6" className="collapse submenu">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="pages/blank-page.html">
                            Blank Page
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/blank-page-header.html"
                          >
                            Blank Page Header
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/login.html">
                            Login
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/404-page.html">
                            404 page
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/sign-up.html">
                            Sign up Page
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/forgot-password.html"
                          >
                            Forgot Password
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/pricing.html">
                            Pricing Tables
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/timeline.html">
                            Timeline
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/calendar.html">
                            Calendar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/sortable-nestable-lists.html"
                          >
                            Sortable/Nestable List
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/widgets.html">
                            Widgets
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/media-object.html"
                          >
                            Media Objects
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/cropper-image.html"
                          >
                            Cropper
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/color-picker.html"
                          >
                            Color Picker
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="collapse"
                      aria-expanded="false"
                      data-target="#submenu-7"
                      aria-controls="submenu-7"
                    >
                      <i className="fas fa-fw fa-inbox"></i>Apps{" "}
                      <span className="badge badge-secondary">New</span>
                    </a>
                    <div id="submenu-7" className="collapse submenu">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="pages/inbox.html">
                            Inbox
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/email-details.html"
                          >
                            Email Detail
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/email-compose.html"
                          >
                            Email Compose
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/message-chat.html"
                          >
                            Message Chat
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="collapse"
                      aria-expanded="false"
                      data-target="#submenu-8"
                      aria-controls="submenu-8"
                    >
                      <i className="fas fa-fw fa-columns"></i>Icons
                    </a>
                    <div id="submenu-8" className="collapse submenu">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/icon-fontawesome.html"
                          >
                            FontAwesome Icons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/icon-material.html"
                          >
                            Material Icons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/icon-simple-lineicon.html"
                          >
                            Simpleline Icon
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/icon-themify.html"
                          >
                            Themify Icon
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/icon-flag.html">
                            Flag Icons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="pages/icon-weather.html"
                          >
                            Weather Icon
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="collapse"
                      aria-expanded="false"
                      data-target="#submenu-9"
                      aria-controls="submenu-9"
                    >
                      <i className="fas fa-fw fa-map-marker-alt"></i>Maps
                    </a>
                    <div id="submenu-9" className="collapse submenu">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="pages/map-google.html">
                            Google Maps
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pages/map-vector.html">
                            Vector Maps
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      data-toggle="collapse"
                      aria-expanded="false"
                      data-target="#submenu-10"
                      aria-controls="submenu-10"
                    >
                      <i className="fas fa-f fa-folder"></i>Menu Level
                    </a>
                    <div id="submenu-10" className="collapse submenu">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Level 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-toggle="collapse"
                            aria-expanded="false"
                            data-target="#submenu-11"
                            aria-controls="submenu-11"
                          >
                            Level 2
                          </a>
                          <div id="submenu-11" className="collapse submenu">
                            <ul className="nav flex-column">
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  Level 1
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  Level 2
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Level 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="dashboard-wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
