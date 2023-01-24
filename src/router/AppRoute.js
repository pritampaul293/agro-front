import axios from "axios";
import React, { createContext, Fragment, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import AuthProvider from "../AuthProvider/AuthProvider";
import AddProduct from "../components/AddProduct/AddProduct";
import AgroComDetails from "../components/AgroComDetails/AgroComDetails";
import Buy from "../components/Buy/Buy";
import Cart from "../components/Cart/Cart";
import Review from "../components/Dashboard/Review/Review";
import DigitalTechDetails from "../components/DigitalTechDetails/digitalTechDetails";
import FirmToPakritiDetails from "../components/FrimitoPakritiDetails/FirmToPakritiDetails";
import Header from "../components/Header/Header";
import KGovashonaDetails from "../components/KGovashonaDetails/KGovashonaDetails";
import KhoborDetails from "../components/KhoborDetails/KhoborDetails";
import KrishiTipsDetails from "../components/KrishiTips/KrishiTipsDetails";
import MakeAdmin from "../components/MakeAdmin/MakeAdmin";
import MotamotDetails from "../components/MotamotDetails/MotamotDetails";
import OrthonitiDetails from "../components/OrthonitiDetails/OrthonitiDetails";
import Payment from "../components/Payment/Payment";
import PoltryDetails from "../components/PoltryDetails/PoltryDetails";
import useCart from "../hooks/useCart";
import { addToDb, clearProducts, deleteFromLocal } from "../LocalDb/LocalDb";
import AboutPage from "../pages/AboutPage";
import AgroComPage from "../pages/AgroComPage/AgroComPage";
import ContactPage from "../pages/ContactPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import CoursesPage from "../pages/CoursesPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import DocumentsPages from "../pages/DocumentsPages";
import EcomPage from "../pages/EcomPage";
import GooglePage from "../pages/GooglePage";
import HomePage from "../pages/HomePage";
import KGovashonaPage from "../pages/KGovashonaPage/KGovashonaPage";
import KrishiCampusPage from "../pages/KrishiCampus/KrishiCampus";
import KrishiUddugtaPage from "../pages/KrishiUddugtaPage";
import LoginPage from "../pages/LoginPage";
import PortfolioPage from "../pages/PortfolioPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import RefundPage from "../pages/RefundPage";
import RegistrationPage from "../pages/RegistrationPage";
import ServicePage from "../pages/ServicePage";
import TermsPage from "../pages/TermsPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const RemoveContext = createContext();

function AppRoute() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/digitalTechnologies/all").then((res) => {
      setAllProducts(res.data);
    });
  }, []);

  const [cart, setCart] = useCart(allProducts);

  const [items, setItems] = useState(0);

  const addToCart = (id) => {
    const exists = cart.find((course) => course._id === id);
    if (exists) {
      return;
    } else {
      const newCourse = allProducts.find((course) => course._id === id);
      const newCart = [...cart, newCourse];
      setCart(newCart);
      addToDb(id);
    }
  };

  useEffect(() => {
    setItems(cart.length);
  }, [cart, addToCart]);

  const handleRemove = (id) => {
    const remainingProducts = cart.filter((product) => product._id !== id);
    setCart(remainingProducts);
    deleteFromLocal(id);
  };

  const handleBuy = () => {
    setCart([]);
    clearProducts();
  };

  return (
    <AuthProvider>
      <RemoveContext.Provider value={[handleRemove, handleBuy]}>
        <Fragment>
          <Header items={items}></Header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/service" component={ServicePage} />
            <PrivateRoute path="/sale">
              <CoursesPage />
            </PrivateRoute>
            <PrivateRoute path="/rent">
              <PortfolioPage />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route exact path="/refund" component={RefundPage} />
            <Route exact path="/terms" component={TermsPage} />
            <Route exact path="/privacy" component={PrivacyPage} />
            <Route
              exact
              path="/projectDetails"
              component={ProjectDetailsPage}
            />
            <Route exact path="/courseDetails" component={CourseDetailsPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route exact path="/map" component={GooglePage} />
            <Route exact path="/documents" component={DocumentsPages} />
            <PrivateRoute
              exact
              path="/dashboard/addProduct"
              component={AddProduct}
            />
            <Route exact path="/Ecom" component={EcomPage} />
            <Route exact path="/digitalTechnologies/:id">
              <DigitalTechDetails addToCart={addToCart}></DigitalTechDetails>
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart}></Cart>
            </Route>
            <Route exact path="/poltryDairy/:id">
              <PoltryDetails />
            </Route>
            <PrivateRoute exact path="/payment/:type">
              <Payment cart={cart}></Payment>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/review">
              <Review />
            </PrivateRoute>
            <PrivateRoute exact path="/buy">
              <Buy />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            <Route path="/recentNews/:id" component={KhoborDetails} />
            <Route exact path="/motamot/:id">
              <MotamotDetails />
            </Route>
            <Route exact path="/krishiTips/:id">
              <KrishiTipsDetails />
            </Route>
            <Route exact path="/krishiOrthoniti/:id">
              <OrthonitiDetails />
            </Route>
            <Route exact path="/krishiGovashonaProjukti">
              <KGovashonaPage />
            </Route>
            <Route exact path="/firmToDining/:id">
              <FirmToPakritiDetails />
            </Route>
            <Route exact path="/agroCommunity/:id">
              <AgroComDetails />
            </Route>
            <Route exact path="/govashonaProjukti/:id">
              <KGovashonaDetails />
            </Route>
            <Route exact path="/krishiuddugta" component={KrishiUddugtaPage} />
            <Route exact path="/krishiCampus" component={KrishiCampusPage} />
            <Route exact path="/agroCommunity" component={AgroComPage} />
          </Switch>
        </Fragment>
      </RemoveContext.Provider>
    </AuthProvider>
  );
}

export default AppRoute;
