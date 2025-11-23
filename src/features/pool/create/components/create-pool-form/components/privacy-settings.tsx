import { Box, Text, Flex, Tabs } from "@chakra-ui/react";
import { FaGlobe, FaLock, FaInfoCircle } from "react-icons/fa";

interface PrivacySettingsProps {
  isPrivate: boolean;
  setIsPrivate: (value: boolean) => void;
}

export const PrivacySettings = ({
  isPrivate,
  setIsPrivate,
}: PrivacySettingsProps) => {
  const handleTabChange = (value: string) => {
    setIsPrivate(value === "private");
  };

  return (
    <Box id="privacy-section" pb={6}>
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

          <Tabs.Root
            defaultValue={isPrivate ? "private" : "public"}
            onValueChange={({ value }) => handleTabChange(value)}
            variant="plain"
          >
            <Tabs.List bg="gray.50" borderRadius="xl" p={1} display="flex">
              <Tabs.Trigger
                value="public"
                flex={1}
                py={2}
                px={3}
                fontSize="sm"
                fontWeight="medium"
                borderRadius="lg"
                transition="all 0.2s"
                color={isPrivate ? "gray.400" : "white"}
                data-selected={!isPrivate}
              >
                <Flex align="center" justify="center" gap={2}>
                  <FaGlobe />
                  <span>Публичный</span>
                </Flex>
              </Tabs.Trigger>
              <Tabs.Trigger
                value="private"
                flex={1}
                py={2}
                px={3}
                fontSize="sm"
                fontWeight="medium"
                borderRadius="lg"
                transition="all 0.2s"
                color={isPrivate ? "white" : "gray.400"}
                data-selected={isPrivate}
              >
                <Flex align="center" justify="center" gap={2}>
                  <FaLock />
                  <span>Приватный</span>
                </Flex>
              </Tabs.Trigger>
              <Tabs.Indicator
                rounded="lg"
                bg="linear-gradient(135deg, #14B8A6 0%, #8B5CF6 100%)"
              />
            </Tabs.List>

            <Tabs.Content value="public">
              <Box
                mt={3}
                p={3}
                bg={isPrivate ? "gray.100" : "green.50"}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={isPrivate ? "gray.200" : "green.200"}
                opacity={isPrivate ? 0.6 : 1}
              >
                <Flex alignItems="flex-start" gap={2}>
                  <Box mt={0.5}>
                    <FaInfoCircle
                      color={isPrivate ? "#9CA3AF" : "#059669"}
                      fontSize="sm"
                    />
                  </Box>
                  <Box>
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      color={isPrivate ? "gray.500" : "green.900"}
                    >
                      Публичный сбор
                    </Text>
                    <Text
                      fontSize="xs"
                      color={isPrivate ? "gray.400" : "green.700"}
                      mt={1}
                    >
                      Будет виден всем пользователям в ленте. Можно продвигать
                      за монеты.
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Tabs.Content>

            <Tabs.Content value="private">
              <Box
                mt={3}
                p={3}
                bg={!isPrivate ? "gray.100" : "blue.50"}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={!isPrivate ? "gray.200" : "blue.200"}
                opacity={!isPrivate ? 0.6 : 1}
              >
                <Flex alignItems="flex-start" gap={2}>
                  <Box mt={0.5}>
                    <FaInfoCircle
                      color={!isPrivate ? "#9CA3AF" : "#2563EB"}
                      fontSize="sm"
                    />
                  </Box>
                  <Box>
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      color={!isPrivate ? "gray.500" : "blue.900"}
                    >
                      Приватный сбор
                    </Text>
                    <Text
                      fontSize="xs"
                      color={!isPrivate ? "gray.400" : "blue.700"}
                      mt={1}
                    >
                      Доступен только по ссылке или QR-коду. Не виден в общей
                      ленте.
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Tabs.Content>
          </Tabs.Root>
        </Box>
      </Box>
    </Box>
  );
};
