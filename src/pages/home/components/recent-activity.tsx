import { Box, Text, Flex, Button, Stack } from "@chakra-ui/react";
import { FaPlus, FaMoneyBillWave, FaStar, FaShare, FaClock } from "react-icons/fa";

interface ActivityItemProps {
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
  title: string;
  description: string;
  time: string;
  value: string;
  valueColor: string;
}

const ActivityItem = ({
  icon: Icon,
  bgColor,
  iconColor,
  title,
  description,
  time,
  value,
  valueColor
}: ActivityItemProps) => {
  return (
    <Flex align="center" gap={3}>
      <Box w="40px" h="40px" bg={bgColor} rounded="full" display="flex" alignItems="center" justifyContent="center">
        <Icon color={iconColor} size="14px" />
      </Box>
      <Box flex={1}>
        <Text fontSize="sm" color="#111827" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="xs" color="#6B7280">
          {description} • {time}
        </Text>
      </Box>
      <Text fontSize="sm" color={valueColor} fontWeight="semibold">
        {value}
      </Text>
    </Flex>
  );
};

export const RecentActivity = () => {
  const activities = [
    {
      icon: FaPlus,
      bgColor: "#D1FAE5",
      iconColor: "#059669",
      title: "Новый участник присоединился",
      description: "Подарок для Анны",
      time: "2 мин назад",
      value: "+₽1,500",
      valueColor: "#059669"
    },
    {
      icon: FaMoneyBillWave,
      bgColor: "#DBEAFE",
      iconColor: "#2563EB",
      title: "Платёж получен",
      description: "Поездка в Сочи",
      time: "15 мин назад",
      value: "+₽3,200",
      valueColor: "#2563EB"
    },
    {
      icon: FaStar,
      bgColor: "#EDE9FE",
      iconColor: "#7C3AED",
      title: "Сбор достиг цели",
      description: "Корпоратив компании",
      time: "1 час назад",
      value: "₽30,000",
      valueColor: "#7C3AED"
    },
    {
      icon: FaShare,
      bgColor: "#FED7AA",
      iconColor: "#EA580C",
      title: "Сбор был поделён",
      description: "Подарок для Анны",
      time: "2 часа назад",
      value: "5 раз",
      valueColor: "#6B7280"
    },
    {
      icon: FaClock,
      bgColor: "#FEE2E2",
      iconColor: "#DC2626",
      title: "Напоминание о дедлайне",
      description: "Помощь студентам",
      time: "3 часа назад",
      value: "2 дня",
      valueColor: "#DC2626"
    }
  ];

  return (
    <Box id="recent-activity" px={4} pb={6}>
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" color="#111827" fontWeight="semibold">
          Последняя активность
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
          История
        </Button>
      </Flex>
      
      <Box bg="white" rounded="2xl" p={4} shadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)">
        <Stack gap={4}>
          {activities.map((activity, index) => (
            <ActivityItem
              key={index}
              icon={activity.icon}
              bgColor={activity.bgColor}
              iconColor={activity.iconColor}
              title={activity.title}
              description={activity.description}
              time={activity.time}
              value={activity.value}
              valueColor={activity.valueColor}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};