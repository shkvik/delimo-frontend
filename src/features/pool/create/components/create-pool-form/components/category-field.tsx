import React, { useState } from 'react';
import { Box, Text, Button, VStack, HStack, Circle } from "@chakra-ui/react";
import {
  FaGift,
  FaPlane,
  FaCalendarAlt,
  FaHandsHelping,
  FaGraduationCap,
  FaEllipsisH,
} from "react-icons/fa";

interface CategoryFieldProps {
  category: string;
  setCategory: (value: string) => void;
}

const categoryOptions = [
  { value: 'gifts', label: 'Подарки', icon: FaGift, bgColor: 'pink.100', iconColor: 'pink.600' },
  { value: 'travel', label: 'Поездки', icon: FaPlane, bgColor: 'blue.100', iconColor: 'blue.600' },
  { value: 'events', label: 'События', icon: FaCalendarAlt, bgColor: 'purple.100', iconColor: 'purple.600' },
  { value: 'help', label: 'Помощь', icon: FaHandsHelping, bgColor: 'green.100', iconColor: 'green.600' },
  { value: 'education', label: 'Учёба', icon: FaGraduationCap, bgColor: 'yellow.100', iconColor: 'yellow.600' },
  { value: 'other', label: 'Другое', icon: FaEllipsisH, bgColor: 'gray.100', iconColor: 'gray.600' }
];

export const CategoryField = ({ category, setCategory }: CategoryFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCategory = categoryOptions.find(opt => opt.value === category);
  const displayText = selectedCategory ? selectedCategory.label : 'Выберите категорию';

  return (
    <Box 
      bg="white" 
      borderRadius="2xl" 
      p={4}
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      mb={6}
      position="relative"
    >
      <Box mb={4}>
        <Text fontSize="sm" fontWeight="semibold" color="gray.900" mb={3} display="block">
          Категория
          <Text as="span" color="red.500"> *</Text>
        </Text>
        
        <Button
          w="full"
          px={4}
          py={3}
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="xl"
          bg="white"
          textAlign="left"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          transition="all 0.2s"
          onClick={() => setIsOpen(!isOpen)}
          _hover={{ borderColor: "gray.300" }}
          _active={{ borderColor: "gray.400" }}
        >
          <Text color={category ? "black" : "gray.500"}>
            {displayText}
          </Text>
          <Text color="gray.400">▼</Text>
        </Button>
        
        {isOpen && (
          <Box
            position="absolute"
            top="100%"
            left={0}
            right={0}
            mt={2}
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="xl"
            boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            p={2}
            zIndex={10}
          >
            <Box display="flex" flexDirection="column" gap={0}>
              {categoryOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <Button
                    key={option.value}
                    onClick={() => {
                      setCategory(option.value);
                      setIsOpen(false);
                    }}
                    borderRadius="lg"
                    py={3}
                    px={4}
                    bg="transparent"
                    _hover={{ bg: "gray.50" }}
                    justifyContent="flex-start"
                  >
                    <Box display="flex" alignItems="center" gap={3}>
                      <Circle size={8} bg={option.bgColor}>
                        <Icon color={option.iconColor} fontSize="sm" />
                      </Circle>
                      <Text color="gray.900">{option.label}</Text>
                    </Box>
                  </Button>
                );
              })}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
