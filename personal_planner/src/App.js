import { Layout } from "antd";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HeaderNavBar from "./commonLayout/HeaderNavBar";
import LaftBar from "./commonLayout/LeftBar";
import { RouterProvider } from "./Router";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <HeaderNavBar />
        <Layout hasSider style={{ minHeight: "100vh", marginTop: "4em" }}>
          <LaftBar />
          <RouterProvider />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
