import { Route, Routes } from 'react-router-dom';
import Layouts from '@app/layouts';
import Dashboard from '@app/pages/Dashboard';

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
