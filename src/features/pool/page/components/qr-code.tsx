import { Box, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import { FaQrcode, FaDownload, FaShare } from "react-icons/fa";

export interface QRCodeProps {
  onSave?: () => void;
  onShare?: () => void;
}

export const QRCode = ({ onSave, onShare }: QRCodeProps) => {
  return (
    <Box id="qr-code-section" px={4} py={4}>
      <Text fontSize="lg" color="gray.900" mb={4}>QR код для приглашения</Text>
      
      <Box 
        bg="white" 
        rounded="2xl" 
        p={6} 
        borderWidth="1px"
        borderColor="gray.200"
        shadow="sm"
        textAlign="center"
      >
        <Box
          w={32}
          h={32}
          bg="gray.100"
          rounded="xl"
          mx="auto"
          mb={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w={24}
            h={24}
            bg="gray.300"
            rounded="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaQrcode color="gray.600" fontSize="3xl" />
          </Box>
        </Box>
        
        <Text fontSize="sm" color="gray.600" mb={4}>
          Поделитесь этим QR кодом, чтобы пригласить участников в сбор
        </Text>
        
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          <GridItem>
            <Button
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              py={3}
              bg="gray.100"
              rounded="xl"
              _hover={{ bg: "gray.200" }}
              onClick={onSave}
            >
              <FaDownload color="gray.600" />
              <Text fontSize="sm" color="gray.900">Сохранить</Text>
            </Button>
          </GridItem>
          <GridItem>
            <Button
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              py={3}
              bg="gray.100"
              rounded="xl"
              _hover={{ bg: "gray.200" }}
              onClick={onShare}
            >
              <FaShare color="gray.600" />
              <Text fontSize="sm" color="gray.900">Поделиться</Text>
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};