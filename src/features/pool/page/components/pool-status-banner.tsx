import { Box, Text, Flex } from "@chakra-ui/react";
import {
  FaCircle,
} from "react-icons/fa";

export const PoolStatusBanner = () => {
  return (
    <Box id="pool-status" px={4} py={3} bgGradient="to-r, gray.50, gray.100">
      <Box bg="white" rounded="2xl" p={4} borderWidth="1px" borderColor="gray.200" shadow="sm">
        <Flex justify="space-between" align="center" mb={3}>
          <Flex align="center" gap={2}>
            <Box
              display="inline-flex"
              alignItems="center"
              px={3}
              py={1}
              rounded="full"
              bg="gray.100"
              color="gray.800"
              fontSize="sm"
            >
              <Box as={FaCircle} color="gray.500" fontSize="xs" mr={2} />
              Активный сбор
            </Box>
          </Flex>
          <Box textAlign="right">
            <Text fontSize="xs" color="gray.500">
              Осталось времени
            </Text>
            <Text fontSize="sm" color="gray.900">
              3 дня 14 часов
            </Text>
          </Box>
        </Flex>

        <Box textAlign="center" mb={4}>
          <Text fontSize="xs" color="gray.600" mb={1}>
            Цель сбора
          </Text>
          <Text fontSize="2xl" color="gray.900">
            ₽8,000
          </Text>
        </Box>
      </Box>
    </Box>
  );
};