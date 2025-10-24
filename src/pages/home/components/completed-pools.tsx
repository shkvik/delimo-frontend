import { Box, Text, Flex, Button, Stack } from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";

interface CompletedPoolCardProps {
  title: string;
  status: "completed" | "failed";
  date: string;
  collected: number;
  target: number;
  percentage: number;
}

const CompletedPoolCard = ({ 
  title, 
  status, 
  date, 
  collected, 
  target, 
  percentage 
}: CompletedPoolCardProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "completed":
        return {
          icon: FaCheck,
          text: "Завершен",
          bgColor: "#F3F4F6",
          textColor: "#374151"
        };
      case "failed":
        return {
          icon: FaTimes,
          text: "Не удался",
          bgColor: "#F3F4F6",
          textColor: "#374151"
        };
      default:
        return {
          icon: FaCheck,
          text: "Завершен",
          bgColor: "#F3F4F6",
          textColor: "#374151"
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
      borderColor="#E2E8F0" 
      opacity={0.75}
    >
      <Flex justify="space-between" align="start" mb={2}>
        <Box flex={1}>
          <Text color="#1A202C" mb={1} fontWeight="medium">
            {title}
          </Text>
          <Flex
            align="center"
            px={2}
            py={1}
            rounded="full"
            bg={statusConfig.bgColor}
            display="inline-flex"
          >
            <Box mr={1}>
              <StatusIcon color="#6B7280" size="8px" />
            </Box>
            <Text fontSize="xs" color={statusConfig.textColor}>
              {statusConfig.text}
            </Text>
          </Flex>
        </Box>
        <Text fontSize="xs" color="#6B7280">
          {date}
        </Text>
      </Flex>
      <Flex justify="space-between" fontSize="sm">
        <Text color="#4B5563">
          Собрано ₽{collected.toLocaleString()} из ₽{target.toLocaleString()}
        </Text>
        <Text color="#4B5563">
          {percentage}%
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
      percentage: 100
    },
    {
      title: "День рождения Максима",
      status: "completed" as const,
      date: "8 янв 2025",
      collected: 5500,
      target: 5000,
      percentage: 110
    },
    {
      title: "Корпоратив декабрь",
      status: "failed" as const,
      date: "31 дек 2024",
      collected: 3200,
      target: 8000,
      percentage: 40
    }
  ];

  return (
    <Box id="completed-pools" px={4} py={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" color="#1A202C" fontWeight="medium">
          Завершенные сборы
        </Text>
        <Button
          variant="ghost"
          fontSize="sm"
          color="#4B5563"
          _hover={{ color: "#1A202C" }}
          p={0}
          h="auto"
        >
          Все
        </Button>
      </Flex>
      
      <Stack gap={3}>
        {completedPoolsData.map((pool, index) => (
          <CompletedPoolCard key={index} {...pool} />
        ))}
      </Stack>
    </Box>
  );
};