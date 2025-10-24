import { Box, Text, Flex } from "@chakra-ui/react";
import {
  FaCoins,
  FaUserPlus,
  FaHandshake,
  FaCalendarCheck,
} from "react-icons/fa";

interface BonusRewardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  reward: string;
  bgColor?: string;
  borderColor?: string;
}

const BonusReward = ({ icon, title, description, reward, bgColor = "linear-gradient(to right, gray.50, gray.100)", borderColor = "transparent" }: BonusRewardProps) => {
  return (
    <Flex justify="space-between" align="center" p={4} bg={bgColor} rounded="xl" borderWidth="1px" borderColor={borderColor}>
      <Flex align="center" gap={3}>
        <Box
          w={10}
          h={10}
          bg="gray.700"
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {icon}
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.900">
            {title}
          </Text>
          <Text fontSize="xs" color="gray.600">
            {description}
          </Text>
        </Box>
      </Flex>
      <Text fontSize="sm" color="gray.900">
        {reward}
      </Text>
    </Flex>
  );
};

export const BonusRewards = () => {
  return (
    <Box id="bonus-rewards" px={4} py={6}>
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
            Бонусы и награды
          </Text>
          <Flex align="center" gap={2}>
            <Box
              w={6}
              h={6}
              bg="gray.700"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FaCoins color="white" fontSize="xs" />
            </Box>
            <Text fontSize="sm" color="gray.900">
              ₽2,340
            </Text>
          </Flex>
        </Flex>

        <Box display="flex" flexDirection="column" gap={3} mb={4}>
          <BonusReward
            icon={<FaUserPlus color="white" fontSize="sm" />}
            title="За каждого друга"
            description="₽200 за регистрацию"
            reward="+₽200"
          />
          <BonusReward
            icon={<FaHandshake color="white" fontSize="sm" />}
            title="Первый сбор друга"
            description="Дополнительно 5% от суммы"
            reward="+5%"
            bgColor="white"
            borderColor="gray.200"
          />
          <BonusReward
            icon={<FaCalendarCheck color="white" fontSize="sm" />}
            title="Ежедневный вход"
            description="Серия: 12 дней"
            reward="+₽50"
            bgColor="white"
            borderColor="gray.200"
          />
        </Box>

        <Box bg="gray.50" rounded="xl" p={4}>
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="sm" color="gray.600">
              Прогресс до следующего уровня
            </Text>
            <Text fontSize="sm" color="gray.900">
              75%
            </Text>
          </Flex>
          <Box w="full" bg="gray.200" rounded="full" h={2} mb={2}>
            <Box bg="gray.700" h={2} rounded="full" w="75%" />
          </Box>
          <Text fontSize="xs" color="gray.600" textAlign="center">
            Осталось пригласить 2 друзей до уровня "Золото"
          </Text>
        </Box>
      </Box>
    </Box>
  );
};