import { Box, Text, Grid, Flex } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export const ActivitySummary = () => {
  return (
    <Box id="activity-summary" px={4} py={6}>
      <Box
        bg="white"
        rounded="2xl"
        p={6}
        shadow="sm"
        borderWidth="1px"
        borderColor="gray.200"
      >
        <Text fontSize="lg" color="gray.900" mb={4}>
          Активность за месяц
        </Text>

        <Grid templateColumns="1fr 1fr" gap={4} mb={4}>
          <Box textAlign="center" p={4} bg="gray.50" rounded="xl">
            <Text fontSize="2xl" color="gray.900" mb={1}>
              8
            </Text>
            <Text fontSize="xs" color="gray.600">
              Созданных сборов
            </Text>
          </Box>

          <Box textAlign="center" p={4} bg="gray.50" rounded="xl">
            <Text fontSize="2xl" color="gray.900" mb={1}>
              15
            </Text>
            <Text fontSize="xs" color="gray.600">
              Участий в сборах
            </Text>
          </Box>
        </Grid>

        <Box display="flex" flexDirection="column" gap={3}>
          <Flex justify="space-between" align="center">
            <Text fontSize="sm" color="gray.600">
              Успешных сборов
            </Text>
            <Text fontSize="sm" color="gray.900">
              6 из 8
            </Text>
          </Flex>

          <Flex justify="space-between" align="center">
            <Text fontSize="sm" color="gray.600">
              Средний взнос
            </Text>
            <Text fontSize="sm" color="gray.900">
              ₽1,267
            </Text>
          </Flex>

          <Flex justify="space-between" align="center">
            <Text fontSize="sm" color="gray.600">
              Рейтинг
            </Text>
            <Flex align="center" gap={1}>
              <FaStar color="gray" fontSize="xs" />
              <FaStar color="gray" fontSize="xs" />
              <FaStar color="gray" fontSize="xs" />
              <FaStar color="gray" fontSize="xs" />
              <FaStar color="gray" fontSize="xs" />
              <Text fontSize="sm" color="gray.900" ml={2}>
                4.8
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};