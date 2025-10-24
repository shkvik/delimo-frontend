import { Box, Text, Flex } from "@chakra-ui/react";
import { FaPlus, FaUserPlus, FaBell } from "react-icons/fa";

export interface ActivityItem {
  id: string;
  type: 'payment' | 'join' | 'reminder';
  description: string;
  timestamp: string;
}

export interface RecentActivityProps {
  activities: ActivityItem[];
}

export const RecentActivity = ({ activities }: RecentActivityProps) => {
  const getActivityIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'payment':
        return <FaPlus />;
      case 'join':
        return <FaUserPlus />;
      case 'reminder':
        return <FaBell />;
      default:
        return <FaPlus />;
    }
  };

  return (
    <Box id="recent-activity" px={4} py={4}>
      <Text fontSize="lg" color="gray.900" mb={4}>Последняя активность</Text>
      
      <Box>
        {activities.map((activity) => (
          <Flex
            key={activity.id}
            align="center"
            gap={3}
            p={3}
            bg="white"
            rounded="xl"
            borderWidth="1px"
            borderColor="gray.200"
            mb={3}
          >
            <Box
              w={8}
              h={8}
              bg="gray.100"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="gray.600"
            >
              {getActivityIcon(activity.type)}
            </Box>
            <Box flex={1}>
              <Text fontSize="sm" color="gray.900">{activity.description}</Text>
              <Text fontSize="xs" color="gray.500">{activity.timestamp}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};