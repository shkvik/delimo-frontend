import { Box, Text, Input, Button, Flex } from "@chakra-ui/react";

interface DeadlineFieldProps {
  date: string;
  time: string;
  setDate: (value: string) => void;
  setTime: (value: string) => void;
}

const getFutureDate = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
};

export const DeadlineField = ({
  date,
  time,
  setDate,
  setTime,
}: DeadlineFieldProps) => {
  const handleQuickDeadline = (days: number) => {
    setDate(getFutureDate(days));
    setTime("23:59");
  };

  return (
    <Box
      bg="white"
      borderRadius="2xl"
      p={4}
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    >
      <Box mb={4}>
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color="gray.900"
          mb={3}
          display="block"
        >
          Дедлайн сбора
          <Text as="span" color="red.500">
            {" "}
            *
          </Text>
        </Text>
        <Box borderRadius="xl" p={4} borderWidth="1px" borderColor="gray.200">
          <Flex gap={4} mb={3}>
            <Box flex={1}>
              <Text
                fontSize="xs"
                fontWeight="medium"
                color="gray.600"
                mb={2}
                display="block"
              >
                Дата
              </Text>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                borderRadius="lg"
                borderWidth="1px"
                borderColor="gray.200"
                color="black"
                px={3}
                py={2}
                fontSize="sm"
                _focus={{
                  borderColor: "gray.500",
                  outline: "none",
                }}
              />
            </Box>
            <Box flex={1}>
              <Text
                fontSize="xs"
                fontWeight="medium"
                color="gray.600"
                mb={2}
                display="block"
              >
                Время
              </Text>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                borderRadius="lg"
                borderWidth="1px"
                borderColor="gray.200"
                color="black"
                px={3}
                py={2}
                fontSize="sm"
                _focus={{
                  borderColor: "gray.500",
                  outline: "none",
                }}
              />
            </Box>
          </Flex>
          <Flex gap={2} justify="start">
            <Button
              px={3}
              py={1}
              bg="rgba(255, 255, 255, 0.6)"
              color="gray.700"
              fontSize="xs"
              borderRadius="full"
              h="8"
              flex={1}
              borderWidth="1px"
              borderColor="gray.200"
              onClick={() => handleQuickDeadline(7)}
              _hover={{ bg: "rgba(243, 244, 246, 0.8)" }}
            >
              Неделя
            </Button>
            <Button
              px={3}
              py={1}
              bg="rgba(255, 255, 255, 0.6)"
              color="gray.700"
              fontSize="xs"
              borderRadius="full"
              h="8"
              flex={1}
              borderWidth="1px"
              borderColor="gray.200"
              onClick={() => handleQuickDeadline(14)}
              _hover={{ bg: "rgba(243, 244, 246, 0.8)" }}
            >
              2 Недели
            </Button>
            <Button
              px={3}
              py={1}
              bg="rgba(255, 255, 255, 0.6)"
              color="gray.700"
              fontSize="xs"
              borderRadius="full"
              h="8"
              flex={1}
              borderWidth="1px"
              borderColor="gray.200"
              onClick={() => handleQuickDeadline(30)}
              _hover={{ bg: "rgba(243, 244, 246, 0.8)" }}
            >
              Месяц
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
