import { Flex, Image, Input, IconButton, Text, Menu, MenuButton, MenuList, MenuItem, useBreakpointValue, Spacer, MenuDivider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.png";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import "./Header.scss";
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from "@chakra-ui/icons";

const Header = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Flex className="navbar" alignItems="flex-start" justifyContent="space-between" direction="row">
            <Flex alignItems="center">
                <Link to="/home">
                    <Image className="logo" src={logo} boxSize="40px" />
                </Link>
                <Spacer />

                {!isMobile && (
                    <>
                        <Link className="link" to="/home">
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
                            <Link className="link" to="/home">
                                INICIO
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link className="link" to="/contact">
                                CONTACTO
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link className="link" to="/login">
                                Login
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link className="link" to="/signup">
                                Registro
                            </Link>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem>
                            <Link className="carro_menu" to="/cart">
                                <FaShoppingCart size={30} />
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <ColorModeSwitch className="menu_switch" />
                        </MenuItem>
                    </MenuList>
                </Menu>
            ) : (
                <Flex alignItems="center">
                    <Input placeholder="Buscar..." variant="filled" maxWidth="150px" />
                    <IconButton aria-label="Buscar" icon={<FaSearch />} variant="ghost" size="md" />

                    <Link className="link_user" to="/login">
                        <FaUserCircle size={30} />
                    </Link>
                    <Link className="link" to="/login">
                        Login
                    </Link>
                    <Text>|</Text>
                    <Link className="link" to="/signup">
                        Registro
                    </Link>

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
