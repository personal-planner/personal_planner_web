import { useCallback, useState } from "react";

import {
  CheckSquareOutlined,
  HomeOutlined,
  ProjectOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  GroupOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import i18next from "i18next";

const { Sider } = Layout;

const LaftBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = useCallback(() => setCollapsed((prev) => !prev), []);

  return (
    <Sider
      style={{ position: "fixed", height: "100%" }}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />} key="home">
          <Link to="/home">{i18next.t("leftBar.home")}</Link>
        </Menu.Item>
        <Menu.SubMenu
          icon={<CheckSquareOutlined />}
          title={i18next.t("leftBar.reviewPlans")}
          key="plans"
        >
          <Menu.Item icon={<UnorderedListOutlined />} key="table">
            <Link to="/plans/table">{i18next.t("leftBar.table")}</Link>
          </Menu.Item>
          <Menu.Item icon={<AppstoreOutlined />} key="cards">
            <Link to="/plans/cards">{i18next.t("leftBar.cards")}</Link>
          </Menu.Item>
          <Menu.Item icon={<GroupOutlined />} key="board">
            <Link to="/plans/board">{i18next.t("leftBar.board")}</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item icon={<ProjectOutlined />} key="users">
          <Link to="/users">{i18next.t("leftBar.users")}</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default LaftBar;
