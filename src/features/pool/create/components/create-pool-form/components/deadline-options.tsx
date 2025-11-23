import { Box, Text, Flex } from "@chakra-ui/react";

export interface DeadlineOptionsState {
  deadlineBehavior: "refund" | "transfer";
}

export interface DeadlineOptionsProps {
  deadlineOptions: DeadlineOptionsState;
  update: <K extends keyof DeadlineOptionsState>(
    key: K,
    value: DeadlineOptionsState[K]
  ) => void;
}

const CustomRadio = ({
  isChecked,
  onChange,
  children,
}: {
  isChecked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Flex align="start" gap={3} cursor="pointer" onClick={onChange}>
      <Box position="relative">
        <Box
          w={5}
          h={5}
          borderWidth="2px"
          borderColor={isChecked ? "cyan.500" : "gray.300"}
          rounded="full"
          transition="all 0.2s"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {isChecked && (
            <Box
              w={3}
              h={3}
              bg="cyan.500"
              rounded="full"
              transition="all 0.2s"
            />
          )}
        </Box>
      </Box>
      {children}
    </Flex>
  );
};

export const DeadlineOptions = ({
  deadlineOptions,
  update,
}: DeadlineOptionsProps) => {
  return (
    <Box id="deadline-behavior-section">
      <Box bg="white" rounded="2xl" p={4} boxShadow="md">
        <Text fontSize="sm" fontWeight="semibold" color="gray.900" mb={4}>
          После дедлайна
        </Text>

        <Box display="flex" flexDirection="column" gap={3}>
          {/* Refund Option */}
          <CustomRadio
            isChecked={deadlineOptions.deadlineBehavior === "refund"}
            onChange={() => update("deadlineBehavior", "refund")}
          >
            <Box flex={1}>
              <Text
                fontSize="sm"
                fontWeight="medium"
                color="gray.900"
                display="block"
              >
                Вернуть всем участникам
              </Text>
              <Text fontSize="xs" color="gray.500" mt={1}>
                Если цель не достигнута, деньги вернутся всем участникам
              </Text>
            </Box>
          </CustomRadio>

          {/* Transfer Option */}
          <CustomRadio
            isChecked={deadlineOptions.deadlineBehavior === "transfer"}
            onChange={() => update("deadlineBehavior", "transfer")}
          >
            <Box flex={1}>
              <Text
                fontSize="sm"
                fontWeight="medium"
                color="gray.900"
                display="block"
              >
                Передать создателю
              </Text>
              <Text fontSize="xs" color="gray.500" mt={1}>
                Все собранные средства перейдут к организатору сбора
              </Text>
            </Box>
          </CustomRadio>
        </Box>
      </Box>
    </Box>
  );
};
