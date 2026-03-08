import Layout from '@/layout';

const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/*',
      element: <div id="subapp-viewport" />,
    },
    { path: '*', element: null },
  ],
};

export default mainRoutes;
