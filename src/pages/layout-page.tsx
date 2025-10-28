import { BottomNav } from "@/widgets/bottom-nav/bottom-nav";
import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { LayoutHeader } from "./layout-header";

export type LayoutPageProps = BoxProps & {
  children: ReactNode;
};

export const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <Box pb={24} fontFamily="Gerhaus">
      <LayoutHeader />
      {children}
      <BottomNav />
    </Box>
  );
};
