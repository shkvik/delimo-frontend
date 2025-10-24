import { Box, Text, Input, Flex } from "@chakra-ui/react";

interface TitleFieldProps {
  title: string;
  setTitle: (value: string) => void;
}

export const TitleField = ({ title, setTitle }: TitleFieldProps) => (
  <Box display="flex" flexDirection="column" gap={2}>
    <Text fontSize="sm" color="gray.900">
      Название сбора *
    </Text>
    <Input
      type="text"
      placeholder="Например: Подарок коллеге на день рождения"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      bg="white"
      borderWidth="1px"
      borderColor="gray.300"
      rounded="2xl"
      _focus={{ borderColor: "gray.500", outline: "none" }}
      _placeholder={{ color: "gray.500" }}
      px={4}
      py={3}
    />
    <Flex justify="space-between">
      <Text fontSize="xs" color="gray.500">
        Минимум 5 символов
      </Text>
      <Text fontSize="xs" color="gray.500">
        {title.length}/50
      </Text>
    </Flex>
  </Box>
);
