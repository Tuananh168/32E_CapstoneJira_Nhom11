import React, { useState, useEffect } from "react";
import { Button, Space, Table, message, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Divider, Tag } from "antd";
import {
  OPEN_DRAWER_EDIT_FORM,
  OPEN_DRAWER_EDIT_FROM,
} from "../../redux/constants/CyberBugs/DrawerCyberBugs";
import FormEditProject from "../../components/CyberBugs/FormEditProject";

const text = "Are you sure to delete this task?";
const confirm = () => {
  message.info("Clicked on Yes.");
};

const ProjectManagement = () => {
  const projectList = useSelector(
    (state) => state.ProjectCyberBugsReducer.projectList
  );

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
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record, index) => {
        console.log("record", record);
        return (
          <Space>
            <button
              onClick={() => {
                console.log("record", record);
                dispatch({
                  type: OPEN_DRAWER_EDIT_FORM,
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
