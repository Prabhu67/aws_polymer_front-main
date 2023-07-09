import { Box } from "@mui/system";
import React from "react";
import Header from "../header/Header";
import Mainsection from "../main/main";
import Sidebar from "../sidebar/sidebar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const color = useSelector(state => state.color.value);
  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex" }}>
        {color.sidebar ? <Sidebar /> : ""}
        <Mainsection />
      </Box>
    </Box>
  );
};

export default Dashboard;
