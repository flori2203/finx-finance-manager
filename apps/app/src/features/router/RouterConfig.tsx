import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layouts from '@app/layouts';
import { Button } from '@shadcn/components/ui/button';

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Button>ClickMe</Button>} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
