import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Select, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  CLOSE_DRAWER,
  OPEN_DRAWER,
} from "../redux/constants/CyberBugs/DrawerCyberBugs";

const ModalProject = () => {
  const dispatch = useDispatch();
  const { visible, componentContentDrawer, callBackSubmit } = useSelector(
    (state) => state.DrawerReducer
  );
  console.log("callBackSubmit: ", callBackSubmit);

  const showDrawer = () => {
    dispatch({ type: OPEN_DRAWER });
  };
  const onClose = () => {
    dispatch({ type: CLOSE_DRAWER });
  };
  return (
    <>
      <Drawer
        title={componentContentDrawer}
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space style={{ textAlign: "right" }}>
            <Button onClick={onClose} style={{ marginBottom: "6%" }}>
              Cancel
            </Button>
            <Button onClick={callBackSubmit} className="bg-blue-600">
              Submit
            </Button>
          </Space>
        }
      ></Drawer>
    </>
  );
};

export default ModalProject;
