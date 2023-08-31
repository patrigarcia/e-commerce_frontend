import React from "react";
import { Link } from "react-router-dom";
import { Flex, Image, Text, Spacer, HStack, Divider, Badge, Center } from "@chakra-ui/react";
import { FaUser, FaShoppingCart, FaUserCog } from "react-icons/fa";
import logo from "../../assets/logo.png";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import Logout from "../Logout/Logout";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Header.scss";

const Header = () => {
    const avatarRelativePath = "src/assets/avatars/";
    const { user } = useContext(UserContext);
    const { cart } = useContext(ProductsContext);

    return (
        <Flex className="navbar">
            <Flex alignItems="center" justifyContent="flex-start">
                <Link to="/">
                    <Image m="4%" mr="4vh" className="logo_navbar" src={logo} boxSize="40px" />
                </Link>

                <Link className="link" to="/">
                    INICIO
                </Link>
                <Link className="link" to="/contact">
                    CONTACTO
                </Link>
            </Flex>

            <Flex w="50%" alignItems="center" justifyContent="flex-end">
                {user ? (
                    <>
                        {user.role === "admin" ? (
                            <Link className="link" to="/admin">
                                <HStack>
                                    <FaUserCog size={30} />
                                </HStack>
                            </Link>
                        ) : (
                            <Link className="link" to="/profile">
                                <HStack>
                                    <Image src={avatarRelativePath + user.avatar} alt="Avatar" boxSize="50px" borderRadius="50%" mr="1vh" />
                                    <Text>Perfil</Text>
                                </HStack>
                            </Link>
                        )}

                        <Logout />
                    </>
                ) : (
                    <Link to="/login">
                        <HStack>
                            <FaUser size={25} />
                            <Spacer />
                            <Text>Iniciar sesión</Text>
                        </HStack>
                    </Link>
                )}
                <Center ml="8%" height="50px">
                    <Divider orientation="vertical" />
                </Center>

                <Link className="carrito" to="/cart">
                    <HStack>
                        <FaShoppingCart size={30} />
                        <Badge colorScheme="red" borderRadius="full" px="2">
                            {cart.length}
                        </Badge>
                    </HStack>
                </Link>
                <Center mr="2%" height="50px">
                    <Divider orientation="vertical" />
                </Center>
                <ColorModeSwitch />
            </Flex>
        </Flex>
    );
};

export default Header;
