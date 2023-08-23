import React from "react";
import { Link } from "react-router-dom";
import { Flex, Image, Input, IconButton, Text, Menu, MenuButton, MenuList, MenuItem, useBreakpointValue, Spacer, HStack, Divider } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaUser, FaShoppingCart, FaSearch, FaUserCog } from "react-icons/fa";
import logo from "../../assets/logo.png";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import Logout from "../Logout/Logout";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import "./Header.scss";

const Header = () => {
    const avatarRelativePath = "src/assets/avatars/";
    const isMobile = useBreakpointValue({ base: true, md: false });
    const { user } = useContext(UserContext);

    return (
        <Flex className="navbar" alignItems="flex-start" justifyContent="space-between" direction="row">
            <Flex alignItems="center">
                <Link to="/">
                    <Image className="logo" src={logo} boxSize="40px" />
                </Link>
                <Spacer />

                {!isMobile && (
                    <>
                        <Link className="link" to="/">
                            INICIO
                        </Link>
                        <Link className="link" to="/contact">
                            CONTACTO
                        </Link>
                    </>
                )}
            </Flex>

            {isMobile ? (
                <Menu>
                    <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
                    <MenuList>
                        <MenuItem className="item">
                            {user ? (
                                <Link to="/profile">
                                    <HStack>
                                        <Image src={avatarRelativePath + user.avatar} alt="Avatar" boxSize="50px" borderRadius="50%" />
                                        <Text>Mi cuenta</Text>
                                    </HStack>
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <HStack>
                                        <FaUser size={30} />
                                        <Text>Iniciar sesión</Text>
                                    </HStack>
                                </Link>
                            )}
                        </MenuItem>
                        <MenuItem className="item">
                            <Link to="/">Inicio</Link>
                        </MenuItem>
                        <MenuItem className="item">
                            <Link to="/contact">Contacto</Link>
                        </MenuItem>

                        <MenuItem className="item">{user && <Logout />}</MenuItem>

                        <Divider />

                        <MenuItem className="item">
                            <ColorModeSwitch />
                        </MenuItem>
                    </MenuList>
                </Menu>
            ) : (
                <Flex alignItems="center">
                    <Input placeholder="Buscar..." variant="filled" maxWidth="200px" />
                    <IconButton aria-label="Buscar" icon={<FaSearch />} variant="ghost" size="md" />

                    {user ? (
                        <Link className="link" to="/profile">
                            <HStack>
                                <Image src={avatarRelativePath + user.avatar} alt="Avatar" boxSize="50px" borderRadius="50%" />
                                <Text>Mi cuenta</Text>
                            </HStack>
                        </Link>
                    ) : (
                        <Link className="link" to="/login">
                            <HStack>
                                <FaUser size={30} />
                                <Text>Iniciar sesión</Text>
                            </HStack>
                        </Link>
                    )}

                    {user && <Logout />}

                    {user && user.role === "admin" && (
                        <Link className="link" to="/admin">
                            <FaUserCog size={30} />
                        </Link>
                    )}
                    <Link className="carrito" to="/cart">
                        <FaShoppingCart size={30} />
                    </Link>
                    <ColorModeSwitch />
                </Flex>
            )}
        </Flex>
    );
};

export default Header;
