// StoragePage.tsx
import { Box } from "@chakra-ui/react";
import { GiftBalance } from "./components/gift-balance";
import { Search } from "./components/gift-search";
import { HeaderBalance } from "@/widgets/header-balance/header-balance";
import { GiftList } from "./components/gift-list";
import { LayoutPage } from "@/shared/ui/layout-page";

export const StoragePage = () => {
  return (
    <LayoutPage>
      <Box
        as="main"
        h="100vh" // занимает весь экран
        display="flex"
        flexDirection="column"
        alignItems="center"
        overflow="hidden" // чтобы только внутренний контейнер прокручивался
      >
        {/* Хэдер — не скроллится */}
        <HeaderBalance />

        {/* Внутренний скролл: тут будет прокручиваться GiftBalance, а Search останется видимым */}
        <Box
          w="full"
          flex="1 1 auto"
          minH="0"
          overflowY="auto"
          //pt="5"
        >
          <Box w="full" mx="auto">
            {/* 1) Баланс — обычный блок, прокручивается */}
            <Box w="full" flex="0 0 auto" pt="5">
              <GiftBalance />
            </Box>

            {/* 2) Поиск — прилипающий к верху скролл-контейнера */}
            <Box
              position="sticky"
              top="0"
              zIndex={20}
              height="100px"
              alignContent="center"
              // фон обязателен, чтобы Search не выглядывал через содержимое при скролле.
              // Подбери bg под свою тему (например "gray.900" / "black" / "whiteAlpha.50")
              //bg="rgba(0,0,0,0.5)"
              // можно добавить бордер/тень чтобы отделить
              css={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.0) 100%)",
              }}
            >
              <Search />
            </Box>

            {/* 3) Список — под поиском, скроллится внутри контейнера */}
            <Box>
              <GiftList />
            </Box>
          </Box>
        </Box>
      </Box>
    </LayoutPage>
  );
};
