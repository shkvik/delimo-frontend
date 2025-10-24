import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";

export const ProfileHeader = () => {
  return (
    <Box 
      id="profile-header" 
      px={4} 
      py={6} 
      bg="linear-gradient(to bottom right, gray.50, gray.100)"
    >
      <Box textAlign="center">
        <Box position="relative" display="inline-block" mb={4}>
          <Image
            src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=12345"
            alt="Profile"
            boxSize={24}
            rounded="full"
            borderWidth="4px"
            borderColor="white"
            shadow="lg"
          />
        </Box>
        <Text fontSize="xl" color="gray.900" mb={1}>
          Александр Петров
        </Text>
        <Text fontSize="sm" color="gray.600" mb={4}>
          @alex_petrov
        </Text>

        <Flex justify="center" gap={6}>
          <Box textAlign="center">
            <Text fontSize="lg" color="gray.900" mb={1}>
              12
            </Text>
            <Text fontSize="xs" color="gray.600">
              Сборов
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="lg" color="gray.900" mb={1}>
              ₽28,450
            </Text>
            <Text fontSize="xs" color="gray.600">
              Собрано
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="lg" color="gray.900" mb={1}>
              ₽15,200
            </Text>
            <Text fontSize="xs" color="gray.600">
              Внесено
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};