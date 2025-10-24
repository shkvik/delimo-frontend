// GiftPopup.tsx
import { Box, Flex, Image, Text, Button, Portal } from "@chakra-ui/react";
import { useEffect } from "react";
import pepeImage from "@/assets/mock/gift.png";
import ClosePng from "@/assets/storage/close-btn.svg";
import SellIcon from "@/assets/storage/sell-icon.svg";
import WithdrawIcon from "@/assets/storage/withdraw-icon.svg";

type GiftPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onSell?: () => void;
  onWithdraw?: () => void;
  zIndex?: number;
};

export const GiftPopup = ({
  isOpen,
  onClose,
  onSell,
  onWithdraw,
  zIndex = 2000,
}: GiftPopupProps) => {
  // Лочим скролл, пока открыто
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Portal>
      {/* Бэкдроп */}
      <Box
        position="fixed"
        inset="0"
        bg="rgba(0,0,0,0.30)"
        zIndex={zIndex}
        onClick={onClose}
      />

      {/* Контейнер у нижней границы */}
      <Box
        w="100%"
        position="fixed"
        left={0}
        right={0}
        bottom={0}
        display="flex"
        justifyContent="center"
        zIndex={zIndex + 1}
        // анимация выезда снизу
        onClick={onClose} // клик по области вокруг листа закрывает
      >
        {/* Сам лист */}
        <Box
          onClick={(e) => e.stopPropagation()} // клики внутри не закрывают
          w="100%"
          maxH="92dvh"
          h="min(800px, 92dvh)"
          borderTopLeftRadius="24px"
          borderTopRightRadius="24px"
          bg="rgba(16,16,16,0.64)"
          backdropFilter="blur(40px)"
          boxShadow="0 0 0 1px rgba(229,231,235,0.06)"
          overflow="hidden"
          position="relative"
        >
          <Box
            h="100%"
            overflowY="auto"
            px={{ base: 4, md: 6 }}
            pt="44px"
            pb="24px"
          >
            {/* Close */}
            <Button
              aria-label="Close"
              onClick={onClose}
              position="absolute"
              top="12px"
              right="12px"
              minW="32px"
              w="32px"
              h="32px"
              p={0}
              borderRadius="full"
              bg="rgba(255,255,255,0.10)"
              _hover={{ bg: "rgba(255,255,255,0.16)" }}
              color="white"
            >
              <Image src={ClosePng} alt="Close" boxSize="12px" />
            </Button>

            {/* Картинка */}
            <Flex w="full" justify="center" mt={{ base: 2, md: 0 }}>
              <Image
                src={pepeImage}
                alt="Plush Pepe"
                boxSize="177px"
                borderRadius="20px"
                objectFit="cover"
                boxShadow="0 4px 56px 20px rgba(255,0,192,0.25)"
              />
            </Flex>

            {/* Тексты */}
            <Text mt={5} textAlign="center" fontSize="20px" color="#B0ABB8">
              Plush Pepe
            </Text>
            <Text
              mt={2}
              textAlign="center"
              fontWeight={500}
              fontSize="30px"
              color="white"
            >
              Two Face
            </Text>

            {/* Цена / TON */}
            <Flex justify="center" align="center" mt="20px">
              <Flex align="center" justify="center" gap="12px">
                <Text fontWeight={600} fontSize="30px" color="white">
                  💎 9.9 TON
                </Text>
                <Text fontFamily="Inter" fontSize="20px" color="#8C99A9">
                  ~ $ 24
                </Text>
              </Flex>
            </Flex>

            <Text
              mt={10}
              maxW="350px"
              mx="auto"
              textAlign="center"
              fontWeight={300}
              fontSize="18px"
              color="white"
            >
              Part of the Plush Pepe collection — limited edition gift with
              unique holographic features.
            </Text>

            {/* Кнопки */}
            <Box mt={10} w="full" display="flex" justifyContent="center">
              <Box
                as="button"
                onClick={onSell}
                w="293px"
                h="56px"
                borderRadius="16px"
                color="white"
                fontFamily="Inter"
                fontWeight={600}
                fontSize="16px"
                css={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(34,197,94,1) 0%, rgba(5,150,105,1) 100%)",
                }}
                boxShadow="0 0 20px rgba(120, 219, 255, 0.52)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="10px"
              >
                <Image src={SellIcon} alt="Close" boxSize="16px" />
                Sell in Game
              </Box>
            </Box>

            <Box mt={4} w="full" display="flex" justifyContent="center">
              <Box
                as="button"
                onClick={onWithdraw}
                w="293px"
                h="56px"
                borderRadius="16px"
                color="white"
                fontFamily="Inter"
                fontWeight={600}
                fontSize="16px"
                css={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(59,130,246,1) 0%, rgba(147,51,234,1) 100%)",
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="10px"
              >
                <Image src={WithdrawIcon} alt="Close" boxSize="16px" />
                Withdraw
              </Box>
            </Box>

            <Text
              mt={10}
              maxW="350px"
              mx="auto"
              textAlign="center"
              fontWeight={300}
              fontSize="16px"
              color="white"
            >
              Sell converts to in-game currency • Withdraw sends to your wallet
            </Text>
          </Box>
        </Box>
      </Box>
    </Portal>
  );
};
