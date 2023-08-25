import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import AdminPanel from "../AdminPanel/AdminPanel";
import "./Admin.scss";
import AdminRole from "../AdminRole/AdminRole";
import AddProduct from "../AddProduct/AddProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import GetProducts from "../GetProducts/GetProducts";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import AddCategory from "../AddCategory/AddCategory";
import CategoryList from "../AddCategory/CategoryList";

const Admin = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleComponentClick = (component) => {
        setActiveComponent(component);
    };

    return (
        <>
            <Flex className="page">
                <Box>
                    <AdminPanel
                        onAdminRoleClick={() => handleComponentClick("adminRole")}
                        onAddCategoryClick={() => handleComponentClick("addCategory")}
                        onAddProductClick={() => handleComponentClick("addProduct")}
                        onUpdateProductClick={() => handleComponentClick("updateProduct")}
                        onGetProductsClick={() => handleComponentClick("getProducts")}
                        onDeleteProductClick={() => handleComponentClick("deleteProduct")}
                    />
                </Box>
                <Box className="main">
                    {activeComponent === "adminRole" && <AdminRole />}
                    {activeComponent === "addCategory" && <AddCategory />}
                    {activeComponent === "addProduct" && <AddProduct />}
                    {activeComponent === "updateProduct" && <UpdateProduct />}
                    {activeComponent === "getProducts" && <GetProducts />}
                    {activeComponent === "deleteProduct" && <DeleteProduct />}
                </Box>
            </Flex>
        </>
    );
};

export default Admin;
