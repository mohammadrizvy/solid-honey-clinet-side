import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import ProductCategory from "../Dashboard/DashboardMain/Product/ProductCategory/ProductCategory";
import ProductEntry from "../Dashboard/DashboardMain/Product/ProductEntry/ProductEntry";
import ProductList from "../Dashboard/DashboardMain/Product/ProductList/ProductList";
import ProductsEntry from "../Dashboard/DashboardMain/Product/ProductsEntry/ProductsEntry";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";


const dashboardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    //? Main Items 
    {
      path: "",
      element: <DashboardHome />,
    },
    {
      path: "product-entry",
      element: <ProductEntry/>,
    },
    {
      path: "products-entry",
      element: <ProductsEntry/>,
    },
    {
      path: "product-list",
      element: <ProductList/>,
    },
    {
      path: "product-category",
      element: <ProductCategory/>,
    },
    
    // Add more routes as needed
  ],
};

export default dashboardRoutes;
