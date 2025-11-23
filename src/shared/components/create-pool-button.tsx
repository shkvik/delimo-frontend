import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/config/routes";

export const CreatePoolButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(ROUTES.POOLS_CREATE, { state: { from: location.pathname } });
  };

  return (
    <Box px={4} py={6} display="flex" justifyContent="center">
      <Button
        type="button"
        onClick={handleClick}
        w="full"
        h="10%"
        bg="linear-gradient(135deg, #14B8A6 0%, #8B5CF6 100%)"
        color="white"
        py={4}
        rounded="2xl"
        _active={{ transform: "scale(0.95)" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        aria-label="Создать новый сбор"
        shadow="lg"
        transition="all 0.15s ease-in-out"
      >
        <FaPlus />
        Создать сбор
      </Button>
    </Box>
  );
};
