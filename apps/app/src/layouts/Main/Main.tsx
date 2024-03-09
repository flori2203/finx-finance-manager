import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </div>
  );
};

export default Main;
