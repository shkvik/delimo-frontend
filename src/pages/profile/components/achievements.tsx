import { Box, Text, Grid, Button, Flex } from "@chakra-ui/react";
import {
  FaTrophy,
  FaUsers,
  FaHeart,
  FaClock,
  FaMedal,
  FaLock,
} from "react-icons/fa";

interface AchievementProps {
  icon: React.ReactElement;
  title: string;
  bgColor: string;
  iconBg: string;
  isLocked?: boolean;
}

const Achievement = ({ icon, title, bgColor, iconBg, isLocked = false }: AchievementProps) => {
  return (
    <Box
      textAlign="center"
      p={3}
      bg={bgColor}
      rounded="xl"
      opacity={isLocked ? 0.5 : 1}
    >
      <Box
        w={10}
        h={10}
        bg={iconBg}
        rounded="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="auto"
        mb={2}
      >
        {icon}
      </Box>
      <Text fontSize="xs" color="gray.900">
        {title}
      </Text>
    </Box>
  );
};

export const Achievements = () => {
  return (
    <Box id="achievements" px={4} py={6}>
      <Box
        bg="white"
        rounded="2xl"
        p={6}
        shadow="sm"
        borderWidth="1px"
        borderColor="gray.200"
      >
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="lg" color="gray.900">
            Достижения
          </Text>
          <Text fontSize="sm" color="gray.600">
            12 из 20
          </Text>
        </Flex>

        <Grid templateColumns="1fr 1fr 1fr" gap={3} mb={4}>
          <Achievement
            icon={<FaTrophy color="white" fontSize="sm" />}
            title="Первый сбор"
            bgColor="linear-gradient(to bottom right, gray.50, gray.100)"
            iconBg="gray.700"
          />
          <Achievement
            icon={<FaUsers color="white" fontSize="sm" />}
            title="Командный"
            bgColor="linear-gradient(to bottom right, gray.50, gray.100)"
            iconBg="gray.700"
          />
          <Achievement
            icon={<FaHeart color="white" fontSize="sm" />}
            title="Щедрый"
            bgColor="linear-gradient(to bottom right, gray.50, gray.100)"
            iconBg="gray.700"
          />
          <Achievement
            icon={<FaClock color="white" fontSize="sm" />}
            title="Быстрый"
            bgColor="linear-gradient(to bottom right, gray.50, gray.100)"
            iconBg="gray.700"
          />
          <Achievement
            icon={<FaMedal color="white" fontSize="sm" />}
            title="VIP"
            bgColor="linear-gradient(to bottom right, gray.50, gray.100)"
            iconBg="gray.700"
          />
          <Achievement
            icon={<FaLock color="gray.500" fontSize="sm" />}
            title="Заблокировано"
            bgColor="gray.100"
            iconBg="gray.300"
            isLocked={true}
          />
        </Grid>

        <Button
          w="full"
          py={2}
          fontSize="sm"
          color="gray.600"
          _hover={{ color: "gray.900" }}
        >
          Посмотреть все достижения
        </Button>
      </Box>
    </Box>
  );
};