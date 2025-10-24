import { Box, Text, Grid, VStack } from "@chakra-ui/react";

export const BalanceOverview = () => {
  return (
    <Box
      id="balance-overview"
      px={4}
      py={6}
      bgGradient="linear(to-br, #F9FAFB, #F3F4F6)"
    >
      <Box
        bg="white"
        rounded="2xl"
        p={6}
        shadow="sm"
        borderWidth="1px"
        borderColor="#E2E8F0"
      >
        <VStack gap={4} mb={4} align="center">
          <Text fontSize="sm" color="#718096">
            Общий баланс
          </Text>
          <Text fontSize="3xl" color="#1A202C" fontWeight="medium">
            ₽24,580
          </Text>
        </VStack>
        
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <VStack gap={1} align="center">
            <Text fontSize="sm" color="#718096">
              Активные сборы
            </Text>
            <Text fontSize="lg" color="#1A202C" fontWeight="medium">
              3
            </Text>
          </VStack>
          
          <VStack gap={1} align="center">
            <Text fontSize="sm" color="#718096">
              Завершенные
            </Text>
            <Text fontSize="lg" color="#1A202C" fontWeight="medium">
              12
            </Text>
          </VStack>
        </Grid>
      </Box>
    </Box>
  );
};
