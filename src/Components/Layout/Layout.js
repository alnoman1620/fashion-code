import React, { Children } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children, globalState }) => {
  return (
    <div>
      <Navbar globalState={globalState}></Navbar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
