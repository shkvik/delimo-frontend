import { Box, Text, Input, Flex } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";

interface GoalFieldProps {
  goal: string;
  setGoal: (value: string) => void;
}

export const GoalField = ({ goal, setGoal }: GoalFieldProps) => (
  <Box display="flex" flexDirection="column" gap={2}>
    <Text fontSize="sm" color="gray.900">
      Цель сбора *
    </Text>
    <Box position="relative">
      <Input
        type="number"
        placeholder="5000"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        bg="white"
        borderWidth="1px"
        borderColor="gray.300"
        rounded="2xl"
        _focus={{ borderColor: "gray.500", outline: "none" }}
        px={4}
        py={3}
        pr={12}
      />
      <Text
        position="absolute"
        right={4}
        top="50%"
        transform="translateY(-50%)"
        color="gray.500"
      >
        ₽
      </Text>
    </Box>
    <Flex align="center" gap={2}>
      <FaInfoCircle color="gray.400" fontSize="xs" />
      <Text fontSize="xs" color="gray.500">
        Рекомендуем добавить 10–15% к желаемой сумме
      </Text>
    </Flex>
  </Box>
);
