import { Box, Text, Flex, Button, Stack, Image } from "@chakra-ui/react";
import { FaUsers, FaHeart } from "react-icons/fa";

interface PoolCardProps {
  title: string;
  organizer: string;
  avatar: string;
  collected: number;
  target: number;
  percentage: number;
  participants: number;
  likes: number;
}

const PoolCard = ({
  title,
  organizer,
  avatar,
  collected,
  target,
  percentage,
  participants,
  likes,
}: PoolCardProps) => {
  return (
    <Box
      bg="white"
      rounded="2xl"
      p={4}
      shadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
    >
      <Flex align="center" gap={3} mb={3}>
        <Image
          src={avatar}
          alt="Организатор"
          boxSize="48px"
          rounded="full"
          objectFit="cover"
        />
        <Box flex={1}>
          <Text color="#111827" fontWeight="semibold">
            {title}
          </Text>
          <Text fontSize="xs" color="#6B7280">
            {organizer}
          </Text>
        </Box>
        <Box textAlign="right">
          <Text fontSize="sm" color="#111827" fontWeight="bold">
            ₽{collected.toLocaleString()}
          </Text>
          <Text fontSize="xs" color="#6B7280">
            из ₽{target.toLocaleString()}
          </Text>
        </Box>
      </Flex>

      <Box mb={3}>
        <Box w="full" bg="#E5E7EB" rounded="full" h="2" overflow="hidden">
          <Box
            h="2"
            rounded="full"
            bg="linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)"
            style={{ width: `${percentage}%` }}
          />
        </Box>
      </Box>

      <Flex justify="space-between" align="center">
        <Flex align="center" gap={4}>
          <Flex align="center" gap={1}>
            <FaUsers color="#9CA3AF" size="12px" />
            <Text fontSize="xs" color="#6B7280">
              {participants} участника
            </Text>
          </Flex>
          <Flex align="center" gap={1}>
            <FaHeart color="#F87171" size="12px" />
            <Text fontSize="xs" color="#6B7280">
              {likes}
            </Text>
          </Flex>
        </Flex>
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
          Участвовать
        </Button>
      </Flex>
    </Box>
  );
};

export const TopPools = () => {
  const poolsData = [
    {
      title: "Помощь детскому дому",
      organizer: "Максим Петров",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      collected: 185400,
      target: 200000,
      percentage: 93,
      participants: 342,
      likes: 128,
    },
    {
      title: "Восстановление парка",
      organizer: "Елена Смирнова",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      collected: 95600,
      target: 150000,
      percentage: 64,
      participants: 189,
      likes: 76,
    },
    {
      title: "Обучение программированию",
      organizer: "Дмитрий Козлов",
      avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
      collected: 67200,
      target: 100000,
      percentage: 67,
      participants: 94,
      likes: 52,
    },
  ];

  return (
    <Box id="top-public-pools" px={4} pb={6}>
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" color="#111827" fontWeight="semibold">
          Топ публичных сборов
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
          Все
        </Button>
      </Flex>

      <Stack gap={3}>
        {poolsData.map((pool, index) => (
          <PoolCard key={index} {...pool} />
        ))}
      </Stack>
    </Box>
  );
};
