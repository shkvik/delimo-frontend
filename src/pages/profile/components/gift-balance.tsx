import { Flex, Text, Image } from "@chakra-ui/react";
import TonIcon from "@/assets/storage/ton-icon.svg";

export const GiftBalance = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      color="white"
      w="full"
      maxW="80%"
      h="54px"
      mx="auto"
    >
      <Flex align="center" gap={1}>
        <Image src={TonIcon} alt="ton" boxSize="13px" />
        <Text
          fontFamily="Poppins"
          fontWeight="600"
          fontSize="25px"
          lineHeight="10px"
          textAlign="center"
        >
          10 737,9
        </Text>
      </Flex>

      <Text
        mt={1}
        fontFamily="Poppins"
        fontWeight="400"
        fontSize="10px"
        color="#8C99A9"
        textAlign="center"
      >
        $ 26 844
      </Text>

      <Text
        mt={1}
        alignSelf="flex-start"
        fontFamily="Poppins"
        fontWeight="600"
        fontSize="10px"
        color="#8C99A9"
        textAlign="center"
      >
        123 144 pcs.
      </Text>
    </Flex>
  );
};
