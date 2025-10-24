import { Box, Text, Flex, Button, Stack } from "@chakra-ui/react";
import { 
  FaBell, 
  FaShieldAlt, 
  FaQuestionCircle, 
  FaStar, 
  FaInfoCircle, 
  FaChevronRight 
} from "react-icons/fa";

interface SettingsItemProps {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
}

const SettingsItem = ({ icon: Icon, label, onClick }: SettingsItemProps) => {
  return (
    <Button
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={3}
      bg="white"
      rounded="xl"
      borderWidth="1px"
      borderColor="#E2E8F0"
      _hover={{ bg: "#F9FAFB" }}
      onClick={onClick}
    >
      <Flex align="center" gap={3}>
        <Icon color="#4B5563" />
        <Text fontSize="sm" color="#1A202C">
          {label}
        </Text>
      </Flex>
      <FaChevronRight color="#9CA3AF" />
    </Button>
  );
};

export const SettingsSupport = () => {
  const settingsItems = [
    {
      icon: FaBell,
      label: "Уведомления"
    },
    {
      icon: FaShieldAlt,
      label: "Безопасность"
    },
    {
      icon: FaQuestionCircle,
      label: "Помощь и поддержка"
    },
    {
      icon: FaStar,
      label: "Оценить приложение"
    },
    {
      icon: FaInfoCircle,
      label: "О приложении"
    }
  ];

  return (
    <Box id="settings-support" px={4} py={4} mb={20}>
      <Text fontSize="lg" color="#1A202C" fontWeight="medium" mb={4}>
        Настройки и поддержка
      </Text>
      
      <Stack gap={2}>
        {settingsItems.map((item, index) => (
          <SettingsItem
            key={index}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </Stack>
    </Box>
  );
};