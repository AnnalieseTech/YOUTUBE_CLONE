import { Box } from "@mui/material";
import { appWrapper } from "@styles/styles";
import AppNavMenu from "@navigation/AppNavMenu";
import AppContentArea from "@components/AppContentArea";
import { useState } from "react";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={appWrapper}>
      <AppNavMenu handleDrawerToggle={handleDrawerToggle} />
      <AppContentArea isOpen={mobileOpen} />
    </Box>
  );
};

export default App;
