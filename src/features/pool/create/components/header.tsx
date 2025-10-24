import { ROUTES } from "@/shared/config/routes";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { FaArrowLeft, FaQuestionCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from;
  const target = typeof from === "string" && from.length ? from : ROUTES.POOLS;

  const handleBack = () => {
    navigate(target, { replace: true });
  };

  return (
    <Box
      id="header"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      px={4}
      py={3}
      position="sticky"
      top={0}
      zIndex={50}
    >
      <Flex justify="space-between" align="center">
        <Button
          p={2}
          ml={-2}
          rounded="lg"
          _hover={{ bg: "gray.100" }}
          variant="ghost"
          onClick={handleBack}
        >
          <FaArrowLeft color="gray.600" />
        </Button>
        <Heading fontSize="lg" color="gray.900">
          Новый сбор
        </Heading>
        <Button p={2} rounded="lg" _hover={{ bg: "gray.100" }} variant="ghost">
          <FaQuestionCircle color="gray.600" />
        </Button>
      </Flex>
    </Box>
  );
};
