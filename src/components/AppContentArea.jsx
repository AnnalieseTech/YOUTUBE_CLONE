import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import SideList from "./SideList";
import { appContentWrapper, flexColumnGrow } from "@styles/styles";
import TabList from "./TabList";
import CardList from "./CardList";
import { fetchFromApi } from "../utils/api";
import Loader from "./Loader";

const AppContentArea = ({ isOpen }) => {
  const [youtubeData, setYoutubeData] = useState([]);
  const [searchText, setSearchText] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      fetchFromApi("/search?part=snippet", searchText).then((response) => {
        setYoutubeData(response.data.items);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, [searchText]);

  const onTabChange = (searchValue) => {
    setSearchText(searchValue);
    setLoading(!loading);
  };

  const sideBarWidth = isOpen ? "70px" : "250px";

  return (
    <>
      <Box component="main" sx={appContentWrapper}>
        <Box
          component="div"
          sx={{
            flexBasis: sideBarWidth,
            flexGrow: 0,
            flexShrink: 0,
            overflowY: "auto",
          }}
        >
          <SideList />
        </Box>
        <Box component="div" sx={flexColumnGrow}>
          <Box
            sx={{
              my: 2,
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            <TabList onTabChange={onTabChange} />
          </Box>
          <Box
            component="div"
            sx={{
              display: "block",
              p: 2,
              minHeight: "100px",
              mb: 4,
              overflow: "hidden",
              overflowY: "auto",
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            <Loader open={loading} />
            <CardList items={youtubeData} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AppContentArea;
