import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/config/routes";
import { useHideBottomNavOnKeyboard } from "@/widgets/bottom-nav/hooks/use-hide-bottom-nav-on-keyboard";

export const CreatePoolButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isKeyboardSafe = useHideBottomNavOnKeyboard(25);

  if (!isKeyboardSafe) {
    return null;
  }

  const handleClick = () => {
    navigate(ROUTES.POOLS_CREATE, { state: { from: location.pathname } });
  };

  return (
    <Box
      px={4}
      py={6}
      display="flex"
      justifyContent="center"
      position="fixed"
      bottom='60px' // Располагаем кнопку над bottom-nav (у которого zIndex={100})
      left={0}
      right={0}
      zIndex={99}
    >
      <Button
        type="button"
        onClick={handleClick}
        w="full"
        maxW="400px" // Ограничиваем максимальную ширину для больших экранов
        h="60px" // Фиксированная высота вместо процента
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
