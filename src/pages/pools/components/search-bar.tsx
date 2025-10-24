import {
  Box,
  Input,
  Icon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <Box id="search-section" px={4} py={3}>
      <Box position="relative">
        <Box
          position="absolute"
          left={3}
          top="50%"
          transform="translateY(-50%)"
          zIndex={1}
        >
          <Icon as={FaSearch} color="gray.400" boxSize={4} />
        </Box>
        <Input
          type="text"
          placeholder="Поиск по названию сбора..."
          pl={10}
          pr={4}
          py={3}
          bg="gray.50"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="xl"
          fontSize="sm"
          _focus={{
            outline: "none",
            ring: "2px",
            ringColor: "gray.300",
          }}
        />
      </Box>
    </Box>
  );
};
