import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export type LayoutPageProps = BoxProps & {
  children: ReactNode;
};

export const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <Box
      pt="10vh"
      css={{
        "@supports (height: 100dvh)": {
          pt: "max(env(safe-area-inset-top), 10dvh)",
        },
        "@supports not (height: 100dvh)": {
          pt: "calc(env(safe-area-inset-top) + 10vh)",
        },
        "@media (max-height: 700px)": { pt: "5dvh" },
        "@media (min-height: 1000px)": { pt: "24dvh" },
      }}
    >
      {children}
    </Box>
  );
};
