import { Box, Text, Flex, Button, Stack, Image } from "@chakra-ui/react";
import {
  FaEllipsisV,
  FaCircle,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

interface PoolCardProps {
  title: string;
  status: "active" | "waiting" | "urgent";
  deadline: string;
  collected: number;
  target: number;
  percentage: number;
  remaining: number;
  participants: number;
  avatars: string[];
  additionalCount: number;
}

const PoolCard = ({
  title,
  status,
  deadline,
  collected,
  target,
  percentage,
  remaining,
  participants,
  avatars,
  additionalCount,
}: PoolCardProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "active":
        return {
          icon: FaCircle,
          text: "Активный",
          bgColor: "gray.100",
          textColor: "gray.800",
        };
      case "waiting":
        return {
          icon: FaClock,
          text: "Ожидание",
          bgColor: "gray.100",
          textColor: "gray.800",
        };
      case "urgent":
        return {
          icon: FaExclamationTriangle,
          text: "Срочно",
          bgColor: "gray.100",
          textColor: "gray.800",
        };
      default:
        return {
          icon: FaCircle,
          text: "Активный",
          bgColor: "gray.100",
          textColor: "gray.800",
        };
    }
  };

  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;

  return (
    <Box
      bg="white"
      rounded="2xl"
      p={4}
      borderWidth="1px"
      borderColor="gray.200"
      shadow="sm"
    >
      <Flex justify="space-between" align="start" mb={3}>
        <Box flex={1}>
          <Text color="gray.900" mb={1} fontWeight="medium">
            {title}
          </Text>
          <Flex align="center" gap={2}>
            <Flex
              align="center"
              px={2}
              py={1}
              rounded="full"
              bg={statusConfig.bgColor}
            >
              <Box mr={1}>
                <StatusIcon color="gray.500" size="8px" />
              </Box>
              <Text fontSize="xs" color={statusConfig.textColor}>
                {statusConfig.text}
              </Text>
            </Flex>
            <Text fontSize="xs" color="gray.500">
              до {deadline}
            </Text>
          </Flex>
        </Box>
        <Button p={1} variant="ghost" rounded="md" _hover={{ bg: "gray.100" }}>
          <FaEllipsisV color="gray.400" />
        </Button>
      </Flex>

      <Box mb={4}>
        <Flex justify="space-between" fontSize="sm" mb={2}>
          <Text color="gray.600">Собрано</Text>
          <Text color="gray.900">
            ₽{collected.toLocaleString()} из ₽{target.toLocaleString()}
          </Text>
        </Flex>
        <Box w="full" bg="gray.200" rounded="full" h="2" overflow="hidden">
          <Box
            bg="gray.700"
            h="2"
            rounded="full"
            style={{ width: `${percentage}%` }}
          />
        </Box>
        <Flex justify="space-between" fontSize="xs" color="gray.500" mt={1}>
          <Text>{Math.round(percentage)}%</Text>
          <Text>₽{remaining.toLocaleString()} осталось</Text>
        </Flex>
      </Box>

      <Flex justify="space-between" align="center">
        <Flex align="center" gap={2}>
          <Flex>
            {avatars.map((avatar, index) => (
              <Image
                key={index}
                src={avatar}
                alt="User"
                boxSize="24px"
                rounded="full"
                border="2px solid white"
                ml={index > 0 ? "-8px" : "0"}
                zIndex={avatars.length - index}
              />
            ))}
            {additionalCount > 0 && (
              <Box
                boxSize="24px"
                bg="gray.200"
                rounded="full"
                border="2px solid white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                ml="-8px"
              >
                <Text fontSize="xs" color="gray.600">
                  +{additionalCount}
                </Text>
              </Box>
            )}
          </Flex>
          <Text fontSize="sm" color="gray.600">
            {participants} участников
          </Text>
        </Flex>
        <Button
          px={3}
          py={1}
          bg="gray.900"
          color="white"
          fontSize="sm"
          rounded="lg"
          _hover={{ bg: "gray.800" }}
        >
          Открыть
        </Button>
      </Flex>
    </Box>
  );
};

export const ActivePools = () => {
  const poolsData = [
    {
      title: "Подарок Анне на ДР",
      status: "active" as const,
      deadline: "25 янв",
      collected: 4200,
      target: 8000,
      percentage: 52.5,
      remaining: 3800,
      participants: 7,
      avatars: [
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=111",
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=222",
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=333",
      ],
      additionalCount: 4,
    },
    {
      title: "Поездка в Сочи",
      status: "waiting" as const,
      deadline: "2 фев",
      collected: 15600,
      target: 25000,
      percentage: 62.4,
      remaining: 9400,
      participants: 12,
      avatars: [
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=444",
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=555",
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=666",
      ],
      additionalCount: 9,
    },
    {
      title: "Корпоратив 2025",
      status: "urgent" as const,
      deadline: "28 янв",
      collected: 4780,
      target: 15000,
      percentage: 31.9,
      remaining: 10220,
      participants: 5,
      avatars: [
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=777",
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=888",
      ],
      additionalCount: 3,
    },
  ];

  return (
    <Box id="active-pools-all" px={4} py={2}>
      <Flex justify="space-between" align="center" mb={3}>
        <Text fontSize="base" color="gray.900" fontWeight="medium">
          Активные сборы
        </Text>
        <Text fontSize="sm" color="gray.500">
          3 сбора
        </Text>
      </Flex>

      <Stack gap={4}>
        {poolsData.map((pool, index) => (
          <PoolCard key={index} {...pool} />
        ))}
      </Stack>
    </Box>
  );
};