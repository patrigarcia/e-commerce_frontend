import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Grid, GridItem, Flex, Box, VStack, Text, Image } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import "./Profile.scss";

const ProfileInfo = () => {
    const { user, setUser } = useContext(UserContext);
    const avatarRelativePath = "src/assets/avatars/";
    const avatarOptions = ["michael.png", "franklin.png", "trevor.png", "mario.png", "pacman.png", "subzero.png", "chunLi.png", "messi.png", "peach.png"];

    const [selectedAvatar, setSelectedAvatar] = useState(avatarRelativePath + user.avatar);

    const handleAvatarChange = (avatar) => {
        setSelectedAvatar(avatarRelativePath + avatar);
        setUser({ ...user, avatar: avatar });
    };

    return (
        <Flex className="profile-container">
            <Box as="aside" className="avatar-container">
                <Box p={4} className="user-info-container">
                    {user && (
                        <VStack align="center" spacing={4}>
                            <Text className="welcome_text">Bienvenid@, {user.name}!</Text>
                            {selectedAvatar ? <Image src={selectedAvatar} alt="Selected Avatar" mb={8} borderRadius="full" className="avatar-image" /> : <FaUserCircle className="avatar-icon" />}
                        </VStack>
                    )}
                </Box>
                <Text as="b" className="select_text">
                    Selecciona tu avatar:
                </Text>
                <Text className="select_text">(Puedes cambiarlo cuando quieras)</Text>
                <Grid className="galery" templateColumns={{ base: "repeat(3, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}>
                    {avatarOptions.map((avatar, index) => (
                        <GridItem key={index}>
                            <Image
                                w="100%"
                                p={1}
                                src={avatarRelativePath + avatar}
                                alt={`Avatar ${index + 1}`}
                                className={`avatar ${selectedAvatar === avatarRelativePath + avatar ? "selected" : ""}`}
                                onClick={() => handleAvatarChange(avatar)}
                            />
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </Flex>
    );
};

export default ProfileInfo;
