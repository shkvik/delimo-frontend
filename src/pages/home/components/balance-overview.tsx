import { Box, Text, Grid, VStack } from "@chakra-ui/react";

export const BalanceOverview = () => {
  return (
    <Box
      id="balance-overview"
      px={4}
      py={6}
      bgGradient="linear(to-br, neutral.50, neutral.100)"
    >
      <Box
        bg="white"
        rounded="2xl"
        p={6}
        shadow="sm"
        borderWidth="1px"
        borderColor="neutral.200"
      >
        <VStack gap={4} mb={4} align="center">
          <Text fontSize="sm" color="neutral.600">
            Общий баланс
          </Text>
          <Text fontSize="3xl" color="neutral.900" fontWeight="medium">
            ₽24,580
          </Text>
        </VStack>

        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <VStack gap={1} align="center">
            <Text fontSize="sm" color="neutral.600">
              Активные сборы
            </Text>
            <Text fontSize="lg" color="neutral.900" fontWeight="medium">
              3
            </Text>
          </VStack>

          <VStack gap={1} align="center">
            <Text fontSize="sm" color="neutral.600">
              Завершенные
            </Text>
            <Text fontSize="lg" color="neutral.900" fontWeight="medium">
              12
            </Text>
          </VStack>
        </Grid>
      </Box>
    </Box>
  );
};
