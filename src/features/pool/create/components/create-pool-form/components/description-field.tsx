import { Box, Text, Textarea, Flex } from "@chakra-ui/react";
import { FaLightbulb } from "react-icons/fa";

interface DescriptionFieldProps {
  description: string;
  setDescription: (value: string) => void;
}

export const DescriptionField = ({
  description,
  setDescription,
}: DescriptionFieldProps) => (
  <Box display="flex" flexDirection="column" gap={2}>
    <Text fontSize="sm" color="gray.900">
      Описание (необязательно)
    </Text>
    <Textarea
      placeholder="Расскажите подробнее о цели сбора..."
      rows={4}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      bg="white"
      borderWidth="1px"
      borderColor="gray.300"
      rounded="2xl"
      _focus={{ borderColor: "gray.500", outline: "none" }}
      resize="none"
      px={4}
      py={3}
    />
    <Flex justify="space-between">
      <Flex align="center" gap={2}>
        <FaLightbulb color="gray.400" fontSize="xs" />
        <Text fontSize="xs" color="gray.500">
          Сборы с описанием собирают на 15% больше
        </Text>
      </Flex>
      <Text fontSize="xs" color="gray.500">
        {description.length}/200
      </Text>
    </Flex>
  </Box>
);
