import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import App from "./App";
import ProductDetails from "./components/ProductDetails";
import NewArrivals from "./components/NewArrivals";


const AppRouting = createBrowserRouter([
    {
        path: '/', element: <App />,

        children: [
            {
                path: '/', element: <Home />

            },
            {
                path: '/shop', element: <Shop />

            },
            {
                path: '/new-arrivals', element: <NewArrivals />

            },
            {
                path: '/product-details/:id', element: <ProductDetails />

            },
            {
                path: '/about', element: <About />

            },
            {
                path: '/blog', element: <Blog />

            },
            {
                path: '/contact', element: <Contact />

            },
            {
                path: '/cart', element: <Cart />

            },
        ]
    }
])


export default AppRouting;