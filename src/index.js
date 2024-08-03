import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CartContextProvider from "./context/CartContextProvider";
import Error from "../src/components/Error";
import Cart from "./components/Cart";
import Authenticate from "./components/Authenticate";
import Login from "./firebase/Login";
import Home from "./components/Home";
import ProductListing from "./components/ProductListing";
import { Provider } from "react-redux";
import store from "../src/Slice/store"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },

  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/Authenticate",
    element: <Authenticate />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/ProductListing",
    element: <ProductListing />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </Provider>
);
