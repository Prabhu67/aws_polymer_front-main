import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Contentone from "./content_one";
import Contentthree from "./content_three";
import Contenttwo from "./content_two";
import { useSelector } from "react-redux";

const Mainsection = () => {
  const color = useSelector(state => state.color.value);
  console.log(color.color);
  return (
    <Box
      sx={{
        width: { lg: color.sidebar ? "80%" : "100%", xs: "100%" },
        background: "#f9fafc",
        opacity: color.color == true ? 1 : 0.5,
        zIndex: color.color ? 1 : -1
      }}
    >
      <Contentone />
      <Contenttwo />
      <Contentthree />
    </Box>
  );
};

export default Mainsection;
