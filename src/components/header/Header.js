import { Button, Stack, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import Logo from "../../images/logo.png";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        // paddingBlock: 3,
        background: "#fff",
        display: "flex",
        paddingInline: "10px",
        borderBottom: "1px solid #f4f5f9"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "12px",
          alignItems: "center",
          width: { lg: "22%", md: "33%", sm: "50%" },
          borderRight: "1px solid #f4f5f9",
          p: 1
        }}
      >
        <img style={{ width: "24px", paddingInline: "10px" }} src={Logo} />

        <Typography sx={{ fontSize: "16px", fontFamily: "ClashGrotesk" }}>
          Everything AWS
        </Typography>
      </Box>

      <Box
        sx={{
          display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
          flexDirection: "row",
          justifyContent: "space-between",
          width: "78%",
          p: 1
        }}
      >
        <Stack direction={"row"} spacing={1}>
          <Button
            sx={{
              all: "initial",
              display: "flex",
              alignItems: "center",
              background: "#000000",
              width: "75px",
              justifyContent: "center",
              height: "34px",
              color: "#fff",
              borderRadius: "20px",
              fontSize: "14px",
              gap: "5px",
              fontFamily: "ClashGrotesk",
              textTransform: "capitalize"
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1"
              style={{ background: "transparent" }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7zm-4-2h-4v6h6V7a2 2 0 00-2-2zm2 8h-6v6h4a2 2 0 002-2v-4zm-8-2V5H7a2 2 0 00-2 2v4h6zm-6 2h6v6H7a2 2 0 01-2-2v-4z"
              />
            </svg>{" "}
            Data
          </Button>
          <Button
            variant="contained"
            sx={{
              all: "initial",
              display: "flex",
              alignItems: "center",
              color: "black",
              fontSize: "14px",
              gap: "5px",
              fontFamily: "ClashGrotesk",
              textTransform: "capitalize"
            } // background: "#000000", // borderRadius: "20px",
            }
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#60636C"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5 5h3v14h-3V5zm-2 4V5a2 2 0 012-2h3a2 2 0 012 2v14a2 2 0 01-2 2h-3a1.99 1.99 0 01-1-.268 1.99 1.99 0 01-1 .268h-3a1.99 1.99 0 01-1-.268 1.99 1.99 0 01-1 .268h-3a2 2 0 01-2-2v-4a2 2 0 012-2h3v-2a2 2 0 012-2h3zm0 2h-3v8h3v-8zm-5 4v4h-3v-4h3z"
              />
            </svg>
            Insights
          </Button>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Button
            variant="contained"
            sx={{ color: "#ffffff", borderRadius: "10px", gap: "5px" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              class="no-default-fill"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.94 4.655L7.344 2.25l1.06 1.06-.594.595H9a6 6 0 11-6 6 .75.75 0 011.5 0 4.5 4.5 0 104.5-4.5H7.81L8.406 6l-1.06 1.06-2.406-2.405z"
              />
            </svg>
          </Button>
          <Button
            variant="contained"
            sx={{
              fontFamily: "ClashGrotesk",
              background: "#000000",
              color: "#ffffff",
              borderRadius: "8px",
              gap: "5px",
              textTransform: "capitalize"
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#60636C"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5 5h3v14h-3V5zm-2 4V5a2 2 0 012-2h3a2 2 0 012 2v14a2 2 0 01-2 2h-3a1.99 1.99 0 01-1-.268 1.99 1.99 0 01-1 .268h-3a1.99 1.99 0 01-1-.268 1.99 1.99 0 01-1 .268h-3a2 2 0 01-2-2v-4a2 2 0 012-2h3v-2a2 2 0 012-2h3zm0 2h-3v8h3v-8zm-5 4v4h-3v-4h3z"
              />
            </svg>
            Try Polymer
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
