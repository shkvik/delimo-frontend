import { Flex, VStack, Text, Image, Box } from "@chakra-ui/react";
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
      bg="white"
      height='70px'
      borderTop="1px solid"
      borderColor="gray.200"
      px={4}
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
            <VStack
              flex="1"
              py={2}
              px={3}
              transition="all 0.15s ease"
            >
              <Box
                w="24px"
                h="24px"
                rounded="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg={isActive
                  ? (href === ROUTES.POOLS
                    ? "linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)"
                    : "linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)"
                  )
                  : "gray.100"
                }
                transition="all 0.2s ease"
              >
                <Image
                  src={icon}
                  alt={label}
                  boxSize="14px"
                  objectFit="contain"
                  filter={isActive ? "brightness(0) invert(1)" : "none"}
                  transition="all 0.2s ease"
                />
              </Box>
              <Text
                fontSize="xs"
                fontWeight={isActive ? "medium" : "normal"}
                color={isActive
                  ? (href === ROUTES.POOLS
                    ? "transparent"
                    : "gray.700"
                  )
                  : "gray.400"
                }
                bg={isActive && href === ROUTES.POOLS
                  ? "linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)"
                  : "transparent"
                }
                bgClip={isActive && href === ROUTES.POOLS ? "text" : "initial"}
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
