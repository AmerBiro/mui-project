import React from "react";
import { Box } from "@mui/material";
import { LeftPage } from './LeftPage';
import { RightPage } from './RightPage';

export const HomePage = () => {
  return <Box display="flex" flexDirection="row" height='100vh'>
    <Box width='30%' sx={{
      background: 'red'
    }}>
      <LeftPage/>
    </Box>
    <Box width='70%' sx={{
      background: 'green'
    }}>
      <RightPage/>
    </Box>
  </Box>;
};
