import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Grid, GridItem, Button, Flex, Box, VStack, Text, Image } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import "./Profile.scss";

const ProfileInfo = ({ setOrders }) => {
    const { user, setUser } = useContext(UserContext);
    const avatarRelativePath = "src/assets/avatars/";
    const avatarOptions = [
        // avatares subidos por mi
        "michael.png",
        "franklin.png",
        "trevor.jpeg",
        "lara.jpeg",
        "chungLi.jpeg",
        "mario.jpeg",
        "peach.png",
    ];

    const [selectedAvatar, setSelectedAvatar] = useState(avatarRelativePath + user.avatar);

    const handleAvatarChange = (avatar) => {
        setSelectedAvatar(avatarRelativePath + avatar);
        setUser({ ...user, avatar: avatar });
    };

    const fetchOrders = async () => {};

    return (
        <Flex align="flex-start" className="profile-container">
            <Box as="aside" w="300px" p={2} borderRight="1px solid #ccc" mt={4} className="avatar-container">
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
