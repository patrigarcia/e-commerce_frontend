import React from "react";
import { Stepper, Step, StepIndicator, StepSeparator, StepStatus, StepIcon, StepNumber, StepTitle, StepDescription, Box, Flex } from "@chakra-ui/react";
import { useSteps } from "@chakra-ui/react";
import "./StepperCart.scss";

const steps = [
    { title: "Carrito", description: "Verifica el carrito" },
    { title: "Envío", description: "Carga tu dirección" },
    { title: "Finalizar", description: "Pago" },
];

const StepperCart = ({ buyStep }) => {
    useSteps({
        index: buyStep,
        count: steps.length,
    });

    return (
        <Flex mt={5} mb={5} justifyContent="center">
            <Stepper colorScheme="purple" index={buyStep}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
                        </StepIndicator>

                        <Box flexShrink="0">
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </Box>

                        {index !== steps.length - 1 && <StepSeparator />}
                    </Step>
                ))}
            </Stepper>
        </Flex>
    );
};

export default StepperCart;
