import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import Mobilesidebar from "../sidebar/mobile_sidebar";
import { useDispatch } from "react-redux";
import { getSearchData } from "../../reducers/search";
import { getColorState } from "../../reducers/color";

const Contenttwo = () => {
  const [keyword, setkeyword] = useState("");
  const [sidebarstate, setsidebarstate] = useState(false);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        minHeight: "52px",
        borderBottom: "1px solid rgba(96, 99, 108, 0.1)",
        background: "#f9fafc",
        display: "flex",
        alignItems: "center",
        justifyContent: { lg: "end", md: "end", sm: "end", xs: "space-around" }
      }}
    >
      <Mobilesidebar />
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{ opacity: 0.5, height: "22px", width: "22px" }}
              />
            </InputAdornment>
          )
        }}
        sx={{
          width: "auto",
          background: "#fff",
          borderColor: "#e3e7ef!important",
          fontFamily: "ClashGrotesk",
          borderColor: "#cfd0d3",
          display: { lg: "none", md: "none", sm: "none", xs: "block" }
        }}
        id="outlined-size-small"
        size="small"
        placeholder="Search"
      />

      <Typography
        sx={{
          fontSize: "12px",
          fontFamily: "ClashGrotesk",
          color: "rgb(142, 145, 152)",
          display: { lg: "block", md: "block", sm: "block", xs: "none" }
        }}
      >
        6227 results
      </Typography>
      {/* <FormControl
        sx={{
          m: 1,

          display: { lg: "block", md: "block", sm: "block", xs: "none" }
        }}
        size="small"
      >
        <InputLabel
          id="demo-select-small"
          sx={{
            fontSize: "14px",
            color: "rgb(142, 145, 152)",
            fontFamily: "ClashGrotesk"
          }}
        >
          Original Order
        </InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={keyword}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
      <Box
        sx={{ display: { lg: "block", md: "block", sm: "block", xs: "none" } }}
      >
        <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
          <InputLabel
            id="demo-select-small"
            sx={{
              fontSize: "14px",
              color: "rgb(142, 145, 152)",
              fontFamily: "ClashGrotesk"
            }}
          >
            Original Order
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Original Order"
            value={keyword}
            onChange={e => {
              setkeyword(e.target.value);
              dispatch(getSearchData({ keyword: "", sort: e.target.value }));
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="description">Description</MenuItem>
            <MenuItem value="search_keyword">Search Keyword</MenuItem>
            <MenuItem value="license_name">License Name</MenuItem>
            <MenuItem value="language">Language</MenuItem>
            <MenuItem value="owner">Owner</MenuItem>
            <MenuItem value="owner_type">Owner Type</MenuItem>
            <MenuItem value="repository">Repository</MenuItem>
            <MenuItem value="repository_type">Repository Type</MenuItem>
            <MenuItem value="service_name">Service Name</MenuItem>
            <MenuItem value="topics">Topics</MenuItem>
            <MenuItem value="aws_verified">AWS Verified</MenuItem>
            <MenuItem value="full_name">Full Name</MenuItem>
            <MenuItem value="node_id">Node Id</MenuItem>
            <MenuItem value="owner_id">Owner Id</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        sx={{
          all: "initial",
          width: "24px",
          height: "42px",
          textAlign: "center",
          border: "1px solid #e3e7ef",
          background: "#fff",
          borderRadius: "6px",
          display: { lg: "block", md: "block", sm: "block", xs: "none" }
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.75 13.19l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V3a.75.75 0 011.5 0v10.19z"
            fill="#60636C"
          />
        </svg>
      </Button>
      <Button
        sx={{
          all: "initial",
          p: 2,
          background: "transparent",
          display: { lg: "block", md: "block", sm: "block", xs: "none" }
        }}
        onClick={() => {
          setsidebarstate(!sidebarstate);
          dispatch(
            getColorState({
              color: true,
              sidebar: sidebarstate
            })
          );
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#60636C"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-gray-100"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.586 5L5 17.586V12a1 1 0 10-2 0v8a.998.998 0 001 1h8a1 1 0 100-2H6.414L19 6.414V12a1 1 0 102 0V4.001 4l-.001-.048A.996.996 0 0020 3h-8a1 1 0 100 2h5.586z"
          />
        </svg>
      </Button>
    </Box>
  );
};

export default Contenttwo;
