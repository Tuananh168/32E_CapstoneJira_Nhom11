import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import {
  OPEN_DRAWER_CREATE_FORM,
  OPEN_DRAWER_EDIT_FORM,
} from "../redux/constants/CyberBugs/DrawerCyberBugs";
import FormCreateTask from "../components/CyberBugs/FormCreateTask";
import { useDispatch } from "react-redux";

const { Header, Sider, Content } = Layout;

const SideBar = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Header
          className="site-layout-background text-right"
          style={{
            padding: 0,
            fontSize: "30px",
            color: "#fff",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <PlusOutlined />,
              label: "Create issue",
              onClick: () => {
                dispatch({
                  type: OPEN_DRAWER_CREATE_FORM,
                  title: "Create Task",
                  component: <FormCreateTask />,
                });
              },
            },
            {
              key: "2",
              icon: <SearchOutlined />,
              label: "Search issue",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={{}}></Layout>
    </Layout>
  );
};

export default SideBar;
