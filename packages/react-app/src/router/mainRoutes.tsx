import Layout from '@/layout';

const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/about',
      element: <h1>React About Page</h1>,
    },
    { path: '*', element: <div>*</div> },
  ],
};

export default mainRoutes;
