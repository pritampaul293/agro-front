import React, { Fragment, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";
import blueLogo from "../../asset/image/navlogoscroll.svg";
import useAuth from "../../hooks/useAuth";

// navBarTitle: "navTitle",
// navBarLogo: [whiteLogo],
// navVariant: "dark",
// navBarBack: "navBackground",
// navBarItem: "navItem",
// pageTitle: props.title,
const Header = (props) => {
  const history = useHistory();
  const { user, logOut } = useAuth();
  const [navBarTitle, setNavBarTitle] = useState("navTitleScroll ");
  const [navBarLogo, setNavBarLogo] = useState([blueLogo]);
  const [navVariant, setNavVariant] = useState("light");
  const [navBarBack, setNavBarBack] = useState("navBackgroundScroll");
  const [navBarItem, setnavBarItem] = useState("navItemScroll");
  const [pageTtile, setPageTitle] = useState(props.title);

  // const onScrollNavbar = () => {
  //     if (window.scrollY>100) {
  //         setNavVariant("light");
  //         setNavBarTitle("navTitleScroll")
  //         setNavBarLogo([blueLogo])
  //         setNavBarBack("navBackgroundScroll");
  //         setnavBarItem("navItemScroll");

  //     }
  //     else if(window.scrollY <100){
  //         setNavVariant("dark");
  //         setNavBarTitle("navTitle")
  //         setNavBarLogo([whiteLogo])
  //         setNavBarBack("navBackground");
  //         setnavBarItem("navItem");
  //     }
  //   };

  //   handlelogout
  const handleLogout = () => {
    if (user?.email) {
      logOut();
    }
  };
  // change navbar on scroll

  return (
    <Fragment>
      <title>{pageTtile}</title>
      <Navbar
        variant={navVariant}
        className={navBarBack}
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand>
            <NavLink className={navBarTitle} to="/">
              {/* <img
                        src={navBarLogo}/>  */}
              Agro Facility Solution
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#0a8ee" }}
                  className={navBarItem}
                  to="/"
                >
                  হোম
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  exact
                  activeStyle={{ color: "#0a8ee" }}
                  className={navBarItem}
                  to="/krishiGovashonaProjukti"
                >
                  কৃষি গবেষণা ও প্রযুক্তি
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#0a8ee" }}
                  className={navBarItem}
                  to="/krishiCampus"
                >
                  কৃষি ক্যাম্পাস
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#0a8ee" }}
                  className={navBarItem}
                  to="/agroCommunity"
                >
                  এগ্রো বিজনেস কমুনিটি
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#0a8ee" }}
                  className={navBarItem}
                  to="/krishiuddugta"
                >
                  ফার্ম টু ডাইনিং
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#0a8ee" }}
                  className={navBarItem}
                  to="/Ecom"
                >
                  {" "}
                  ই-কমার্স
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/cart" className="link">
                  <i className="fas fa-shopping-cart text-light "></i>
                  <span className="ms-1" style={{ color: "#ddd" }}>
                    {props.items}
                  </span>
                </NavLink>
              </Nav.Link>

              {!user?.email && (
                <>
                  <Nav.Link>
                    {" "}
                    <NavLink
                      exact
                      activeStyle={{ color: "#0a8ee" }}
                      className={navBarItem}
                      to="/login"
                    >
                      লগইন
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    {" "}
                    <NavLink
                      exact
                      activeStyle={{ color: "#0a8ee" }}
                      className={navBarItem}
                      to="/registration"
                    >
                      রেজিস্ট্রেন
                    </NavLink>
                  </Nav.Link>
                </>
              )}
              {user?.email && (
                <>
                  <Nav.Link>
                    {" "}
                    <NavLink
                      exact
                      activeStyle={{ color: "#0a8ee" }}
                      className={navBarItem}
                      to="/dashboard"
                    >
                      ড্যাশবোর্ড
                    </NavLink>
                  </Nav.Link>
                  <button
                    class=" btn btn-danger"
                    onClick={() => handleLogout()}
                  >
                    লগআউট
                  </button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
