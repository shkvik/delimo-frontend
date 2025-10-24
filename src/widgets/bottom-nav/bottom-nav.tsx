import { Flex, VStack, Text, Image } from "@chakra-ui/react";
import { useLocation, NavLink } from "react-router-dom";
import { ChakraNavLink } from "@/shared/ui/chakra-nav-link";
import { ROUTES } from "@/shared/config/routes";
import gameLogo from "@/assets/bottom-nav/game.svg";
import storageLogo from "@/assets/bottom-nav/storage.svg";
import leadersLogo from "@/assets/bottom-nav/leaders.svg";
import profileLogo from "@/assets/bottom-nav/profile.svg";
import { useEffect, useRef, useState } from "react";

// useHideBottomNavOnKeyboard.ts
/**
 * Хук, который скрывает bottom-nav, если клавиатура уменьшила viewport
 * относительно базовой высоты (замеренной при загрузке приложения)
 * @param shrinkThresholdPercent — процент уменьшения, при котором скрываем панель
 */
export const useHideBottomNavOnKeyboard = (shrinkThresholdPercent = 25) => {
  const [visible, setVisible] = useState(true);
  const baseHeightRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const vv = window.visualViewport;
    if (!vv) return;

    // при первом запуске сохраняем базовую высоту
    if (baseHeightRef.current === null) {
      baseHeightRef.current = vv.height;
    }

    const update = () => {
      const baseHeight = baseHeightRef.current ?? vv.height;
      const currentHeight = vv.height;
      const shrinkPercent = ((baseHeight - currentHeight) / baseHeight) * 100;

      // если клавиатура "съела" больше указанного процента — скрываем
      setVisible(shrinkPercent < shrinkThresholdPercent);
    };

    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);

    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, [shrinkThresholdPercent]);

  return visible;
};

const NAV_ITEMS = [
  { href: ROUTES.GAME, label: "Game", icon: gameLogo },
  { href: ROUTES.STORAGE, label: "Storage", icon: storageLogo },
  { href: ROUTES.LEADERS, label: "Leaders", icon: leadersLogo },
  { href: ROUTES.PROFILE, label: "Profile", icon: profileLogo },
] as const;

export const BottomNav = () => {
  const location = useLocation();

  const isKeyboardSafe = useHideBottomNavOnKeyboard(25);
  if (!isKeyboardSafe) return null;

  return (
    <Flex
      as="nav"
      justify="space-around"
      align="center"
      bg="rgba(59, 59, 59, 0.29)"
      backdropFilter="blur(30px)"
      borderTop="1px solid"
      borderColor="gray.700"
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
