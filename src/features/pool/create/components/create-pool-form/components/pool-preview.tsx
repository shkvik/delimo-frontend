import { Box, Text, Flex, Badge } from "@chakra-ui/react";
import { FaEye, FaUsers } from "react-icons/fa";

export interface PoolPreviewProps {
  title?: string;
  category?: string;
  deadline?: string;
  currentAmount?: number;
  goalAmount?: number;
  participants?: number;
  status?: string;
}

export const PoolPreview = ({
  title = "Название сбора",
  category = "Категория",
  deadline = "до даты",
  currentAmount = 0,
  goalAmount = 0,
  participants = 0,
  status = "Открыт",
}: PoolPreviewProps) => {
  const progressPercentage =
    goalAmount > 0 ? (currentAmount / goalAmount) * 100 : 0;

  return (
    <Box id="pool-preview-section">
      <Box
        bg="linear-gradient(to bottom right, rgb(239, 246, 255), rgb(250, 245, 255))"
        rounded="2xl"
        p={4}
        borderWidth="1px"
        borderColor="blue.200"
      >
        <Flex align="center" gap={3} mb={3}>
          <Box
            w={10}
            h={10}
            bg="blue.100"
            rounded="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaEye color="#2563eb" size={16} />
          </Box>
          <Box>
            <Text fontSize="sm" fontWeight="semibold" color="blue.900">
              Предварительный просмотр
            </Text>
            <Text fontSize="xs" color="blue.700">
              Так будет выглядеть ваш сбор
            </Text>
          </Box>
        </Flex>

        <Box
          bg="white"
          rounded="xl"
          p={3}
          borderWidth="1px"
          borderColor="blue.100"
        >
          <Flex align="start" justify="space-between" mb={2}>
            <Box flex={1}>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="gray.900"
                id="preview-title"
              >
                {title}
              </Text>
              <Flex align="center" gap={2} mt={1}>
                <Badge
                  fontSize="xs"
                  bg="gray.100"
                  color="gray.600"
                  px={2}
                  py={1}
                  rounded="full"
                  id="preview-category"
                >
                  {category}
                </Badge>
                <Text fontSize="xs" color="gray.500" id="preview-deadline">
                  {deadline}
                </Text>
              </Flex>
            </Box>
            <Box textAlign="right">
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="gray.900"
                id="preview-amount"
              >
                ₽{currentAmount.toLocaleString()}
              </Text>
              <Text fontSize="xs" color="gray.500">
                из ₽{goalAmount.toLocaleString()}
              </Text>
            </Box>
          </Flex>
          <Box mb={2}>
            <Box
              w="full"
              bg="gray.200"
              rounded="full"
              h="1.5"
              position="relative"
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                h="1.5"
                bg="cyan.500"
                rounded="full"
                style={{ width: `${progressPercentage}%` }}
              />
            </Box>
          </Box>
          <Flex align="center" justify="space-between">
            <Flex align="center" gap={1}>
              <FaUsers color="#9ca3af" size={12} />
              <Text fontSize="xs" color="gray.500">
                {participants} участников
              </Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Badge
                fontSize="xs"
                bg="green.100"
                color="green.700"
                px={2}
                py={1}
                rounded="full"
                id="preview-status"
              >
                {status}
              </Badge>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
