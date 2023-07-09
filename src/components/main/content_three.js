import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSidebarSearchData } from "../../reducers/sidebar_filter";

const Contentthree = () => {
  const [projects, setprojects] = useState([]);
  const search = useSelector(state => state.search.value);
  const data = useSelector(state => state.sidebar_filter.value);
  const dispatch = useDispatch();
  console.log(data.name, data.parameter);
  useEffect(() => {
    getData();
  }, []);

  useEffect(
    () => {
      sortData();
    },
    [search.sort]
  );

  useEffect(
    () => {
      sidebarFilter();
    },
    [data.name, data.parameter]
  );

  function sortData() {
    var a = projects;
    var keyword = search.sort;
    var key = a.sort((a, b) => {
      if (a[keyword] < b[keyword]) {
        return -1;
      }
    });
    setprojects(a);
  }

  function getData() {
    axios.get("https://polymer-backend.vercel.app/getprojects").then(res => {
      // console.log(res.data.data);
      setprojects(res.data.data);
    });
  }

  function sidebarFilter() {
    var a = projects;
    var b = a.filter(val => {
      if (data.name == "" || data.parameter == "") {
        return val;
      } else if (
        val[data.name].includes(data.parameter.toLowerCase()) ||
        val[data.name].includes(data.parameter.toUpperCase())
      ) {
        console.log(val);
        return val;
      }
    });
    setprojects(b);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        maxHeight: "100vh",
        overflowY: "scroll",
        justifyContent: "center"
      }}
    >
      {projects
        .filter(val => {
          if (search.keyword == "") {
            return val;
          } else if (
            val.repository.includes(search.keyword.toLowerCase()) ||
            val.repository.includes(search.keyword.toUpperCase())
          ) {
            return val;
          }
        })
        .map(e => {
          return (
            <Stack
              sx={{
                background: "#fff",
                p: 2,
                maxWidth: "300px",
                pb: 8,
                m: 1,
                "&:hover": { boxShadow: "rgba(158,207,250,0.3) 0px 10px 30px" }
              }}
              spacing={1}
            >
              <Typography variant="h6" sx={{ fontFamily: "ClashGrotesk" }}>
                {e.repository}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#60636c",
                  fontFamily: "ClashGrotesk",
                  whiteSpace: "pre-line"
                }}
              >
                {e.description}
              </Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Button
                  sx={{
                    color: "black",
                    textTransform: "capitalize",
                    background: "#fff",
                    borderRadius: "6px",
                    border: "1px solid rgba(0,0,0,.125)",
                    fontFamily: "ClashGrotesk"
                  }}
                  onClick={() => window.open(e.repository_link)}
                >
                  <svg
                    data-v-de197c90=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="black"
                    viewBox="0 0 24 24"
                  >
                    <path
                      data-v-de197c90=""
                      d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                    />
                  </svg>Github Repo
                </Button>
                <Button
                  sx={{
                    color: "black",
                    textTransform: "capitalize",
                    borderRadius: "6px",
                    border: "1px solid rgba(0,0,0,.125)",
                    fontFamily: "ClashGrotesk"
                  }}
                >
                  <svg
                    data-v-de197c90=""
                    width="20"
                    height="20"
                    fill="black"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      data-v-de197c90=""
                      d="M3.52 10C3.52 8.632 4.632 7.52 6 7.52H9.2V6H6C3.792 6 2 7.792 2 10C2 12.208 3.792 14 6 14H9.2V12.48H6C4.632 12.48 3.52 11.368 3.52 10ZM6.8 10.8H13.2V9.2H6.8V10.8ZM14 6H10.8V7.52H14C15.368 7.52 16.48 8.632 16.48 10C16.48 11.368 15.368 12.48 14 12.48H10.8V14H14C16.208 14 18 12.208 18 10C18 7.792 16.208 6 14 6Z"
                    />
                  </svg>
                  Share
                </Button>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Typography
                  sx={{
                    color: "#60636c",
                    fontSize: "12px",
                    fontFamily: "ClashGrotesk"
                  }}
                >
                  Repository:
                </Typography>
                <Typography
                  sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}
                >
                  {e.repository}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Typography
                  sx={{
                    color: "#60636c",
                    fontSize: "12px",
                    fontFamily: "ClashGrotesk"
                  }}
                >
                  Description:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontFamily: "ClashGrotesk",
                    width: "180px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                >
                  {e.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Typography
                  sx={{
                    color: "#60636c",
                    fontSize: "12px",
                    fontFamily: "ClashGrotesk"
                  }}
                >
                  Contributors url:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "ClashGrotesk",
                    fontSize: "12px",
                    color: "#0e7fe1",
                    width: "180px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                >
                  {e.contributors_url}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Typography
                  sx={{
                    color: "#60636c",
                    fontSize: "12px",
                    fontFamily: "ClashGrotesk"
                  }}
                >
                  Languages url:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#0e7fe1",
                    width: "180px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: "ClashGrotesk"
                  }}
                >
                  {e.languages_url}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Typography
                  sx={{
                    color: "#60636c",
                    fontSize: "12px",
                    fontFamily: "ClashGrotesk"
                  }}
                >
                  Topics:
                </Typography>
                <Typography
                  sx={{ fontSize: "12px", fontFamily: "ClashGrotesk" }}
                >
                  {e.topics}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Typography
                  sx={{
                    color: "#60636c",
                    fontSize: "12px",
                    fontFamily: "ClashGrotesk"
                  }}
                >
                  Repo Link:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#0e7fe1",
                    width: "180px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: "ClashGrotesk"
                  }}
                >
                  {e.repository_link}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Typography
                  sx={{
                    color: "#60636c",
                    fontSize: "12px",
                    fontFamily: "ClashGrotesk"
                  }}
                >
                  Git url:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#0e7fe1",
                    width: "180px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: "ClashGrotesk"
                  }}
                >
                  {e.git_url}
                </Typography>
              </Box>
            </Stack>
          );
        })}
    </Box>
  );
};

export default Contentthree;
