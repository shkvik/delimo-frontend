import { Box, Text, Flex, Button, Badge } from "@chakra-ui/react";
import { 
  FaEdit, 
  FaPaperPlane, 
  FaDownload, 
  FaStop, 
  FaChevronRight 
} from "react-icons/fa";

export interface PoolManagementProps {
  onEdit?: () => void;
  onSendReminders?: () => void;
  onExport?: () => void;
  onFinishEarly?: () => void;
  pendingCount?: number;
}

export const PoolManagement = ({ 
  onEdit, 
  onSendReminders, 
  onExport, 
  onFinishEarly,
  pendingCount = 0
}: PoolManagementProps) => {
  return (
    <Box id="pool-management" px={4} py={4}>
      <Text fontSize="lg" color="gray.900" mb={4}>Управление сбором</Text>
      
      <Box>
        <Button
          w="full"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={3}
          bg="white"
          rounded="xl"
          borderWidth="1px"
          borderColor="gray.200"
          _hover={{ bg: "gray.50" }}
          mb={3}
          onClick={onEdit}
        >
          <Flex align="center" gap={3}>
            <FaEdit color="gray.600" />
            <Text fontSize="sm" color="gray.900">Редактировать сбор</Text>
          </Flex>
          <FaChevronRight color="gray.400" />
        </Button>
        
        <Button
          w="full"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={3}
          bg="white"
          rounded="xl"
          borderWidth="1px"
          borderColor="gray.200"
          _hover={{ bg: "gray.50" }}
          mb={3}
          onClick={onSendReminders}
        >
          <Flex align="center" gap={3}>
            <FaPaperPlane color="gray.600" />
            <Text fontSize="sm" color="gray.900">Отправить напоминания</Text>
          </Flex>
          <Badge
            bg="gray.100"
            color="gray.600"
            px={2}
            py={1}
            rounded="full"
            fontSize="xs"
          >
            {pendingCount} чел.
          </Badge>
        </Button>
        
        <Button
          w="full"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={3}
          bg="white"
          rounded="xl"
          borderWidth="1px"
          borderColor="gray.200"
          _hover={{ bg: "gray.50" }}
          mb={3}
          onClick={onExport}
        >
          <Flex align="center" gap={3}>
            <FaDownload color="gray.600" />
            <Text fontSize="sm" color="gray.900">Экспорт данных</Text>
          </Flex>
          <FaChevronRight color="gray.400" />
        </Button>
        
        <Button
          w="full"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={3}
          bg="white"
          rounded="xl"
          borderWidth="1px"
          borderColor="gray.200"
          _hover={{ bg: "gray.50" }}
          onClick={onFinishEarly}
        >
          <Flex align="center" gap={3}>
            <FaStop color="gray.600" />
            <Text fontSize="sm" color="gray.600">Завершить сбор досрочно</Text>
          </Flex>
          <FaChevronRight color="gray.400" />
        </Button>
      </Box>
    </Box>
  );
};