import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { FaGlobe, FaLock, FaInfoCircle } from "react-icons/fa";

interface PrivacySettingsProps {
  isPrivate: boolean;
  setIsPrivate: (value: boolean) => void;
}

export const PrivacySettings = ({
  isPrivate,
  setIsPrivate,
}: PrivacySettingsProps) => {
  return (
    <Box id="privacy-section">
      <Box
        bg="white"
        borderRadius="2xl"
        p={4}
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      >
        <Box mb={4}>
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="gray.900"
            mb={3}
            display="block"
          >
            Приватность сбора
          </Text>
          <Box bg="gray.50" borderRadius="xl" p={1} display="flex">
            <Button
              flex={1}
              py={2}
              px={3}
              fontSize="sm"
              fontWeight="medium"
              borderRadius="lg"
              transition="all 0.2s"
              bg={isPrivate ? "gray.900" : "transparent"}
              color={isPrivate ? "white" : "gray.600"}
              _hover={isPrivate ? { bg: "gray.800" } : { bg: "gray.100" }}
              onClick={() => setIsPrivate(true)}
            >
              <Flex align="center" justify="center" gap={2}>
                <FaLock />
                <span>Приватный</span>
              </Flex>
            </Button>
            <Button
              flex={1}
              py={2}
              px={3}
              fontSize="sm"
              fontWeight="medium"
              borderRadius="lg"
              transition="all 0.2s"
              bg={!isPrivate ? "gray.900" : "transparent"}
              color={!isPrivate ? "white" : "gray.600"}
              _hover={!isPrivate ? { bg: "gray.800" } : { bg: "gray.100" }}
              onClick={() => setIsPrivate(false)}
            >
              <Flex align="center" justify="center" gap={2}>
                <FaGlobe />
                <span>Публичный</span>
              </Flex>
            </Button>
          </Box>
          <Box
            mt={3}
            p={3}
            bg={!isPrivate ? "blue.50" : "gray.50"}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={!isPrivate ? "blue.200" : "gray.200"}
          >
            <Flex alignItems="flex-start" gap={2}>
              <Box mt={0.5}>
                <FaInfoCircle
                  color={!isPrivate ? "#2563EB" : "#6B7280"}
                  fontSize="sm"
                />
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  color={!isPrivate ? "blue.900" : "gray.900"}
                >
                  {!isPrivate ? "Публичный сбор" : "Приватный сбор"}
                </Text>
                <Text
                  fontSize="xs"
                  color={!isPrivate ? "blue.700" : "gray.600"}
                  mt={1}
                >
                  {!isPrivate
                    ? "Будет виден всем пользователям в ленте. Можно продвигать за монеты."
                    : "Доступен только по ссылке или QR-коду. Не виден в общей ленте."}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
