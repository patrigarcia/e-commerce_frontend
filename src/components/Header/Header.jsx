import { Flex, Image, Input, IconButton, Text, Menu, MenuButton, MenuList, MenuItem, useBreakpointValue, Spacer, MenuDivider, HStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingCart, FaSearch, FaUserAstronaut } from "react-icons/fa";
import { UserContext } from "../../context/UserContext/UserState";
import logo from "../../assets/logo.png";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import "./Header.scss";
import Logout from "../Logout/Logout";
import { useContext } from "react";

const Header = () => {
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
                        <MenuItem>
                            <Link className="link" to="/">
                                INICIO
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link className="link" to="/contact">
                                CONTACTO
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            {!user && (
                                <Link className="link" to="/login">
                                    <HStack>
                                        <Text>Iniciar sesión</Text>
                                    </HStack>
                                </Link>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {!user && (
                                <Link className="link" to="/signup">
                                    Registro
                                </Link>
                            )}
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem>
                            <Link className="carro_menu" to="/cart">
                                <FaShoppingCart size={30} />
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            {user && (
                                <Link className="link" to="/profile">
                                    <HStack>
                                        <FaUserAstronaut size={30} />
                                        <Text>Mi cuenta</Text>
                                    </HStack>
                                </Link>
                            )}
                        </MenuItem>

                        <MenuItem>{user && <Logout />}</MenuItem>

                        <MenuItem>
                            <ColorModeSwitch className="menu_switch" />
                        </MenuItem>
                    </MenuList>
                </Menu>
            ) : (
                <Flex alignItems="center">
                    <Input placeholder="Buscar..." variant="filled" maxWidth="150px" />
                    <IconButton aria-label="Buscar" icon={<FaSearch />} variant="ghost" size="md" />

                    {!user && (
                        <Link className="link" to="/login">
                            <HStack>
                                <FaUserCircle size={30} />
                                <Text>Iniciar sesión</Text>
                            </HStack>
                        </Link>
                    )}

                    {!user && <Text>|</Text>}

                    {!user && (
                        <Link className="link" to="/signup">
                            Registro
                        </Link>
                    )}

                    {user && (
                        <Link className="link" to="/profile">
                            <HStack>
                                <FaUserAstronaut size={30} />
                                <Text>Mi cuenta</Text>
                            </HStack>
                        </Link>
                    )}

                    {user && <Text>|</Text>}

                    {user && <Logout />}

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
