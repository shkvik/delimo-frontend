import { Flex, VStack, Text, Image } from "@chakra-ui/react";
import { useLocation, NavLink } from "react-router-dom";
import { ChakraNavLink } from "@/shared/ui/chakra-nav-link";
import { ROUTES } from "@/shared/config/routes";
import { useHideBottomNavOnKeyboard } from "./hooks/use-hide-bottom-nav-on-keyboard";
import homeLogo from "@/assets/bottom-nav/home.svg";
import poolsLogo from "@/assets/bottom-nav/pools.svg";
import statisticsLogo from "@/assets/bottom-nav/statistics.svg";
import profileLogo from "@/assets/bottom-nav/profile.svg";

export const BottomNav = () => {
  const isKeyboardSafe = useHideBottomNavOnKeyboard(25);
  if (!isKeyboardSafe) {
    return null;
  }
  const location = useLocation();

  const NAV_ITEMS = [
    { href: ROUTES.HOME, label: "Главная", icon: homeLogo },
    { href: ROUTES.POOLS, label: "Сборы", icon: poolsLogo },
    { href: ROUTES.STATISTICS, label: "Статистика", icon: statisticsLogo },
    { href: ROUTES.PROFILE, label: "Профиль", icon: profileLogo },
  ] as const;

  return (
    <Flex
      as="nav"
      justify="space-around"
      align="center"
      bg="rgba(59, 59, 59, 0.29)"
      backdropFilter="blur(30px)"
      py={2}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={100}
    >
      {NAV_ITEMS.map(({ href, label, icon }) => {
        const isActive =
          location.pathname === href ||
          location.pathname.startsWith(`${href}/`);

        return (
          <ChakraNavLink
            key={href}
            as={NavLink}
            to={href}
            _hover={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none", outline: "none" }}
            _focusVisible={{ boxShadow: "none", outline: "none" }}
            style={{ textDecoration: "none" }}
          >
            <VStack flex="1" py={1} transition="all 0.15s ease">
              <Image
                src={icon}
                alt={label}
                boxSize="24px"
                objectFit="contain"
                filter={
                  isActive ? "grayscale(0)" : "grayscale(1) brightness(0.7)"
                }
                transition="all 0.2s ease"
              />
              <Text
                fontSize="xs"
                fontWeight="medium"
                color={isActive ? "white" : "gray.400"}
              >
                {label}
              </Text>
            </VStack>
          </ChakraNavLink>
        );
      })}
    </Flex>
  );
};
