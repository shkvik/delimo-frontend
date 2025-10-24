import { Box, Text, Flex, Button, Stack } from "@chakra-ui/react";
import { FaPlus, FaUserPlus, FaBell } from "react-icons/fa";

interface ActivityItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  time: string;
}

const ActivityItem = ({ icon: Icon, title, description, time }: ActivityItemProps) => {
  return (
    <Flex align="center" gap={3} p={3} bg="white" rounded="xl" borderWidth="1px" borderColor="#E2E8F0">
      <Box w="40px" h="40px" bg="#F3F4F6" rounded="full" display="flex" alignItems="center" justifyContent="center">
        <Icon color="#4B5563" />
      </Box>
      <Box flex={1}>
        <Text fontSize="sm" color="#1A202C">
          {title}
        </Text>
        <Text fontSize="xs" color="#6B7280">
          {description} • {time}
        </Text>
      </Box>
    </Flex>
  );
};

export const RecentActivity = () => {
  const activities = [
    {
      icon: FaPlus,
      title: "Мария внесла ₽1,500",
      description: "в \"Подарок Анне на ДР\"",
      time: "2 часа назад"
    },
    {
      icon: FaUserPlus,
      title: "Новый участник в сборе",
      description: "\"Поездка в Сочи\"",
      time: "4 часа назад"
    },
    {
      icon: FaBell,
      title: "Напоминание отправлено",
      description: "\"Корпоратив 2025\"",
      time: "6 часов назад"
    }
  ];

  return (
    <Box id="recent-activity" px={4} py={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" color="#1A202C" fontWeight="medium">
          Последняя активность
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
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            icon={activity.icon}
            title={activity.title}
            description={activity.description}
            time={activity.time}
          />
        ))}
      </Stack>
    </Box>
  );
};