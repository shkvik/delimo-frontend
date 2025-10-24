import { Box, Text, Flex, Center } from "@chakra-ui/react";

export interface ProgressOverviewProps {
  collected: number;
  goal: number;
  participants: number;
  maxParticipants: number;
}

export const ProgressOverview = ({
  collected,
  goal,
  participants,
  maxParticipants,
}: ProgressOverviewProps) => {
  const remaining = goal - collected;
  const percentage = Math.round((collected / goal) * 100);
  
  // Расчет для SVG кругового прогресса
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Box id="progress-overview" px={4} py={4}>
      <Box 
        bg="white" 
        rounded="2xl" 
        p={6} 
        borderWidth="1px" 
        borderColor="gray.200" 
        shadow="sm"
      >
        <Center mb={6}>
          <Box position="relative" w={32} h={32}>
            <svg
              width="128"
              height="128"
              viewBox="0 0 120 120"
              style={{ transform: 'rotate(-90deg)' }}
            >
              <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="#374151"
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <Box position="absolute" inset={0} display="flex" alignItems="center" justifyContent="center">
              <Box textAlign="center">
                <Text fontSize="2xl" color="gray.900">{percentage}%</Text>
                <Text fontSize="xs" color="gray.500">собрано</Text>
              </Box>
            </Box>
          </Box>
        </Center>
        
        <Box>
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="sm" color="gray.600">Собрано</Text>
            <Text fontSize="lg" color="gray.900">₽{collected.toLocaleString()}</Text>
          </Flex>
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="sm" color="gray.600">Осталось</Text>
            <Text fontSize="lg" color="gray.900">₽{remaining.toLocaleString()}</Text>
          </Flex>
          <Flex justify="space-between" align="center">
            <Text fontSize="sm" color="gray.600">Участников</Text>
            <Text fontSize="lg" color="gray.900">{participants} из {maxParticipants}</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};