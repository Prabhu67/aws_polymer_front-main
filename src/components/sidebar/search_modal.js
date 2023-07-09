import { Typography, Box, Stack } from "@mui/material";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch } from "react-redux";
import { getSidebarSearchData } from "../../reducers/sidebar_filter";

const Searchmodal = () => {
  const dispatch = useDispatch();

  const handleSubmit = (name, params) => {
    dispatch(getSidebarSearchData({ name: name, parameter: params }));
  };
  return (
    <Stack
      sx={{
        width: "auto",
        background: "#fff",
        position: "absolute",
        top: "100px",
        left: "330px",
        borderRadius: "10px",
        boxShadow:
          "0 12px 16px rgba(9,29,77,.05), 0 12px 36px rgba(12,46,126,.1)"
      }}
      spacing={1}
    >
      <Box sx={{ p: 2 }}>
        <Typography sx={{ fontFamily: "ClashGrotesk", fontSize: "18px" }}>
          Search Keywords
        </Typography>
      </Box>
      <Box
        sx={{
          p: 1,
          display: "flex",
          background: "rgb(241, 243, 247)",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
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
            background: "#fff",
            borderColor: "#e3e7ef!important",
            fontFamily: "ClashGrotesk",
            borderColor: "#cfd0d3"
          }}
          id="outlined-size-small"
          size="small"
          placeholder="Search"
        />
        <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
          <InputLabel
            id="demo-select-small"
            sx={{
              fontSize: "14px",
              color: "rgb(142, 145, 152)",
              fontFamily: "ClashGrotesk"
            }}
          >
            Sort By
          </InputLabel>
          <Select labelId="demo-select-small" id="demo-select-small">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", p: 2 }}>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
          onClick={() => handleSubmit("search_keyword", "b")}
        >
          <small>b</small>
        </Typography>

        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>

        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
          onClick={() => handleSubmit("search_keyword", "a")}
        >
          <small>a</small>
        </Typography>

        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
          onClick={() => handleSubmit("search_keyword", "s")}
        >
          <small>s</small>
        </Typography>

        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
        <Typography
          sx={{
            padding: "6px 10px",
            background: "#0a5bf71a !important",
            width: "fit-content",
            borderRadius: "10px",
            fontFamily: "ClashGrotesk"
          }}
        >
          <small>e 100</small>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Searchmodal;
