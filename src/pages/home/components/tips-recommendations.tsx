import { Box, Text, Flex, Stack, Button } from "@chakra-ui/react";
import { FaLightbulb, FaShareAlt, FaClock, FaTrophy } from "react-icons/fa";

interface TipCardProps {
  icon: React.ElementType;
  bgGradient: string;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
}

const TipCard = ({
  icon: Icon,
  bgGradient,
  borderColor,
  iconBgColor,
  iconColor,
  title,
  description
}: TipCardProps) => {
  return (
    <Box
      bgGradient={bgGradient}
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
      bgGradient: "linear(to-r, #EFF6FF, #F5F3FF)",
      borderColor: "#DBEAFE",
      iconBgColor: "#DBEAFE",
      iconColor: "#2563EB",
      title: "Установите реалистичную цель",
      description: "Сборы с достижимыми целями собирают на 40% больше средств"
    },
    {
      icon: FaShareAlt,
      bgGradient: "linear(to-r, #F0FDF4, #F0FDFA)",
      borderColor: "#D1FAE5",
      iconBgColor: "#D1FAE5",
      iconColor: "#059669",
      title: "Делитесь в соцсетях",
      description: "Активное продвижение увеличивает количество участников в 3 раза"
    },
    {
      icon: FaClock,
      bgGradient: "linear(to-r, #FFF7ED, #FEF2F2)",
      borderColor: "#FED7AA",
      iconBgColor: "#FED7AA",
      iconColor: "#EA580C",
      title: "Не затягивайте со сроками",
      description: "Оптимальный срок сбора — 2-4 недели"
    }
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
          {tips.map((tip, index) => (
            <TipCard
              key={index}
              icon={tip.icon}
              bgGradient={tip.bgGradient}
              borderColor={tip.borderColor}
              iconBgColor={tip.iconBgColor}
              iconColor={tip.iconColor}
              title={tip.title}
              description={tip.description}
            />
          ))}
        </Stack>
      </Box>

      {/* Achievement Banner */}
      <Box id="achievement-banner" px={4} pb={6}>
        <Box
          bgGradient="linear(90deg, #8B5CF6 0%, #3B82F6 100%)"
          rounded="2xl"
          p={4}
          color="white"
        >
          <Flex align="center" gap={3}>
            <Box
              w="48px"
              h="48px"
              bg="rgba(255, 255, 255, 0.2)"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FaTrophy color="white" />
            </Box>
            <Box flex={1}>
              <Text fontWeight="semibold" mb={1}>
                Поздравляем!
              </Text>
              <Text fontSize="sm" opacity={0.9}>
                Вы успешно собрали средства для 3 сборов в этом месяце
              </Text>
            </Box>
            <Button
              bg="rgba(255, 255, 255, 0.2)"
              px={3}
              py={1}
              rounded="full"
              fontSize="sm"
              fontWeight="medium"
              color="white"
              _hover={{ bg: "rgba(255, 255, 255, 0.3)" }}
            >
              Подробнее
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};