import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Main from './Main';

const Layout = () => {
  return (
    //<CssBaseline enableColorScheme>
    <Box overflow={'clip'}>
      <Main />
    </Box>
    //</CssBaseline>
  );
};

export default Layout;
