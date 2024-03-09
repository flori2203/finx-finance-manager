import { Box } from '@mui/material';
import Main from './Main';
import Appbar from '@app/features/appbar';

const Layout = () => {
  return (
    <Box overflow={'clip'}>
      <Appbar />
      <Main />
    </Box>
  );
};

export default Layout;
