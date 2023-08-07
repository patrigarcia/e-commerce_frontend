import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/arcade.png";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";

const Header = () => {
    return (
        <HStack padding="10px" justifyContent="equal">
            <Image src={logo} boxSize="60px" />
            <ColorModeSwitch />
        </HStack>
    );
};

export default Header;
