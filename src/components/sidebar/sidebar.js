import { Box } from "@mui/system";
import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import { Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Searchmodal from "./search_modal";
import { useDispatch } from "react-redux";
import { getColorState } from "../../reducers/color";
import { getSearchData } from "../../reducers/search";

const Sidebar = () => {
  const [keyword, setkeyword] = useState("");
  const [modalstate, setmodalstate] = useState(false);
  const dispatch = useDispatch();
  const handleChange = e => {
    setkeyword(e.target.value);
  };
  return (
    <Box
      sx={{
        width: { lg: "20%", md: "40%", sm: "50%" },
        p: 2,
        background: "#f9fafc",
        maxHeight: "100vh",
        overflowY: "scroll",
        display: { lg: "block", md: "block", sm: "block", xs: "none" }
      }}
    >
      <Stack spacing={3}>
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
          value={keyword}
          onChange={handleChange}
          onKeyPress={e => {
            if (e.key == "Enter") {
              dispatch(
                getSearchData({
                  keyword: keyword,
                  sort: ""
                })
              );
            }
          }}
        />
        <Stack spacing={1}>
          <Typography
            sx={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "3px",
              fontFamily: "ClashGrotesk"
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#60636C"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1 my-auto"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 12a7 7 0 11-14 0 7 7 0 0114 0zm2 0a9 9 0 11-18 0 9 9 0 0118 0zm-10.884 2.063L9.401 16H7.373l3.211-8.71h2.834L16.63 16H14.51l-.702-1.937h-3.692zm1.794-5.057l-.663 1.963-.494 1.352h2.418l-.494-1.352-.637-1.963h-.13z"
              />
            </svg>{" "}
            Categories
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #da135bff !important",
              borderRadius: "8px"
            }}
            onClick={() => {
              dispatch(getColorState({ color: modalstate, sidebar: true }));
              setmodalstate(!modalstate);
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Language
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              {modalstate
                ? <RemoveOutlinedIcon sx={{ color: "rgb(142, 145, 152)" }} />
                : <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />}
            </Box>

            {modalstate ? <Searchmodal /> : ""}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #0a5bf6 !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Servive Name
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #221860 !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Topics
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #665106 !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Owner
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #07a4c7ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Repository Type
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #0a5bf6 !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Search Keywords
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #665106 !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Owner Type
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #480d4d !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              License Name
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #07a4c7ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Owner Id
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #480d4d !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              AWS Verified
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
        </Stack>
        <Stack spacing={1}>
          <Typography
            sx={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "3px"
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#60636C"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1 my-auto"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.6 6.6a3.055 3.055 0 000 4.32l1.92 1.92-1.44 1.44-1.92-1.92a5.091 5.091 0 017.2-7.2l1.92 1.92-1.44 1.44-1.92-1.92a3.055 3.055 0 00-4.32 0zM17.4 17.4a3.055 3.055 0 01-4.32 0l-1.92-1.92-1.44 1.44 1.92 1.92a5.091 5.091 0 007.2-7.2l-1.92-1.92-1.44 1.44 1.92 1.92a3.055 3.055 0 010 4.32z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.48 8.04l6.48 6.48-1.44 1.44-6.48-6.48 1.44-1.44z"
              />
            </svg>
            URLs
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #3dba11ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Repo Link
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #ccdc0aff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Metadata-URL
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #de8216ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Git Url
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #ccdc0aff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Contributors Url
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #06a881ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Owner Avatar Url
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #a1c510ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Languages Url
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography
            sx={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "3px"
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#60636C"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1 my-auto"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 12a7 7 0 11-14 0 7 7 0 0114 0zm2 0a9 9 0 11-18 0 9 9 0 0118 0zm-10.654 2.344L9.722 16H7.91l.624-1.656h-1.14v-1.608h1.692l.432-1.176H7.934V9.952h2.232l.756-1.992h1.812l-.756 1.992h1.656l.756-1.992h1.812l-.744 1.992h1.188v1.608h-1.74l-.444 1.176h1.644v1.608h-2.28L13.19 16h-1.8l.612-1.656h-1.656zm2.94-2.916h-2.052l-.528 1.44h2.052l.528-1.44z"
              />
            </svg>
            Numerical
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #432ec2ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Stars
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #3dba11ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Forks
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #cf2500ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Open Issues
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #da135bff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Watchers
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #ccdc0aff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Commits
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #cf2500ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Contributors
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #edbc0dff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Id
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography
            sx={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "3px"
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#60636C"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1 my-auto"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2zM7 3a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 7a1 1 0 000 2h16a1 1 0 100-2H4z"
              />
              <path d="M7 12a1.25 1.25 0 112.5 0A1.25 1.25 0 017 12zM7 16a1.25 1.25 0 112.5 0A1.25 1.25 0 017 16zM10.75 12a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM10.75 16a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM14.5 12a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM14.5 16a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" />
            </svg>
            Dates
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #de8216ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Created At
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #a1c510ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Last Updated
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #432ec2ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Last Updated
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #edbc0dff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Data Refresh Time
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography
            sx={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "3px"
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="#60636C"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1 ms-select-group-icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.47 5h6.354C18.474 5 19 5.527 19 6.176v6.353c0 .65-.527 1.177-1.176 1.177h-2.118V11.47a3.177 3.177 0 00-3.177-3.177h-2.235V6.176c0-.65.527-1.176 1.177-1.176zM8.295 8.294V6.176A3.176 3.176 0 0111.471 3h6.353A3.177 3.177 0 0121 6.176v6.353a3.177 3.177 0 01-3.176 3.177h-2.118v2.117A3.176 3.176 0 0112.529 21H6.176A3.176 3.176 0 013 17.823v-6.352a3.176 3.176 0 013.176-3.177h2.118zm5.412 7.412v2.117c0 .65-.527 1.177-1.177 1.177H6.176C5.526 19 5 18.473 5 17.823v-6.352c0-.65.527-1.177 1.176-1.177h2.118v2.235a3.177 3.177 0 003.177 3.177h2.235zm0-2H11.47c-.65 0-1.177-.527-1.177-1.177v-2.235h2.235c.65 0 1.177.527 1.177 1.177v2.235z"
              />
            </svg>
            Booleans
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #07a4c7ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Is Fork
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
              p: 1,
              borderLeft: "6px solid #06a881ff !important",
              borderRadius: "8px"
            }}
          >
            <Typography sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}>
              Has Wiki
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{
                  color: "rgb(142, 145, 152)",
                  fontSize: "12px",
                  fontFamily: "ClashGrotesk"
                }}
              >
                68
              </Typography>
              <AddIcon sx={{ color: "rgb(142, 145, 152)" }} />
            </Box>
          </Box>
        </Stack>
        <Box sx={{ pt: 6 }}>
          <Typography>Mar 30, 2023 1:56 PM</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
