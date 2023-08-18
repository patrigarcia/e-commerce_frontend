import routes from "./routes";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/UserContext/UserState";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";

const App = () => {
    return (
        <UserProvider>
            <ProductsProvider>
                <OrdersProvider>
                    <RouterProvider router={routes} />
                </OrdersProvider>
            </ProductsProvider>
        </UserProvider>
    );
};

export default App;
