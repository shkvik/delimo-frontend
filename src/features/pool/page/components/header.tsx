import { ROUTES } from "@/shared/config/routes";
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import { FaArrowLeft, FaShare, FaEllipsisV } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export interface HeaderProps {
  title: string;
  organizer?: string;
  avatarUrl?: string;
}

export const Header = ({ title, organizer, avatarUrl }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from;
  const target =
    typeof from === "string" && from.length && from !== ROUTES.POOLS_CREATE
      ? from
      : ROUTES.POOLS;
  console.log(target);

  const handleBack = () => {
    navigate(target, { replace: true });
  };

  return (
    <Box
      id="header"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      px={4}
      py={3}
      position="sticky"
      top={0}
      zIndex={50}
    >
      <Flex justify="space-between" align="center">
        <Flex align="center" gap={3}>
          <Button
            p={1}
            rounded="md"
            _hover={{ bg: "gray.100" }}
            variant="ghost"
            onClick={handleBack}
          >
            <FaArrowLeft color="gray.600" />
          </Button>
          <Flex align="center" gap={2}>
            <Image
              src={
                avatarUrl ??
                "https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=54321"
              }
              alt="Organizer"
              w={6}
              h={6}
              rounded="full"
            />
            <Box>
              <Text fontSize="sm" color="gray.900">
                {title}
              </Text>
              <Text fontSize="xs" color="gray.500">
                Организатор: {organizer}
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex align="center" gap={2}>
          <Button
            p={2}
            rounded="lg"
            _hover={{ bg: "gray.100" }}
            variant="ghost"
          >
            <FaShare color="gray.600" />
          </Button>
          <Button
            p={2}
            rounded="lg"
            _hover={{ bg: "gray.100" }}
            variant="ghost"
          >
            <FaEllipsisV color="gray.600" />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
