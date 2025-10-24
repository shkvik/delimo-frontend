import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import {
  FaWallet,
  FaUsers,
  FaList,
  FaTrophy,
} from "react-icons/fa";

interface StatCardProps {
  icon: React.ReactElement;
  value: string;
  label: string;
  trend?: string;
}

const StatCard = ({ icon, value, label, trend }: StatCardProps) => {
  return (
    <Box
      bg="white"
      rounded="2xl"
      p={4}
      shadow="sm"
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Flex justify="space-between" align="center" mb={2}>
        {icon}
        {trend && (
          <Text fontSize="xs" color="gray.500">
            {trend}
          </Text>
        )}
      </Flex>
      <Text fontSize="2xl" color="gray.900" mb={1} fontWeight="bold">
        {value}
      </Text>
      <Text fontSize="xs" color="gray.600">
        {label}
      </Text>
    </Box>
  );
};

export const StatsOverview = () => {
  return (
    <Box id="stats-overview" px={4} py={6}>
      <Grid templateColumns="1fr 1fr" gap={4}>
        <StatCard
          icon={<FaWallet color="#F6E05E" size={20} />}
          value="₽47,350"
          label="Всего собрано"
          trend="+12% за месяц"
        />
        <StatCard
          icon={<FaUsers color="#F6E05E" size={20} />}
          value="156"
          label="Участников"
          trend="+8 за неделю"
        />
        <StatCard
          icon={<FaList color="#F6E05E" size={20} />}
          value="23"
          label="Всего сборов"
          trend="3 активных"
        />
        <StatCard
          icon={<FaTrophy color="#F6E05E" size={20} />}
          value="21"
          label="Завершено"
          trend="91% успех"
        />
      </Grid>
    </Box>
  );
};