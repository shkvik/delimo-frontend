import { Box, Text, Flex, Stack, Button } from "@chakra-ui/react";
import { FaLightbulb, FaShareAlt, FaClock } from "react-icons/fa";

interface TipCardProps {
  icon: React.ElementType;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
}

const TipCard = ({
  icon: Icon,
  borderColor,
  iconBgColor,
  iconColor,
  title,
  description,
}: TipCardProps) => {
  return (
    <Box
      bg="white"
      rounded="2xl"
      p={4}
      borderWidth="1px"
      borderColor={borderColor}
    >
      <Flex align="start" gap={3}>
        <Box
          w="40px"
          h="40px"
          bg={iconBgColor}
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          <Icon color={iconColor} />
        </Box>
        <Box>
          <Text color="#111827" mb={1} fontWeight="semibold">
            {title}
          </Text>
          <Text fontSize="sm" color="#4B5563">
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export const TipsRecommendations = () => {
  const tips = [
    {
      icon: FaLightbulb,
      borderColor: "#DBEAFE",
      iconBgColor: "#DBEAFE",
      iconColor: "#2563EB",
      title: "Установите реалистичную цель",
      description: "Сборы с достижимыми целями собирают на 40% больше средств",
    },
    {
      icon: FaShareAlt,
      borderColor: "#D1FAE5",
      iconBgColor: "#D1FAE5",
      iconColor: "#059669",
      title: "Делитесь в соцсетях",
      description:
        "Активное продвижение увеличивает количество участников в 3 раза",
    },
    {
      icon: FaClock,
      borderColor: "#FED7AA",
      iconBgColor: "#FED7AA",
      iconColor: "#EA580C",
      title: "Не затягивайте со сроками",
      description: "Оптимальный срок сбора — 2-4 недели",
    },
  ];

  return (
    <>
      <Box id="tips-recommendations" px={4} pb={6}>
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="lg" color="#111827" fontWeight="semibold">
            Советы и рекомендации
          </Text>
          <Button
            variant="ghost"
            fontSize="sm"
            fontWeight="medium"
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
          {tips.map((tip, index) => (
            <TipCard
              key={index}
              icon={tip.icon}
              borderColor={tip.borderColor}
              iconBgColor={tip.iconBgColor}
              iconColor={tip.iconColor}
              title={tip.title}
              description={tip.description}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};
