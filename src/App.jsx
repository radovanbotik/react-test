import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./routes/Layout";
import { CartProvider } from "./store/CartContext";
import Checkout from "./routes/(main)/Checkout";
import ErrorPage from "./routes/Error";
import ListingPage from "./routes/(main)/Listingpage";
import HomePage from "./routes/(main)/Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      errorElement: <ErrorPage />,
      children: [
        { index: true, Component: HomePage },
        { path: "listing-page", Component: ListingPage },
        { path: "checkout", Component: Checkout },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  );
}

export default App;
