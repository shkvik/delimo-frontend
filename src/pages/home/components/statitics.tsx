import { Box, Text, Grid, Flex, Stack } from "@chakra-ui/react";
import { FaArrowUp, FaUsers, FaGift, FaPlane, FaCalendarAlt } from "react-icons/fa";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
}

const StatCard = ({ title, value, subtitle, icon: Icon }: StatCardProps) => {
  return (
    <Box bg="white" rounded="xl" p={4} borderWidth="1px" borderColor="#E2E8F0">
      <Flex justify="space-between" align="center" mb={2}>
        <Text fontSize="sm" color="#4B5563">
          {title}
        </Text>
        <Icon color="#4B5563" />
      </Flex>
      <Text fontSize="2xl" color="#1A202C" fontWeight="medium">
        {value}
      </Text>
      <Text fontSize="xs" color="#4B5563">
        {subtitle}
      </Text>
    </Box>
  );
};

interface CategoryItemProps {
  icon: React.ElementType;
  name: string;
  percentage: number;
}

const CategoryItem = ({ icon: Icon, name, percentage }: CategoryItemProps) => {
  return (
    <Flex justify="space-between" align="center">
      <Flex align="center" gap={2}>
        <Icon color="#4B5563" />
        <Text fontSize="sm" color="#1A202C">
          {name}
        </Text>
      </Flex>
      <Flex align="center" gap={2}>
        <Box w="80px" bg="#E5E7EB" rounded="full" h="2" overflow="hidden">
          <Box
            bg="#374151"
            h="2"
            rounded="full"
            style={{ width: `${percentage}%` }}
          />
        </Box>
        <Text fontSize="sm" color="#4B5563">
          {percentage}%
        </Text>
      </Flex>
    </Flex>
  );
};

export const Statistics = () => {
  const categories = [
    {
      icon: FaGift,
      name: "Подарки",
      percentage: 65
    },
    {
      icon: FaPlane,
      name: "Поездки",
      percentage: 25
    },
    {
      icon: FaCalendarAlt,
      name: "Мероприятия",
      percentage: 10
    }
  ];

  return (
    <Box id="statistics" px={4} py={4}>
      <Text fontSize="lg" color="#1A202C" fontWeight="medium" mb={4}>
        Статистика
      </Text>
      
      <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={4}>
        <StatCard
          title="За месяц"
          value="₽18,400"
          subtitle="+12% к прошлому"
          icon={FaArrowUp}
        />
        <StatCard
          title="Участники"
          value="24"
          subtitle="в активных сборах"
          icon={FaUsers}
        />
      </Grid>
      
      <Box bg="white" rounded="xl" p={4} borderWidth="1px" borderColor="#E2E8F0">
        <Text color="#1A202C" fontWeight="medium" mb={3}>
          Популярные категории
        </Text>
        <Stack gap={2}>
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              icon={category.icon}
              name={category.name}
              percentage={category.percentage}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};