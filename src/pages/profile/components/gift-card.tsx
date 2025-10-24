import { Box, Flex, Image, Text } from "@chakra-ui/react";
import pepeImage from "@/assets/mock/gift.png";
import TonIcon from "@/assets/storage/ton-icon.svg";

export type GiftCardFixedProps = {
  onClick: () => void;
};

export const GiftCardFixed = ({ onClick }: GiftCardFixedProps) => {
  return (
    // 1) Карточка занимает всю ширину колонки и
    // 2) держит форму 170:285 (≈ 0.596:1 по ширине → высоте)
    <Box
      w="full"
      aspectRatio="170 / 285"
      borderRadius="12px"
      overflow="hidden"
      position="relative"
      border="2px solid #1E1E47"
      onClick={onClick}
      boxShadow="0 4px 23.5px rgba(255,0,208,0.25)"
      bg="#050607"
      css={{
        containerType: "inline-size",
      }}
    >
      <Box
        position="absolute"
        inset="0"
        pointerEvents="none"
        zIndex={0}
        css={{
          background:
            "linear-gradient(to top right, rgba(99,102,241,0.07) 0%, rgba(139,92,246,0.16) 100%)",
        }}
      />
      <Flex position="relative" zIndex={1} direction="column" h="100%">
        <Box aspectRatio="1 / 1">
          <Image
            src={pepeImage}
            alt="Plush Pepe"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>

        <Box
          // px="10px"
          // pt="8px"
          // pb="12px"
          position="relative"
          display="flex" // ← добавили
          flexDirection="column" // ← добавили
          flex="1"
          css={{
            /* padding: 8px 10px 12px 10px в исходнике */
            paddingTop: "clamp(6px, 4.71cqw, 10px)",
            paddingRight: "clamp(8px, 5.88cqw, 12px)",
            paddingBottom: "clamp(9px, 7.06cqw, 14px)",
            paddingLeft: "clamp(8px, 5.88cqw, 12px)",
          }}
        >
          <Text
            css={{ fontSize: "clamp(10px, 7.06cqw, 24px)" }}
            color="#B0ABB8"
          >
            Plush Pepe
          </Text>

          <Text
            fontWeight="500"
            color="white"
            css={{ fontSize: "clamp(16px, 11.76cqw, 54px)", lineHeight: "1.1" }}
          >
            Two Face
          </Text>

          <Text
            css={{ fontSize: "clamp(10px, 7.06cqw, 24px)" }}
            color="rgba(255,255,255,0.5)"
            mt="2px"
          >
            Won on Oct 7
          </Text>

          <Flex mt="auto" align="center" gap="6px">
            <Box aspectRatio="1 / 1">
              <Image
                src={TonIcon}
                alt="ton"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
            {/* <Image  alt="ton" boxSize="13px" /> */}
            <Text
              css={{ fontSize: "clamp(15px, 7.06cqw, 35px)" }}
              fontWeight="600"
              color="white"
            >
              9.9
            </Text>
            <Text
              css={{ fontSize: "clamp(10px, 7.06cqw, 24px)" }}
              color="#8C99A9"
            >
              ~ $ 24
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
