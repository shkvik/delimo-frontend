import { Box, Text, Flex, Image, Badge } from "@chakra-ui/react";
import { FaUserPlus, FaCheck, FaClock } from "react-icons/fa";

export interface Participant {
  id: string;
  name: string;
  avatar: string;
  role?: string;
  joinedAt?: string;
  status: 'paid' | 'pending';
  amount: number;
}

export interface ParticipantsListProps {
  participants: Participant[];
  onInvite?: () => void;
  onRemind?: (participantId: string) => void;
}

export const ParticipantsList = ({ 
  participants, 
  onInvite, 
  onRemind 
}: ParticipantsListProps) => {
  return (
    <Box id="participants-list" px={4} py={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" color="gray.900">Участники</Text>
        <Flex
          align="center"
          gap={1}
          cursor="pointer"
          color="gray.600"
          fontSize="sm"
          _hover={{ color: "gray.900" }}
          onClick={onInvite}
        >
          <FaUserPlus />
          <Text>Пригласить</Text>
        </Flex>
      </Flex>
      
      <Box>
        {participants.map((participant) => (
          <Box
            key={participant.id}
            bg="white"
            rounded="xl"
            p={4}
            borderWidth="1px"
            borderColor="gray.200"
            shadow="sm"
            mb={3}
          >
            <Flex justify="space-between" align="center">
              <Flex align="center" gap={3}>
                <Image
                  src={participant.avatar}
                  alt={participant.name}
                  w={10}
                  h={10}
                  rounded="full"
                />
                <Box>
                  <Text fontSize="sm" color="gray.900">{participant.name}</Text>
                  <Text fontSize="xs" color="gray.500">
                    {participant.role || participant.joinedAt}
                  </Text>
                </Box>
              </Flex>
              <Box textAlign="right">
                <Flex align="center" gap={2} mb={1}>
                  {participant.status === 'paid' ? (
                    <Badge
                      display="inline-flex"
                      alignItems="center"
                      px={2}
                      py={1}
                      rounded="full"
                      fontSize="xs"
                      bg="gray.100"
                      color="gray.800"
                    >
                      <Box as={FaCheck} color="gray.600" fontSize="xs" mr={1} />
                      Оплачено
                    </Badge>
                  ) : (
                    <Badge
                      display="inline-flex"
                      alignItems="center"
                      px={2}
                      py={1}
                      rounded="full"
                      fontSize="xs"
                      bg="gray.100"
                      color="gray.600"
                    >
                      <Box as={FaClock} color="gray.500" fontSize="xs" mr={1} />
                      Ожидание
                    </Badge>
                  )}
                </Flex>
                <Text 
                  fontSize="sm" 
                  color={participant.status === 'paid' ? "gray.900" : "gray.500"}
                  mt={1}
                >
                  ₽{participant.amount.toLocaleString()}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};