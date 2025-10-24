import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import { JSX, useState } from "react";
import { GiftCardFixed } from "./gift-card";
import { GiftPopup } from "./gift-topup";

export const GiftList = (): JSX.Element => {
  const { open, onOpen, onClose } = useDisclosure();
  const [_, setSelected] = useState<number | null>(null);

  return (
    <Box mt='10px'>
      <Grid
        w="full"
        maxW="90%"
        mx="auto"
        templateColumns="repeat(auto-fit, minmax(170px, 1fr))"
        columnGap="16px"
        rowGap="16px"
        justifyItems="stretch"
        alignItems="stretch"
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <GiftCardFixed
            key={i}
            onClick={() => {
              setSelected(i);
              onOpen();
            }}
          />
        ))}
      </Grid>
      {open && (
        <GiftPopup
          isOpen={open}
          onClose={onClose}
          onSell={() => {
            /* действие */
          }}
          onWithdraw={() => {
            /* действие */
          }}
          // передай сюда данные по selected, если нужно
        />
      )}
    </Box>
  );
};
