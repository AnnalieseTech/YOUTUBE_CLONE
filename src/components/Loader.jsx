import React from "react";
import { CircularProgress, Backdrop } from "@mui/material";

const Loader = ({ open }) => (
  <Backdrop
    sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);
export default Loader;
