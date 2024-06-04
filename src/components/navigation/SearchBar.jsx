import { Box } from "@mui/system";
import { BsFillMicFill } from "react-icons/bs";
import { Button } from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { flexAlignCenter, searchBar } from "@styles/styles";

export default function SearchBar() {
  return (
    <Box sx={flexAlignCenter}>
      <Paper component="form" sx={searchBar}>
        <InputBase sx={{ ml: 1, flex: 1, pl: 1 }} placeholder="Search" />
        <IconButton
          type="button"
          sx={{ backgroundColor: "#eee", borderRadius: 0 }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Button sx={{ minWidth: "auto" }}>
        <BsFillMicFill size={18} />
      </Button>
    </Box>
  );
}
