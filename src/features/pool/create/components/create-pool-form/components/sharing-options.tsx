import { Box, Text, Grid, Flex } from "@chakra-ui/react";
import {
  FaQrcode,
  FaLink,
  FaLightbulb,
} from "react-icons/fa";

export const SharingOptions = () => {
  return (
    <Box id="sharing-preview" px={4} py={4}>
      <Text fontSize="lg" color="gray.900" mb={4}>
        Способы приглашения участников
      </Text>

      <Grid templateColumns="1fr 1fr" gap={4}>
        <Box bg="white" rounded="2xl" p={4} borderWidth="1px" borderColor="gray.200" textAlign="center">
          <Box
            w={12}
            h={12}
            bg="gray.100"
            rounded="2xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={3}
          >
            <FaQrcode color="gray.600" fontSize="xl" />
          </Box>
          <Text fontSize="sm" color="gray.900" mb={1}>
            QR-код
          </Text>
          <Text fontSize="xs" color="gray.500">
            Для быстрого доступа
          </Text>
        </Box>

        <Box bg="white" rounded="2xl" p={4} borderWidth="1px" borderColor="gray.200" textAlign="center">
          <Box
            w={12}
            h={12}
            bg="gray.100"
            rounded="2xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={3}
          >
            <FaLink color="gray.600" fontSize="xl" />
          </Box>
          <Text fontSize="sm" color="gray.900" mb={1}>
            Ссылка
          </Text>
          <Text fontSize="xs" color="gray.500">
            Поделиться в соцсетях
          </Text>
        </Box>
      </Grid>

      <Box mt={4} bg="gray.50" rounded="2xl" p={4} borderWidth="1px" borderColor="gray.200">
        <Flex align="start" gap={3}>
          <Box as={FaLightbulb} color="gray.500" fontSize="sm" mt="0.5" />
          <Box>
            <Text fontSize="sm" color="gray.900" mb={1}>
              Совет
            </Text>
            <Text fontSize="xs" color="gray.600">
              После создания сбора вы сможете сгенерировать QR-код и получить ссылку для приглашения участников
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};