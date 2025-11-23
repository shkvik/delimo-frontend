import { Box, Text, Textarea, Flex } from "@chakra-ui/react";

interface DescriptionFieldProps {
  description: string;
  setDescription: (value: string) => void;
}

export const DescriptionField = ({
  description,
  setDescription,
}: DescriptionFieldProps) => (
  <Box id="description-section" pb={6}>
    <Box bg="white" rounded="2xl" p={4} boxShadow="md">
      <Box mb={4}>
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color="gray.900"
          mb={2}
          display="block"
        >
          Описание сбора
          <Text as="span" color="gray.400" ml={1}>
            (опционально)
          </Text>
        </Text>
        <Textarea
          placeholder="Расскажите подробнее о цели сбора, для чего нужны деньги..."
          id="description-textarea"
          rows={4}
          value={description}
          onChange={(e) => {
            if (e.target.value.length <= 500) {
              setDescription(e.target.value);
            }
          }}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          rounded="xl"
          _focus={{ outline: "none", boxShadow: "none" }}
          resize="none"
          transition="all 0.2s"
          px={4}
          py={3}
          maxLength={500}
          color="black"
        />
        <Flex justify="space-between" align="center" mt={2}>
          <Text fontSize="xs" color="gray.500">
            Подробное описание поможет привлечь больше участников
          </Text>
          <Text fontSize="xs" color="gray.400" id="char-counter">
            {description.length}/500
          </Text>
        </Flex>
      </Box>
    </Box>
  </Box>
);
