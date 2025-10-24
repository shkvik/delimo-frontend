import { Box, Text, Grid, Input, Flex } from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";

interface DeadlineFieldProps {
  date: string;
  time: string;
  setDate: (value: string) => void;
  setTime: (value: string) => void;
}

export const DeadlineField = ({
  date,
  time,
  setDate,
  setTime,
}: DeadlineFieldProps) => (
  <Box display="flex" flexDirection="column" gap={2}>
    <Text fontSize="sm" color="gray.900">
      Дедлайн *
    </Text>
    <Grid templateColumns="1fr 1fr" gap={3}>
      <Box>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          rounded="2xl"
        />
        <Text fontSize="xs" color="gray.500" mt={1}>
          Дата
        </Text>
      </Box>
      <Box>
        <Input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          rounded="2xl"
        />
        <Text fontSize="xs" color="gray.500" mt={1}>
          Время
        </Text>
      </Box>
    </Grid>
    <Box
      bg="gray.50"
      rounded="xl"
      p={3}
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Flex align="center" gap={2}>
        <FaClock color="gray.500" fontSize="sm" />
        <Text fontSize="sm" color="gray.700">
          Рекомендуемый срок: 2–4 недели
        </Text>
      </Flex>
    </Box>
  </Box>
);
