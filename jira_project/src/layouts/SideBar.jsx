import React, { Fragment, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  SearchOutlined,
  UserOutlined,
  DownOutlined,
  LogoutOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Dropdown, Space } from "antd";

import {
  OPEN_DRAWER_CREATE_FORM,
  OPEN_DRAWER_EDIT_FORM,
} from "../redux/constants/CyberBugs/DrawerCyberBugs";
import FormCreateTask from "../components/CyberBugs/FormCreateTask";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, TOKEN, USER_LOGIN } from "../utils/setting/config";

import _ from "lodash";

const { Header, Sider, Content } = Layout;

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { UserLogin } = useSelector((state) => state.UserCyberBugsReducer);

  const [collapsed, setCollapsed] = useState(false);
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <button
              onClick={() => {
                navigate("/login", { replace: false });
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                localStorage.removeItem(ACCESS_TOKEN);
              }}
            >
              Log out
              <LogoutOutlined className="ml-3" />
            </button>
          ),
        },
      ]}
    />
  );
  const login = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Login",
      onClick: () => {
        navigate("/login");
      },
    },
    {
      key: "2",
      icon: <SnippetsOutlined />,
      label: "Signup",
      onClick: () => {
        navigate("/signup");
      },
    },
  ];

  const loginSuccess = [
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
    {
      key: "3",
      icon: <UserOutlined />,
      label: (
        <Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Hello {UserLogin.name} !
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      ),
    },
  ];
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
          items={_.isEmpty(UserLogin) ? login : loginSuccess}
        />
      </Sider>
      <Layout className="site-layout" style={{}}></Layout>
    </Layout>
  );
};

export default SideBar;
