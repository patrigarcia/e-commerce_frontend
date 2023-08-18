import AppRoutes from "./routes";
import { UserProvider } from "./context/UserContext/UserState";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";

const App = () => {
    return (
        <>
            <UserProvider>
                <ProductsProvider>
                    <OrdersProvider>
                        <AppRoutes />
                    </OrdersProvider>
                </ProductsProvider>
            </UserProvider>
        </>
    );
};

export default App;
