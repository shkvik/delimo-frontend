import { Flex, Input, Image } from "@chakra-ui/react";
import SearchIcon from "@/assets/storage/search-icon.svg";

export const Search = () => {
  return (
    <Flex
      align="center"
      bg="#141414"
      w="full"
      maxW="80%"
      h="54px"
      mx="auto"
      borderRadius="10px"
      px={4}
      gap={3}
    >
      {/* Иконка лупы */}
      <Image src={SearchIcon} alt="search" w="24px" h="24px" opacity={0.74} />

      {/* Текстовое поле / плейсхолдер */}
      <Input
        variant="flushed"
        border="none"
        outline="none"
        _focusVisible={{ border: "none", boxShadow: "none" }}
        placeholder="Search name and attributes"
        _placeholder={{
          color: "#BCBCBC",
          fontFamily: "Poppins",
          fontWeight: 300,
          fontSize: "15px",
        }}
        color="white"
      />
    </Flex>
  );
};
