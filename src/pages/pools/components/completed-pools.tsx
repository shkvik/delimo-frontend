import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import {
  FaEllipsisV,
  FaCheck,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

interface CompletedPoolCardProps {
  title: string;
  status: "completed" | "failed";
  date: string;
  collected: number;
  target: number;
  percentage: number;
  participants: number;
  avatars: string[];
  additionalCount: number;
}

const CompletedPoolCard = ({
  title,
  status,
  date,
  collected,
  target,
  percentage,
  participants,
  avatars,
  additionalCount,
}: CompletedPoolCardProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "completed":
        return {
          icon: FaCheck,
          text: "Завершен",
          bgColor: "gray.100",
          textColor: "gray.800",
          opacity: 0.9,
        };
      case "failed":
        return {
          icon: FaTimes,
          text: "Не удался",
          bgColor: "gray.100",
          textColor: "gray.800",
          opacity: 0.75,
        };
      default:
        return {
          icon: FaCheck,
          text: "Завершен",
          bgColor: "gray.100",
          textColor: "gray.800",
          opacity: 0.9,
        };
    }
  };

  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;

  return (
    <Box
      bg="white"
      rounded="xl"
      p={4}
      borderWidth="1px"
      borderColor="gray.200"
      opacity={statusConfig.opacity}
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
              {date}
            </Text>
          </Flex>
        </Box>
        <Button p={1} variant="ghost" rounded="md" _hover={{ bg: "gray.100" }}>
          <FaEllipsisV color="gray.400" />
        </Button>
      </Flex>

      <Flex justify="space-between" fontSize="sm" color="gray.600" mb={2}>
        <Text>
          Собрано ₽{collected.toLocaleString()} из ₽{target.toLocaleString()}
        </Text>
        <Text>{percentage}%</Text>
      </Flex>

      <Flex align="center" gap={2}>
        <Flex>
          {avatars.map((avatar, index) => (
            <Image
              key={index}
              src={avatar}
              alt="User"
              boxSize="20px"
              rounded="full"
              border="2px solid white"
              ml={index > 0 ? "-8px" : "0"}
              zIndex={avatars.length - index}
            />
          ))}
          {additionalCount > 0 && (
            <Box
              boxSize="20px"
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
        <Text fontSize="xs" color="gray.600">
          {participants} {participants === 1 ? "участник" : participants < 5 ? "участника" : "участников"}
        </Text>
      </Flex>
    </Box>
  );
};

export const CompletedPools = () => {
  const completedPoolsData = [
    {
      title: "Новогодние подарки",
      status: "completed" as const,
      date: "15 янв 2025",
      collected: 12000,
      target: 12000,
      percentage: 100,
      participants: 8,
      avatars: [
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=991",
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=992",
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=993",
      ],
      additionalCount: 5,
    },
    {
      title: "День рождения Максима",
      status: "completed" as const,
      date: "8 янв 2025",
      collected: 5500,
      target: 5000,
      percentage: 110,
      participants: 6,
      avatars: [
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=881",
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=882",
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=883",
      ],
      additionalCount: 0,
    },
    {
      title: "Корпоратив декабрь",
      status: "failed" as const,
      date: "31 дек 2024",
      collected: 3200,
      target: 8000,
      percentage: 40,
      participants: 4,
      avatars: [
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=661",
        "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=662",
      ],
      additionalCount: 0,
    },
  ];

  return (
    <Box id="completed-pools-all" px={4} py={4}>
      <Flex justify="space-between" align="center" mb={3}>
        <Text fontSize="base" color="gray.900" fontWeight="medium">
          Завершенные сборы
        </Text>
        <Text fontSize="sm" color="gray.500">
          12 сборов
        </Text>
      </Flex>

      <Box gap={3} display="flex" flexDirection="column">
        {completedPoolsData.map((pool, index) => (
          <CompletedPoolCard key={index} {...pool} />
        ))}

        <Button
          w="full"
          bg="gray.50"
          borderWidth="1px"
          borderColor="gray.200"
          rounded="xl"
          p={4}
          color="gray.600"
          _hover={{ bg: "gray.100" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <FaChevronDown />
          <Text fontSize="sm">Показать еще 4 завершенных сборов</Text>
        </Button>
      </Box>
    </Box>
  );
};