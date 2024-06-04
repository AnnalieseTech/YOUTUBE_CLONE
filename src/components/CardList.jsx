import AppCard from "./Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

const CardList = ({ items }) => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
        {items &&
          items.length &&
          items.map((item, index) => {
            const key = item.etag;
            const { videoId } = item.id;
            const { thumbnails, title, channelTitle } = item.snippet;
            return (
              <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                <AppCard
                  key={index}
                  url={thumbnails.high.url}
                  title={title}
                  channelTitle={channelTitle}
                  videoId={videoId}
                />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
export default CardList;
