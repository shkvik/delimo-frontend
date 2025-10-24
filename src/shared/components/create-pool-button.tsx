import { Box, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export const CreatePoolButton = () => {
  return (
    <Box px={4} display="flex" justifyContent="center">
      <Button
        w="full"
        bg="gray.900"
        color="white"
        py={4}
        rounded="2xl"
        _hover={{ bg: "gray.800" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <FaPlus />
        Создать новый сбор
      </Button>
    </Box>
  );
};