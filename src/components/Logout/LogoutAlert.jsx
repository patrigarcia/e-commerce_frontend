import { useState, useEffect } from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

const LogoutAlert = () => {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAlert(false);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        showAlert && (
            <Alert status="success">
                <AlertIcon />
                Se cerró la sesión!
            </Alert>
        )
    );
};

export default LogoutAlert;
