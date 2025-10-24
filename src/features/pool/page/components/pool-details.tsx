import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { FaCalendarDays, FaClock } from "react-icons/fa6";

export interface PoolDetailsProps {
  description: string;
  createdDate: string;
  deadline: string;
}

export const PoolDetails = ({
  description,
  createdDate,
  deadline,
}: PoolDetailsProps) => {
  return (
    <Box id="pool-details" px={4} py={4}>
      <Box 
        bg="white" 
        rounded="2xl" 
        p={4} 
        borderWidth="1px" 
        borderColor="gray.200" 
        shadow="sm"
      >
        <Text fontSize="lg" color="gray.900" mb={3}>Описание сбора</Text>
        <Text fontSize="sm" color="gray.600" mb={4}>{description}</Text>
        
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <Box
              textAlign="center"
              p={3}
              bg="gray.50"
              rounded="xl"
            >
              <Box display="flex" justifyContent="center" color="gray.600" mb={2}>
                <FaCalendarDays size={20} />
              </Box>
              <Text fontSize="xs" color="gray.500">Создан</Text>
              <Text fontSize="sm" color="gray.900">{createdDate}</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              textAlign="center"
              p={3}
              bg="gray.50"
              rounded="xl"
            >
              <Box display="flex" justifyContent="center" color="gray.600" mb={2}>
                <FaClock size={20} />
              </Box>
              <Text fontSize="xs" color="gray.500">Дедлайн</Text>
              <Text fontSize="sm" color="gray.900">{deadline}</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};