import { Box, Text, Flex, Button } from "@chakra-ui/react";
import {
  FaPlus,
  FaCheck,
  FaShare,
} from "react-icons/fa";

interface ActivityItemProps {
  icon: React.ReactElement;
  iconBg: string;
  title: string;
  description: string;
  time: string;
}

const ActivityItem = ({ icon, iconBg, title, description, time }: ActivityItemProps) => {
  return (
    <Flex align="center" gap={3}>
      <Box
        w={8}
        h={8}
        bg={iconBg}
        rounded="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {icon}
      </Box>
      <Box flex={1}>
        <Text fontSize="sm" color="gray.900">
          {title}
        </Text>
        <Text fontSize="xs" color="gray.600">
          {description}
        </Text>
      </Box>
      <Box textAlign="right">
        <Text fontSize="xs" color="gray.500">
          {time}
        </Text>
      </Box>
    </Flex>
  );
};

export const RecentActivity = () => {
  return (
    <Box id="recent-activity" px={4} py={6}>
      <Box
        bg="white"
        rounded="2xl"
        p={6}
        shadow="sm"
        borderWidth="1px"
        borderColor="gray.200"
      >
        <Text fontSize="lg" color="gray.900" mb={4}>
          Последняя активность
        </Text>

        <Box display="flex" flexDirection="column" gap={4}>
          <ActivityItem
            icon={<FaPlus color="white" fontSize="xs" />}
            iconBg="gray.700"
            title="Внесли ₽2,500 в Подарок Анне на ДР"
            description="24 января, 14:32"
            time="24 января, 14:32"
          />
          <ActivityItem
            icon={<FaCheck color="white" fontSize="xs" />}
            iconBg="gray.600"
            title="Сбор Корпоратив завершен успешно"
            description="23 января, 19:45"
            time="23 января, 19:45"
          />
          <ActivityItem
            icon={<FaShare color="white" fontSize="xs" />}
            iconBg="gray.500"
            title="Поделились сбором Поездка в Сочи"
            description="22 января, 16:20"
            time="22 января, 16:20"
          />
          <ActivityItem
            icon={<FaPlus color="white" fontSize="xs" />}
            iconBg="gray.300"
            title="Внесли ₽1,200 в Новогодний стол"
            description="18 января, 09:30"
            time="18 января, 09:30"
          />
        </Box>

        <Button
          w="full"
          mt={4}
          py={2}
          fontSize="sm"
          color="gray.600"
          borderWidth="1px"
          borderColor="gray.200"
          rounded="xl"
          _hover={{ bg: "gray.50", color: "gray.900" }}
        >
          Показать всю историю
        </Button>
      </Box>
    </Box>
  );
};