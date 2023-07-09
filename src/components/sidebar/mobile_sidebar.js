import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: "100%",
  maxHeight: "100%"
};

export default function Mobilesidebar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          fontFamily: "ClashGrotesk",
          background: "#000000",
          color: "#ffffff",
          borderRadius: "8px",
          gap: "5px",
          textTransform: "capitalize",
          display: { lg: "none", md: "none", sm: "none", xs: "block" }
        }}
        onClick={handleOpen}
      >
        Filter
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: { lg: "none", md: "none", sm: "none", xs: "block" } }}
      >
        <Stack sx={style} spacing={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{ fontFamily: "ClashGrotesk" }}
            >
              Filter
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="material-design-icon__svg"
              onClick={handleClose}
            >
              <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z">
                <title />
              </path>
            </svg>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              maxHeight: "150px",
              overflowY: "scroll",
              borderBottom: "1px solid #dee2e6",
              borderTop: "1px solid #dee2e6"
            }}
          >
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Commits
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Contributors
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Created At
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Data Refresh Time
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Forks
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Has Wiki
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Is Fork
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Search Keywords
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Last Updated
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              License Name
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Language
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Metadata-URL
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Open Issues
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Owner
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Owner Type
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Last Updated
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Repo Link
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Repository Type
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Service Name
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Stars
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Topics
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              AWS Verified
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Watchers
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Contributors Url
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Git Url
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Id
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Languages Url
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Owner Avatar Url
            </Typography>
            <Typography
              sx={{
                borderColor: "#343a40!important",
                borderBottom: "1px solid #dee2e6",
                p: 1,
                fontFamily: "ClashGrotesk",
                "&:hover": { background: "#d4d4d4!important" }
              }}
            >
              Owner Id
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography
              sx={{ fontFamily: "ClashGrotesk", display: "flex", gap: "12px" }}
            >
              0{" "}
              <Typography
                sx={{ color: "#c6c6c6!important", fontFamily: "ClashGrotesk" }}
              >
                Selected
              </Typography>
            </Typography>
            <Typography>Clear All</Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "inherit",
              fontFamily: "ClashGrotesk",
              background: "#000000",
              color: "#ffffff",
              borderRadius: "8px",
              gap: "5px",
              textTransform: "capitalize"
            }}
          >
            View 6227 Results
          </Button>
        </Stack>
      </Modal>
    </div>
  );
}
