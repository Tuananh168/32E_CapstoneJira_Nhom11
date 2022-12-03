import React, { useState, useEffect, Fragment, useRef } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import {
  Button,
  Space,
  Table,
  message,
  Popconfirm,
  Avatar,
  Popover,
  AutoComplete,
  Input,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { EditOutlined, DeleteOutlined, CloseOutlined } from "@ant-design/icons";
import { Divider, Tag } from "antd";
import {
  OPEN_DRAWER_EDIT_FORM,
  OPEN_DRAWER_EDIT_FROM,
} from "../../redux/constants/CyberBugs/DrawerCyberBugs";
import FormEditProject from "../../components/CyberBugs/FormEditProject";
import {
  ADD_USER_PROJECT_SAGA,
  GET_ADD_USER_SAGA,
  REMOVE_USER_PROJECT_SAGA,
} from "../../redux/constants/CyberBugs/CyberBugs";

const ProjectManagement = () => {
  const handleSearch = (value) => {
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      dispatch({
        type: GET_ADD_USER_SAGA,
        keyword: value,
      });
    }, 300);
  };

  const projectList = useSelector(
    (state) => state.ProjectCyberBugsReducer.projectList
  );

  const { UserSearch } = useSelector((state) => state.UserCyberBugsReducer);

  const [value, setValue] = useState("");

  const searchRef = useRef(null);

  // Sử dụng useDispatch để gọi action
  const dispatch = useDispatch();
  // Sử dụng useEffect để gọi
  useEffect(() => {
    dispatch({ type: "GET_LIST_PROJECT_SAGA" });
  }, []);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      render: (text, record, index) => {
        return <NavLink to={`/cyberBugs/${record.id}`}>{text}</NavLink>;
      },
      filteredValue: filteredInfo.projectName || null,
      onFilter: (value, record) => record.projectName.includes(value),
      sorter: (a, b) => {
        let projectName1 = a.projectName.trim().toLowerCase();
        let projectName2 = b.projectName.trim().toLowerCase();
        if (projectName2 < projectName1) {
          return -1;
        }
      },

      sortOrder:
        sortedInfo.columnKey === "projectName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Category",
      dataIndex: "categoryName",
      key: "categoryName",
      filteredValue: filteredInfo.categoryName || null,
      onFilter: (value, record) => record.categoryName.includes(value),
      sorter: (a, b) => {
        let categoryName1 = a.categoryName.trim().toLowerCase();
        let categoryName2 = b.categoryName.trim().toLowerCase();
        if (categoryName2 < categoryName1) {
          return -1;
        }
      },
      sortOrder:
        sortedInfo.columnKey === "categoryName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
      render: (text, record, index) => {
        return <Tag color="cyan">{record.creator?.name}</Tag>;
      },

      filteredValue: filteredInfo.creator || null,
      onFilter: (value, record) => record.creator.name.includes(value),
      sorter: (a, b) => {
        let creator1 = a.creator.name.trim().toLowerCase();
        let creator2 = b.creator.name.trim().toLowerCase();
        if (creator2 < creator1) {
          return -1;
        }
      },
      sortOrder: sortedInfo.columnKey === "creator" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Member",
      dataIndex: "member",
      key: "member",
      render: (text, record, index) => {
        return (
          <div>
            <Popover
              placement="bottom"
              title="members"
              content={() => {
                return (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>avatar</th>
                        <th>name</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {record.members?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.userId}</td>
                            <td>
                              <Avatar src={item.avatar} />
                            </td>
                            <td>{item.name}</td>
                            <td>
                              <button
                                className="bg-red-600"
                                style={{
                                  borderRadius: "50%",
                                  width: "30px",
                                  height: "30px",
                                }}
                                onClick={() => {
                                  dispatch({
                                    type: REMOVE_USER_PROJECT_SAGA,
                                    userProject: {
                                      projectId: record.id,
                                      userId: item.userId,
                                    },
                                  });
                                }}
                              >
                                <CloseOutlined />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                );
              }}
            >
              {record.members?.slice(0, 2).map((member, index) => {
                return (
                  <Fragment key={index}>
                    <Avatar src={member.avatar} />
                  </Fragment>
                );
              })}
            </Popover>
            {record.members?.length > 3 ? <Avatar>...</Avatar> : ""}
            <Popover
              placement="right"
              title={"Add member"}
              content={() => {
                return (
                  <AutoComplete
                    style={{
                      width: 200,
                    }}
                    onSearch={handleSearch}
                    options={UserSearch?.map((user, index) => {
                      return {
                        label: user.name,
                        value: user.userId.toString(),
                      };
                    })}
                    value={value}
                    onSelect={(value, option) => {
                      // Set giá trị của hộp thoại
                      setValue(option.label);
                      // GỌi Api gửi về backend
                      console.log("record", record.id);
                      console.log("valueSelect", value);
                      dispatch({
                        type: ADD_USER_PROJECT_SAGA,
                        userProject: {
                          projectId: record.id,
                          userId: value,
                        },
                      });
                    }}
                    onChange={(value) => {
                      setValue(value);
                    }}
                  >
                    <Input
                      placeholder="input here"
                      className="custom"
                      style={{
                        height: 30,
                      }}
                    />
                  </AutoComplete>
                );
              }}
              trigger="click"
            >
              <button
                style={{
                  borderRadius: "50%",
                  border: "1px solid",
                  width: "28px",
                  height: "28px",
                }}
              >
                +
              </button>
            </Popover>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record, index) => {
        return (
          <Space>
            <button
              onClick={() => {
                dispatch({
                  type: OPEN_DRAWER_EDIT_FORM,
                  title: "Edit Project",
                  component: <FormEditProject />,
                });
                dispatch({
                  type: "EDIT_PROJECT",
                  projectEditModel: record,
                });
              }}
            >
              <EditOutlined />
            </button>
            <Popconfirm
              placement="topRight"
              title={"Are you sure to delete this project?"}
              onConfirm={() => {
                dispatch({
                  type: "GET_DELETE_PROJECT_SAGA",
                  idProject: record.id,
                });
              }}
              okText="Yes"
              cancelText="No"
            >
              <button>
                <DeleteOutlined />
              </button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <div className="container">
      <Table
        rowKey={"id"}
        columns={columns}
        dataSource={projectList}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProjectManagement;
