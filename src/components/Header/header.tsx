import React from "react";
import "../../styles/style.css";
import logo from "../../nobabjada.png";
import user from "../../images/user_icon.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import { useAppDispatch, useAppSelector, } from "../../redux/hooks/useTypeSelector";
import Cart from "../Cart/cart";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/reducer/authSlices";
import PayButton from "../checkout/payButton";

type PropsType = {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
};
const options = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleCart, setToggleCart] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [togleUserDropdownd, setToggleUserDorpdown] = React.useState(false)

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const { products, totalPrice } = useAppSelector((state) => state.cart);
  // console.log(isAuthenticated)
  React.useEffect(() => {
    const storedJwt: string | null = localStorage.getItem("jwt");
    if (storedJwt !== null) {
      setIsAuthenticated(true);
    }
  }, [dispatch]);
  return (
    <header className="bg-neutral-700">
      <div className="nav-wrapper">
        <Link to="/">
          <img src={logo} alt="logo" className="img-fluid" />
        </Link>
        <nav className="primary-navigation" id="primary-navigation">
          <ul aria-label="Primary" role="list" className="nav-list">
            <li>
              {" "}
              <a href="/">Home</a>{" "}
            </li>
            <li>
              {" "}
              <Link to="/singleProduct">Product</Link>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Blog</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Contact Us</a>{" "}
            </li>
          </ul>
        </nav>
        <div className="secondary-nav" id="secondary-navigation">
          <ul aria-label="Secondary" role="list" className="secondary-nav_list app__navbar-login g-0">
         
            <li className="dropdown search dropdown-slide">
              <a
                href="#!"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
              ><i className="tf-ion-ios-search-strong"></i> Search</a
              >
              <ul className="dropdown-menu search-dropdown">
                <li>
                  <form action="post">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </form>
                </li>
              </ul>
            </li>
            {
                    isAuthenticated ? 
                    (
                      <li className="app_home_user_icon">
                          <img src={user} alt="user" onClick={()=> setToggleUserDorpdown(!togleUserDropdownd)} className='app-user-profile' />
                          <ul className={`${togleUserDropdownd ? 'activeDropdown' : 'deactiveDropdown'}`}>
                              <li className="sub-item">
                                  <span className="material-icons-outlined"> grid_view </span>
                                <a href="/dashboard">Dashboard</a>
                              </li>
                              <li className="sub-item">
                                  <span className="material-icons-outlined"> logout </span>
                                  <p onClick={()=> dispatch(logout)}>Logout</p>
                              </li>
                          </ul>
                      </li>
                  )
                    :
                    (
                      <span className="auth-link"><a href="/login">Sign in</a></span>
                    )  
                }
            <li>
              {" "}
              <div className="header-icon">
                <div className="cart-icon justify-content-between">
                  <CgShoppingCart
                    color="#fff"
                    size={30}
                    onClick={() => {
                      setToggleCart(true)

                    }}
                  />
                  <span style={{ color: "#fff" }}>{products.length}</span>
                </div>
                {toggleCart && (
                  <div className="cart shadow">
                    <div className="cart_close text-dark">

                      <MdClose
                        fontSize={50}
                        onClick={() => setToggleCart(false)}
                      />

                    </div>
                    <Cart />
                    <div className="checkout">
                      {
                        isAuthenticated ? (
                          <PayButton />
                        ) : (
                          <button className="button_checkout"
                            onClick={() => navigate('/login')}>
                            Login to checkout
                          </button>

                        )
                      }
                    </div>
                  </div>
                )}
              </div>
            </li>
           
          </ul>
          <div className="app__navbar-smallscreen">
            <HiMenuAlt3
              color="#fff"
              size={30}
              className=""
              onClick={() => setToggleMenu(true)}
            />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <MdClose
                  fontSize={27}
                  className="overlay__close"
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="app__navbar-smallscreen_links">
                  <li>
                    <a href="/home" onClick={() => setToggleMenu(false)}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/rooms" onClick={() => setToggleMenu(false)}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/roommates" onClick={() => setToggleMenu(false)}>
                      Menu
                    </a>
                  </li>
                  <li>
                    <a href="#apartment" onClick={() => setToggleMenu(false)}>
                      Apartment
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={() => setToggleMenu(false)}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Same as */}
        {/* <Modal 
        open={openModal} 
        onClose={() => setOpenModal(false)} /> */}

      </div>

    </header>
  );
};

export default Header;
