import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Grid, GridItem, Button, Flex, Box, VStack, Text, Image } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import "./Profile.scss";

const ProfileInfo = ({ setOrders }) => {
    const { user, setAvatar } = useContext(UserContext);

    const avatarOptions = [
        // avatares subidos por mi
        "src/assets/avatars/michael.png",
        "src/assets/avatars/franklin.png",
        "src/assets/avatars/trevor.jpeg",
        "src/assets/avatars/lara.jpeg",
        "src/assets/avatars/chungLi.jpeg",
        "src/assets/avatars/mario.jpeg",
        "src/assets/avatars/peach.png",
    ];
    const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0]);

    const handleAvatarChange = (avatar) => {
        setSelectedAvatar(avatar);
        setAvatar(avatar);
    };

    const fetchOrders = async () => {};

    return (
        <Flex align="flex-start" className="profile-container">
            <Box as="aside" w="300px" p={2} borderRight="1px solid #ccc" mt={4} className="avatar-container">
                <p>Selecciona tu avatar:</p>
                <Grid className="galeria" templateColumns={{ base: "repeat(3, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}>
                    {avatarOptions.map((avatar, index) => (
                        <GridItem key={index}>
                            <img src={avatar} alt={`Avatar ${index + 1}`} className={`avatar ${selectedAvatar === avatar ? "selected" : ""}`} onClick={() => handleAvatarChange(avatar)} />
                        </GridItem>
                    ))}
                </Grid>
            </Box>
            <Box as="main" p={4} className="user-info-container">
                {user && (
                    <VStack align="start" spacing={4}>
                        <Text>Bienvenid@, {user.name}!</Text>
                        {selectedAvatar ? (
                            <Image src={selectedAvatar} alt="Selected Avatar" boxSize="100px" className="avatar-image" />
                        ) : (
                            <FaUserCircle size={100} color="#ccc" className="avatar-icon" />
                        )}
                        <Button onClick={fetchOrders}>Ver Pedidos</Button>
                    </VStack>
                )}
            </Box>
        </Flex>
    );
};

export default ProfileInfo;
