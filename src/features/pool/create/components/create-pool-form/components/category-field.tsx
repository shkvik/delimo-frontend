import { Box, Text, Grid } from "@chakra-ui/react";
import {
  FaGift,
  FaPlane,
  FaCalendarDay,
  FaHeart,
  FaGraduationCap,
  FaEllipsisH,
} from "react-icons/fa";

interface CategoryButtonProps {
  icon: React.ReactElement;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryButton = ({
  icon,
  title,
  isActive,
  onClick,
}: CategoryButtonProps) => (
  <Box
    as="button"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    }}
    display="flex"
    flexDirection="column"
    alignItems="center"
    p={3}
    bg="white"
    borderWidth="1px"
    borderColor={isActive ? "gray.700" : "gray.300"}
    rounded="2xl"
    _hover={{ borderColor: "gray.500" }}
    _focus={{ borderColor: "gray.700", bg: "gray.50" }}
  >
    {icon}
    <Text fontSize="xs" color="gray.700" mt={1}>
      {title}
    </Text>
  </Box>
);

interface CategoryFieldProps {
  category: string;
  setCategory: (value: string) => void;
}

export const CategoryField = ({
  category,
  setCategory,
}: CategoryFieldProps) => (
  <Box display="flex" flexDirection="column" gap={3}>
    <Text fontSize="sm" color="gray.900">
      Категория
    </Text>
    <Grid templateColumns="repeat(3, 1fr)" gap={3}>
      <CategoryButton
        icon={<FaGift color="black" fontSize="2xl" />}
        title="Подарки"
        isActive={category === "gifts"}
        onClick={() => setCategory("gifts")}
      />
      <CategoryButton
        icon={<FaPlane color="black" fontSize="2xl" />}
        title="Поездки"
        isActive={category === "trips"}
        onClick={() => setCategory("trips")}
      />
      <CategoryButton
        icon={<FaCalendarDay color="black" fontSize="2xl" />}
        title="События"
        isActive={category === "events"}
        onClick={() => setCategory("events")}
      />
      <CategoryButton
        icon={<FaHeart color="black" fontSize="2xl" />}
        title="Помощь"
        isActive={category === "help"}
        onClick={() => setCategory("help")}
      />
      <CategoryButton
        icon={<FaGraduationCap color="black" fontSize="2xl" />}
        title="Учёба"
        isActive={category === "education"}
        onClick={() => setCategory("education")}
      />
      <CategoryButton
        icon={<FaEllipsisH color="black" fontSize="2xl" />}
        title="Другое"
        isActive={category === "other"}
        onClick={() => setCategory("other")}
      />
    </Grid>
  </Box>
);
