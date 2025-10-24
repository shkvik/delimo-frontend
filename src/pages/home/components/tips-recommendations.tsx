import { Box, Text, Flex, Stack } from "@chakra-ui/react";
import { FaLightbulb, FaShareAlt, FaClock } from "react-icons/fa";

interface TipCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const TipCard = ({ icon: Icon, title, description }: TipCardProps) => {
  return (
    <Box
      bgGradient="linear(to-r, #F9FAFB, #F3F4F6)"
      rounded="xl"
      p={4}
      borderWidth="1px"
      borderColor="#E2E8F0"
    >
      <Flex align="start" gap={3}>
        <Box 
          w="32px" 
          h="32px" 
          bg="#F3F4F6" 
          rounded="full" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          flexShrink={0}
        >
          <Icon color="#4B5563" fontSize="sm" />
        </Box>
        <Box>
          <Text color="#1A202C" mb={1} fontWeight="medium">
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
      title: "Увеличьте сбор на 15%",
      description: "Добавьте описание и фото к сбору \"Корпоратив 2025\". Сборы с описанием собирают на 15% больше средств."
    },
    {
      icon: FaShareAlt,
      title: "Поделитесь в соцсетях",
      description: "Поделитесь активными сборами в соцсетях, чтобы привлечь больше участников."
    },
    {
      icon: FaClock,
      title: "Отправьте напоминание",
      description: "До конца сбора \"Корпоратив 2025\" осталось 4 дня. Отправьте напоминание участникам."
    }
  ];

  return (
    <Box id="tips-recommendations" px={4} py={4}>
      <Text fontSize="lg" color="#1A202C" fontWeight="medium" mb={4}>
        Советы и рекомендации
      </Text>
      
      <Stack gap={3}>
        {tips.map((tip, index) => (
          <TipCard
            key={index}
            icon={tip.icon}
            title={tip.title}
            description={tip.description}
          />
        ))}
      </Stack>
    </Box>
  );
};