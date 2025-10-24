import { Box, Text, Flex, Button, Stack } from "@chakra-ui/react";
import { FaCcVisa, FaCcMastercard, FaPlus } from "react-icons/fa";

interface PaymentMethodCardProps {
  icon: React.ElementType;
  lastFour: string;
  description: string;
  isActive?: boolean;
  onEdit?: () => void;
}

const PaymentMethodCard = ({ 
  icon: Icon, 
  lastFour, 
  description, 
  isActive = false, 
  onEdit 
}: PaymentMethodCardProps) => {
  return (
    <Box bg="white" rounded="xl" p={4} borderWidth="1px" borderColor="#E2E8F0">
      <Flex justify="space-between" align="center">
        <Flex align="center" gap={3}>
          <Box 
            w="40px" 
            h="40px" 
            bg="#F3F4F6" 
            rounded="lg" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            <Icon color="#4B5563" />
          </Box>
          <Box>
            <Text color="#1A202C">
              {lastFour}
            </Text>
            <Text fontSize="sm" color="#4B5563">
              {description}
            </Text>
          </Box>
        </Flex>
        {isActive ? (
          <Flex
            align="center"
            px={2}
            py={1}
            rounded="full"
            bg="#F3F4F6"
          >
            <Text fontSize="xs" color="#374151">
              Активна
            </Text>
          </Flex>
        ) : (
          <Button
            variant="ghost"
            fontSize="sm"
            color="#4B5563"
            _hover={{ color: "#1A202C" }}
            p={0}
            h="auto"
            onClick={onEdit}
          >
            Изменить
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export const PaymentMethods = () => {
  const paymentMethods = [
    {
      icon: FaCcVisa,
      lastFour: "**** 4532",
      description: "Основная карта",
      isActive: true
    },
    {
      icon: FaCcMastercard,
      lastFour: "**** 7891",
      description: "Дополнительная карта",
      isActive: false
    }
  ];

  return (
    <Box id="payment-methods" px={4} py={4}>
      <Text fontSize="lg" color="#1A202C" fontWeight="medium" mb={4}>
        Способы оплаты
      </Text>
      
      <Stack gap={3}>
        {paymentMethods.map((method, index) => (
          <PaymentMethodCard
            key={index}
            icon={method.icon}
            lastFour={method.lastFour}
            description={method.description}
            isActive={method.isActive}
          />
        ))}
        
        <Button
          w="full"
          bg="white"
          rounded="xl"
          p={4}
          borderWidth="1px"
          borderColor="#E2E8F0"
          borderStyle="dashed"
          _hover={{ bg: "#F9FAFB" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <FaPlus color="#9CA3AF" />
          <Text fontSize="sm" color="#4B5563">
            Добавить способ оплаты
          </Text>
        </Button>
      </Stack>
    </Box>
  );
};