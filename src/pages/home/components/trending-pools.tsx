import { Box, Text, Flex, Button, Grid } from "@chakra-ui/react";
import { FaFire } from "react-icons/fa";

interface PoolCardProps {
  category: string;
  categoryBgColor: string;
  categoryTextColor: string;
  title: string;
  collected: number;
  target: number;
  percentage: number;
  participants: number;
}

const PoolCard = ({
  category,
  categoryBgColor,
  categoryTextColor,
  title,
  collected,
  target,
  percentage,
  participants,
}: PoolCardProps) => {
  return (
    <Box
      bg="white"
      rounded="2xl"
      p={3}
      shadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
    >
      <Flex justify="space-between" align="center" mb={2}>
        <Box px={2} py={1} rounded="full" bg={categoryBgColor}>
          <Text fontSize="xs" color={categoryTextColor}>
            {category}
          </Text>
        </Box>
        <FaFire color="#F97316" size="14px" />
      </Flex>

      <Text fontSize="sm" color="#111827" fontWeight="semibold" mb={1}>
        {title}
      </Text>

      <Text fontSize="xs" color="#6B7280" mb={2}>
        ₽{collected.toLocaleString()} из ₽{target.toLocaleString()}
      </Text>

      <Box mb={2}>
        <Box w="full" bg="#E5E7EB" rounded="full" h="1.5" overflow="hidden">
          <Box
            h="1.5"
            rounded="full"
            bg="linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)"
            style={{ width: `${percentage}%` }}
          />
        </Box>
      </Box>

      <Flex justify="space-between" align="center">
        <Text fontSize="xs" color="#6B7280">
          {participants} участников
        </Text>
        <Button
          variant="ghost"
          fontSize="xs"
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

export const TrendingPools = () => {
  const poolsData = [
    {
      category: "Помощь",
      categoryBgColor: "#FEE2E2",
      categoryTextColor: "#B91C1C",
      title: "Лечение кота",
      collected: 45600,
      target: 60000,
      percentage: 76,
      participants: 156,
    },
    {
      category: "События",
      categoryBgColor: "#EDE9FE",
      categoryTextColor: "#6B21A8",
      title: "Концерт группы",
      collected: 23400,
      target: 35000,
      percentage: 67,
      participants: 89,
    },
    {
      category: "События",
      categoryBgColor: "#EDE9FE",
      categoryTextColor: "#6B21A8",
      title: "Концерт группы",
      collected: 23400,
      target: 35000,
      percentage: 67,
      participants: 89,
    },
    {
      category: "События",
      categoryBgColor: "#EDE9FE",
      categoryTextColor: "#6B21A8",
      title: "Концерт группы",
      collected: 23400,
      target: 35000,
      percentage: 67,
      participants: 89,
    },
  ];

  return (
    <Box id="trending-pools" px={4} pb={6}>
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" color="#111827" fontWeight="semibold">
          Тренды недели
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

      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        {poolsData.map((pool, index) => (
          <PoolCard key={index} {...pool} />
        ))}
      </Grid>
    </Box>
  );
};
