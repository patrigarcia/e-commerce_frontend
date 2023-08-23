import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Grid, GridItem, Button, Flex, Box, VStack, Text, Image } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import "./Profile.scss";

const ProfileInfo = ({ setOrders }) => {
    const { user, setUser } = useContext(UserContext);
    const avatarRelativePath = "src/assets/avatars/";
    const avatarOptions = ["michael.png", "franklin.png", "trevor.png", "mario.png", "pacman.png", "subzero.png", "chunLi.png", "messi.png", "peach.png"];

    const [selectedAvatar, setSelectedAvatar] = useState(avatarRelativePath + user.avatar);

    const handleAvatarChange = (avatar) => {
        setSelectedAvatar(avatarRelativePath + avatar);
        setUser({ ...user, avatar: avatar });
    };

    const fetchOrders = async () => {};

    return (
        <Flex className="profile-container">
            <Box as="aside" className="avatar-container">
                <p>Selecciona tu avatar:</p>
                <Grid className="galeria" templateColumns={{ base: "repeat(3, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}>
                    {avatarOptions.map((avatar, index) => (
                        <GridItem key={index}>
                            <img
                                src={avatarRelativePath + avatar}
                                alt={`Avatar ${index + 1}`}
                                className={`avatar ${selectedAvatar === avatarRelativePath + avatar ? "selected" : ""}`}
                                onClick={() => handleAvatarChange(avatar)}
                            />
                        </GridItem>
                    ))}
                </Grid>
            </Box>
            <Box as="main" p={4} className="user-info-container">
                {user && (
                    <VStack align="start" spacing={4}>
                        <Text>Bienvenid@, {user.name}!</Text>
                        {selectedAvatar ? <Image src={selectedAvatar} alt="Selected Avatar" className="avatar-image" /> : <FaUserCircle className="avatar-icon" />}
                        <Button onClick={fetchOrders}>Ver Pedidos</Button>
                    </VStack>
                )}
            </Box>
        </Flex>
    );
};

export default ProfileInfo;
