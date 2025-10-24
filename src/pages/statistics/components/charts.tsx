import { Box, Button, Text, Flex } from "@chakra-ui/react";

interface ChartBarProps {
  height: number;
  color: string;
  label: string;
}

const ChartBar = ({ height, color, label }: ChartBarProps) => {
  return (
    <Flex direction="column" align="center">
      <Box 
        w={6} 
        bg={color} 
        roundedTop="md" 
        h={`${height}px`}
      />
      <Text fontSize="xs" color="gray.500" mt={2}>
        {label}
      </Text>
    </Flex>
  );
};

export const Charts = () => {
  return (
    <>
      {/* Period Selector */}
      <Box id="period-selector" px={4} py={2}>
        <Flex gap={2}>
          <Button
            px={4}
            py={2}
            bg="gray.900"
            color="white"
            fontSize="sm"
            rounded="xl"
          >
            Месяц
          </Button>
          <Button
            px={4}
            py={2}
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            color="gray.600"
            fontSize="sm"
            rounded="xl"
            _hover={{ bg: "gray.50" }}
          >
            3 месяца
          </Button>
          <Button
            px={4}
            py={2}
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            color="gray.600"
            fontSize="sm"
            rounded="xl"
            _hover={{ bg: "gray.50" }}
          >
            Год
          </Button>
          <Button
            px={4}
            py={2}
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            color="gray.600"
            fontSize="sm"
            rounded="xl"
            _hover={{ bg: "gray.50" }}
          >
            Все время
          </Button>
        </Flex>
      </Box>

      {/* Chart Section */}
      <Box id="chart-section" px={4} py={6}>
        <Box
          bg="white"
          rounded="2xl"
          p={6}
          shadow="sm"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <Flex justify="space-between" align="center" mb={6}>
            <Text fontSize="lg" color="gray.900">
              Динамика сборов
            </Text>
            <Text fontSize="xs" color="gray.500">
              Январь 2025
            </Text>
          </Flex>

          {/* Mock Chart */}
          <Box h={40} position="relative">
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              display="flex"
              alignItems="flex-end"
              justifyContent="space-between"
              px={2}
            >
              <ChartBar height={20} color="gray.300" label="1" />
              <ChartBar height={35} color="gray.400" label="5" />
              <ChartBar height={60} color="gray.500" label="10" />
              <ChartBar height={80} color="gray.600" label="15" />
              <ChartBar height={120} color="gray.700" label="20" />
              <ChartBar height={90} color="gray.800" label="25" />
            </Box>

          </Box>

          <Flex mt={4} align="center" justify="center" gap={4}>
            <Flex align="center" gap={2}>
              <Box w={3} h={3} bg="gray.700" rounded="full" />
              <Text fontSize="xs" color="gray.600">
                Собрано средств
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};