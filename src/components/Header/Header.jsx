import { Flex, Image, Spacer, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/arcade.png";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
    return (
        <Flex className="navbar" alignItems="center">
            <Flex alignItems="center">
                <Image src={logo} boxSize="60px" />
                <Link className="link" to="/home">
                    INICIO
                </Link>
                <Link className="link" to="/contact">
                    CONTACTO
                </Link>
            </Flex>

            <Spacer />

            <Flex alignItems="center">
                <Link className="link" to="/login">
                    <FaUserCircle size={30} />
                </Link>
                <Link className="link" to="/signup">
                    Registro
                </Link>
                <Link className="carrito" to="/cart">
                    <FaShoppingCart size={30} />
                </Link>
                <ColorModeSwitch />
            </Flex>
        </Flex>
    );
};

export default Header;
