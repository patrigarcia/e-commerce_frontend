import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/arcade.png";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";

const Header = () => {
    return (
        <HStack padding="10px" justifyContent="equal">
            <Image src={logo} boxSize="60px" />
            <Link to="/login">Login</Link>
            <ColorModeSwitch />
        </HStack>
    );
};

export default Header;
