import { Box, Flex, Heading, IconButton, Image } from "@chakra-ui/react";
import { FaCoins, FaBell } from "react-icons/fa";

export const LayoutHeader = () => {
  return (
    <Box
      as="header"
      bg="white"
      borderBottomWidth="1px"
      borderColor="#E2E8F0"
      px={4}
      py={3}
      position="sticky"
      top={0}
      zIndex={50}
    >
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={3}>
          <Box
            w="32px"
            h="32px"
            bg="gray.700"
            rounded="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaCoins color="white" size="14px" />
          </Box>

          <Heading as="h1" fontSize="lg" color="#1A202C">
            Делимо
          </Heading>
        </Flex>

        <Flex align="center" gap={3}>
          <IconButton
            aria-label="Notifications"
            variant="ghost"
            p={2}
            rounded="lg"
            _hover={{ bg: "#F7FAFC" }}
            color="#718096"
          >
            <FaBell />
          </IconButton>

          <Image
            src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=12345"
            alt="Profile"
            boxSize="32px"
            rounded="full"
            objectFit="cover"
          />
        </Flex>
      </Flex>
    </Box>
  );
};
