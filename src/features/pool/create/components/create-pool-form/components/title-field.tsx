import { Box, Text, Input, Flex } from "@chakra-ui/react";

interface TitleFieldProps {
  title: string;
  setTitle: (value: string) => void;
}

export const TitleField = ({ title, setTitle }: TitleFieldProps) => (
  <Box
    bg="white"
    borderRadius="2xl"
    p={4}
    boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    mb={6}
  >
    <Box mb={4}>
      <Text
        fontSize="sm"
        fontWeight="semibold"
        color="gray.900"
        mb={2}
        display="block"
      >
        Название сбора
        <Text as="span" color="red.500">
          {" "}
          *
        </Text>
      </Text>
      <Input
        type="text"
        placeholder="Например: Подарок Анне"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
        px={4}
        py={3}
        transition="all 0.2s"
      />
      <Flex justify="space-between" mt={2}>
        <Text fontSize="xs" color="gray.500">
          Минимум 5 символов
        </Text>
        <Text fontSize="xs" color="gray.500">
          {title.length}/50
        </Text>
      </Flex>
    </Box>
  </Box>
);
