import { useState } from "react";

import { Avatar, Drawer, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";

const HeaderNavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Header style={{ position: "fixed", zIndex: "25", width: "100%" }}>
        <Menu selectedKeys={[]} theme="dark" mode="horizontal">
          <Menu.Item
            onClick={() => setOpenDrawer((prev) => !prev)}
            style={{ marginLeft: "auto" }}
          >
            <Avatar size="large" src={"https://joeschmoe.io/api/v1/random"} />
          </Menu.Item>
        </Menu>
      </Header>
      <Drawer
        onClose={() => setOpenDrawer((prev) => !prev)}
        visible={openDrawer}
      ></Drawer>
    </>
  );
};

export default HeaderNavBar;
