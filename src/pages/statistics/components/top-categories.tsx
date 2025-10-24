import { Box, Text, Flex } from "@chakra-ui/react";
import {
  FaGift,
  FaPlane,
  FaCalendarDay,
  FaHeart,
} from "react-icons/fa";

interface CategoryItemProps {
  icon: React.ReactElement;
  title: string;
  count: string;
  amount: string;
  percentage: number;
  bgColor: string;
}

const CategoryItem = ({ icon, title, count, amount, percentage, bgColor }: CategoryItemProps) => {
  return (
    <Flex justify="space-between" align="center">
      <Flex align="center" gap={3}>
        <Box
          w={10}
          h={10}
          bg={bgColor}
          rounded="xl"
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
            {count} сборов
          </Text>
        </Box>
      </Flex>
      <Box textAlign="right">
        <Text fontSize="sm" color="gray.900">
          {amount}
        </Text>
        <Box w={16} h={2} bg="gray.200" rounded="full" mt={1}>
          <Box
            w={`${percentage}%`}
            h={2}
            bg="gray.700"
            rounded="full"
          />
        </Box>
      </Box>
    </Flex>
  );
};

export const TopCategories = () => {
  return (
    <Box id="top-categories" px={4} py={6}>
      <Box
        bg="white"
        rounded="2xl"
        p={6}
        shadow="sm"
        borderWidth="1px"
        borderColor="gray.200"
      >
        <Text fontSize="lg" color="gray.900" mb={4}>
          Популярные категории
        </Text>

        <Box display="flex" flexDirection="column" gap={4}>
          <CategoryItem
            icon={<FaGift color="white" fontSize="sm" />}
            title="Подарки"
            count="8"
            amount="₽18,450"
            percentage={75}
            bgColor="gray.700"
          />
          <CategoryItem
            icon={<FaPlane color="white" fontSize="sm" />}
            title="Поездки"
            count="6"
            amount="₽15,200"
            percentage={62.5}
            bgColor="gray.600"
          />
          <CategoryItem
            icon={<FaCalendarDay color="white" fontSize="sm" />}
            title="События"
            count="5"
            amount="₽9,800"
            percentage={37.5}
            bgColor="gray.500"
          />
          <CategoryItem
            icon={<FaHeart color="white" fontSize="sm" />}
            title="Помощь"
            count="4"
            amount="₽3,900"
            percentage={25}
            bgColor="gray.400"
          />
        </Box>
      </Box>
    </Box>
  );
};