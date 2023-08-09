import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Spinner } from "@chakra-ui/react";


const Profile = () => {
    const { user, getUserInfo } = useContext(UserContext);

    useEffect(() => {
        getUserInfo();
    }, []);

    if (!user) {
        return <Spinner size="lg" />;
    }

    return (
        <div>
            <Card title={user.name} borderWidth="1px" borderRadius="lg" p={4} borderColor="pink" maxWidth="300px" mt={4}>
                <p>{user.email}</p>
            </Card>
            <div>
                {user.orderIds.map((order) => (
                    <Card key={order._id} borderWidth="1px" borderRadius="lg" p={4} borderColor="pink" mt={4}>
                        <p>Nº pedido: {order._id}</p>
                        {order.productIds.map((product) => (
                            <div key={product._id}>
                                <img
                                    style={{ width: "100px" }}
                                    src="https://static.vecteezy.com/system/resources/previews/002/563/549/original/white-3d-pedestal-background-with-realistic-palm-leaves-for-cosmetic-product-presentation-or-fashion-magazine-free-vector.jpg"
                                    alt=""
                                />
                                <p>
                                    {product.name} {product.price} €
                                </p>
                            </div>
                        ))}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Profile;
