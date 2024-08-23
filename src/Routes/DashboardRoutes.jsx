import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import ProductCategory from "../Dashboard/DashboardMain/Product/ProductCategory/ProductCategory";
import ProductEntry from "../Dashboard/DashboardMain/Product/ProductEntry/ProductEntry";
import ProductList from "../Dashboard/DashboardMain/Product/ProductList/ProductList";
import ProductsEntry from "../Dashboard/DashboardMain/Product/ProductsEntry/ProductsEntry";
import BuyList from "../Dashboard/DashboardMain/ProductBuy/BuyList/BuyList";
import ProductBuy from "../Dashboard/DashboardMain/ProductBuy/ProductBuy/ProductBuy";
import ProductListPending from "../Dashboard/DashboardMain/ProductSell/ProductListPending/ProductListPending";
import ProductReturn from "../Dashboard/DashboardMain/ProductSell/ProductReturn/ProductReturn";
import ProductSellList from "../Dashboard/DashboardMain/ProductSell/ProductSellList/ProductSellList";
import ProductsSells from "../Dashboard/DashboardMain/ProductSell/ProductSells/ProductsSells";
import SingleProductSell from "../Dashboard/DashboardMain/ProductSell/SingleproductSell/SingleProductSell";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";


const dashboardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    //!Main Items
    //? Products
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
    //!Main Items
    //? Products-buy
    {
      path: "product-buy",
      element: <ProductBuy/>,
    },
    {
      path: "product-buy-list",
      element: <BuyList/>,
    },
    //!Main Items
    //? Products-sell
    {
      path: "product-sell-retail",
      element: <SingleProductSell/>,
    },
    {
      path: "product-sells",
      element: <ProductsSells/>,
    },
    {
      path: "product-sell-list",
      element: <ProductSellList/>,
    },
    {
      path: "product-return",
      element: <ProductReturn/>,
    },
    {
      path: "product-list-pending",
      element: <ProductListPending/>,
    },
    
    
    // Add more routes as needed
  ],
};

export default dashboardRoutes;
