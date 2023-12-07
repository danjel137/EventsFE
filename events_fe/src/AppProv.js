import {
    createBrowserRouter,
    // createRoutesFromElements,
    RouterProvider,
    // Route,
} from 'react-router-dom';

import HomePage from './pagesProv/Home';
import ProductsPage from './pagesProv/Products';
import RootLayout from "./pagesProv/Root";
import ErrorPage from "./pagesProv/Error";
import ProductDetailPage from "./pagesProv/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'products/:productId', element: <ProductDetailPage /> }
        ],
    }
]);
// const router = createBrowserRouter(routeDefinitions);

function AppProv() {
    return <RouterProvider router={router} />;
}

export default AppProv;