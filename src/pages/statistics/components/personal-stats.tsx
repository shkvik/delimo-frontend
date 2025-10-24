import { Box, Text, Grid, Flex } from "@chakra-ui/react";
import {
  FaMedal,
  FaFire,
  FaStar,
} from "react-icons/fa";

interface AchievementProps {
  icon: React.ReactElement;
  title: string;
  value: string;
}

const Achievement = ({ icon, title, value }: AchievementProps) => {
  return (
    <Flex 
      justify="space-between" 
      align="center" 
      p={3} 
      bg="gray.50" 
      rounded="xl"
    >
      <Flex align="center" gap={3}>
        {icon}
        <Text fontSize="sm" color="gray.900">
          {title}
        </Text>
      </Flex>
      <Text fontSize="xs" color="gray.500">
        {value}
      </Text>
    </Flex>
  );
};

export const PersonalStats = () => {
  return (
    <Box id="personal-stats" px={4} py={6}>
      <Box
        bg="white"
        rounded="2xl"
        p={6}
        shadow="sm"
        borderWidth="1px"
        borderColor="gray.200"
      >
        <Text fontSize="lg" color="gray.900" mb={4}>
          Ваша активность
        </Text>

        <Grid templateColumns="1fr 1fr 1fr" gap={4} mb={6}>
          <Box textAlign="center">
            <Text fontSize="xl" color="gray.900" mb={1}>
              ₽12,800
            </Text>
            <Text fontSize="xs" color="gray.600">
              Внесено
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="xl" color="gray.900" mb={1}>
              15
            </Text>
            <Text fontSize="xs" color="gray.600">
              Участий
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="xl" color="gray.900" mb={1}>
              3
            </Text>
            <Text fontSize="xs" color="gray.600">
              Созданных
            </Text>
          </Box>
        </Grid>

        <Box display="flex" flexDirection="column" gap={3}>
          <Achievement
            icon={<FaMedal color="gray.600" />}
            title="Топ-донатор месяца"
            value="#1"
          />
          <Achievement
            icon={<FaFire color="gray.600" />}
            title="Серия участий"
            value="8 дней"
          />
          <Achievement
            icon={<FaStar color="gray.600" />}
            title="Рейтинг надежности"
            value="98%"
          />
        </Box>
      </Box>
    </Box>
  );
};