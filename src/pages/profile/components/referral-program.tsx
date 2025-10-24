import { Box, Text, Flex, Button, Grid } from "@chakra-ui/react";
import {
  FaGift,
  FaStar,
  FaCopy,
  FaShare,
  FaQrcode,
} from "react-icons/fa";
import { useState } from "react";

export const ReferralProgram = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box id="referral-program" px={4} py={6}>
      <Box
        bg="linear-gradient(to right, gray.50, gray.100)"
        rounded="2xl"
        p={6}
        shadow="sm"
        borderWidth="1px"
        borderColor="gray.200"
      >
        <Flex justify="space-between" align="center" mb={4}>
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
              <FaGift color="white" />
            </Box>
            <Box>
              <Text fontSize="lg" color="gray.900">
                Пригласи друзей
              </Text>
              <Text fontSize="sm" color="gray.600">
                Получай бонусы за каждого
              </Text>
            </Box>
          </Flex>
          <Box
            w={6}
            h={6}
            bg="gray.700"
            rounded="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaStar color="white" fontSize="xs" />
          </Box>
        </Flex>

        <Grid templateColumns="1fr 1fr" gap={4} mb={2}>
          <Box bg="white" rounded="xl" p={4} textAlign="center">
            <Text fontSize="2xl" color="gray.900" mb={1}>
              8
            </Text>
            <Text fontSize="xs" color="gray.600">
              Приглашено
            </Text>
          </Box>
          <Box bg="white" rounded="xl" p={4} textAlign="center">
            <Text fontSize="2xl" color="gray.900" mb={1}>
              ₽1,600
            </Text>
            <Text fontSize="xs" color="gray.600">
              Заработано
            </Text>
          </Box>
        </Grid>

        <Box bg="white" rounded="xl"  mb={4}>
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="sm" color="gray.600">
              Ваш код
            </Text>
            <Flex align="center">

            </Flex>
          </Flex>
          <Box
            bg="gray.100"
            rounded="lg"
            p={3}
            textAlign="center"
          >
            <Text fontSize="lg" color="gray.900" letterSpacing="wider">
              ALEX2025
            </Text>
          </Box>
        </Box>


        <Flex gap={3}>
          <Button
            flex={1}
            bg="gray.900"
            color="white"
            py={3}
            rounded="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <FaShare />
            <Text fontSize="sm">Поделиться</Text>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};