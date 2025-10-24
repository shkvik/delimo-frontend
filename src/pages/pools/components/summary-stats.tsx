import { Box, Text, Grid } from "@chakra-ui/react";

export const SummaryStats = () => {
  return (
    <Box id="summary-stats" px={4} py={4} mb={4}>
      <Box
        bg="linear-gradient(to bottom right, gray.50, gray.100)"
        rounded="2xl"
        p={4}
        borderWidth="1px"
        borderColor="gray.200"
      >
        <Text color="gray.900" mb={3} fontWeight="medium" textAlign="center">
          Общая статистика
        </Text>
        <Grid templateColumns="1fr 1fr" gap={4}>
          <Box textAlign="center">
            <Text fontSize="2xl" color="gray.900" fontWeight="bold">
              ₽124,580
            </Text>
            <Text fontSize="sm" color="gray.600">
              Всего собрано
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="2xl" color="gray.900" fontWeight="bold">
              87%
            </Text>
            <Text fontSize="sm" color="gray.600">
              Успешность
            </Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};