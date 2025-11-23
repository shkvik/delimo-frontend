import { Box, Text, Input, Flex, Button } from "@chakra-ui/react";

interface GoalFieldProps {
  goal: string;
  setGoal: (value: string) => void;
}

const quickAmounts = [
  { amount: "5000", label: "₽5,000" },
  { amount: "15000", label: "₽15,000" },
  { amount: "50000", label: "₽50,000" },
];

export const GoalField = ({ goal, setGoal }: GoalFieldProps) => (
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
        mb={2}
        display="block"
      >
        Целевая сумма
        <Text as="span" color="red.500">
          {" "}
          *
        </Text>
      </Text>
      <Box position="relative">
        <Input
          type="number"
          placeholder="50000"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="xl"
          color="black"
          _focus={{
            borderColor: "gray.500",
            outline: "none",
            boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)",
          }}
          _placeholder={{ color: "gray.500" }}
          pl={8}
          pr={4}
          py={3}
          transition="all 0.2s"
          min="100"
          step="100"
        />
        <Text
          position="absolute"
          left={3}
          top="50%"
          transform="translateY(-50%)"
          color="gray.500"
          fontWeight="medium"
        >
          ₽
        </Text>
      </Box>
      <Flex justify="space-between" align="center" mt={2}>
        <Text fontSize="xs" color="gray.500">
          Минимум: ₽100
        </Text>
        <Flex gap={2}>
          {quickAmounts.map((item) => (
            <Button
              key={item.amount}
              px={3}
              py={1}
              bg="gray.100"
              color="gray.600"
              fontSize="xs"
              borderRadius="full"
              h="auto"
              minW="auto"
              onClick={() => setGoal(item.amount)}
              _hover={{ bg: "gray.200" }}
            >
              {item.label}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Box>
  </Box>
);
