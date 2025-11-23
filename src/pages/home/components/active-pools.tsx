import { Box, Text, Flex, Button, Stack } from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";

interface PoolCardProps {
  title: string;
  status: "open" | "ending";
  deadline: string;
  collected: number;
  target: number;
  percentage: number;
  participants: number;
}

const PoolCard = ({
  title,
  status,
  deadline,
  collected,
  target,
  percentage,
  participants,
}: PoolCardProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "open":
        return {
          text: "Открыт",
          bgColor: "#D1FAE5",
          textColor: "#065F46",
        };
      case "ending":
        return {
          text: "Завершается",
          bgColor: "#FED7AA",
          textColor: "#9A3412",
        };
      default:
        return {
          text: "Открыт",
          bgColor: "#D1FAE5",
          textColor: "#065F46",
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <Box
      bg="white"
      rounded="2xl"
      p={4}
      shadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
    >
      <Flex justify="space-between" align="start" mb={3}>
        <Box flex={1}>
          <Text color="#111827" mb={1} fontWeight="semibold">
            {title}
          </Text>
          <Flex align="center" gap={2}>
            <Box px={2} py={1} rounded="full" bg={statusConfig.bgColor}>
              <Text fontSize="xs" color={statusConfig.textColor}>
                {statusConfig.text}
              </Text>
            </Box>
            <Text fontSize="xs" color="#6B7280">
              до {deadline}
            </Text>
          </Flex>
        </Box>
        <Box textAlign="right">
          <Text fontSize="lg" color="#111827" fontWeight="bold">
            ₽{collected.toLocaleString()}
          </Text>
          <Text fontSize="xs" color="#6B7280">
            из ₽{target.toLocaleString()}
          </Text>
        </Box>
      </Flex>

      <Box mb={3}>
        <Flex justify="space-between" fontSize="xs" color="#6B7280" mb={1}>
          <Text>Прогресс</Text>
          <Text>{Math.round(percentage)}%</Text>
        </Flex>
        <Box w="full" bg="#E5E7EB" rounded="full" h="2" overflow="hidden">
          <Box
            h="2"
            rounded="full"
            bg="linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)"
            style={{ width: `${percentage}%` }}
          />
        </Box>
      </Box>

      <Flex justify="space-between" align="center">
        <Flex align="center" gap={1}>
          <FaUsers color="#9CA3AF" size="12px" />
          <Text fontSize="xs" color="#6B7280">
            {participants} участников
          </Text>
        </Flex>
        <Button
          variant="ghost"
          fontSize="sm"
          fontWeight="medium"
          color="transparent"
          bg="linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)"
          bgClip="text"
          _hover={{
            bg: "linear-gradient(90deg, #7C3AED 0%, #2563EB 100%)",
            bgClip: "text",
          }}
          p={0}
          h="auto"
        >
          Управлять
        </Button>
      </Flex>
    </Box>
  );
};

export const ActivePools = () => {
  const poolsData = [
    {
      title: "Подарок для Анны",
      status: "open" as const,
      deadline: "25 окт",
      collected: 8500,
      target: 15000,
      percentage: 57,
      participants: 12,
    },
    {
      title: "Поездка в Сочи",
      status: "open" as const,
      deadline: "30 окт",
      collected: 45200,
      target: 80000,
      percentage: 57,
      participants: 8,
    },
    {
      title: "Корпоратив компании",
      status: "ending" as const,
      deadline: "22 окт",
      collected: 28000,
      target: 30000,
      percentage: 93,
      participants: 25,
    },
  ];

  return (
    <Box id="active-pools" px={4} pb={6}>
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" color="#111827" fontWeight="semibold">
          Мои активные сборы
        </Text>
        <Button
          variant="ghost"
          fontSize="sm"
          fontWeight="medium"
          color="transparent"
          bg="linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)"
          bgClip="text"
          _hover={{
            bg: "linear-gradient(90deg, #7C3AED 0%, #2563EB 100%)",
            bgClip: "text",
          }}
          p={0}
          h="auto"
        >
          Все
        </Button>
      </Flex>

      <Stack gap={3}>
        {poolsData.map((pool, index) => (
          <PoolCard key={index} {...pool} />
        ))}
      </Stack>
    </Box>
  );
};
