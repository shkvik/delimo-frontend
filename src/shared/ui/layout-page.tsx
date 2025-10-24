import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export type LayoutPageProps = BoxProps & {
  children: ReactNode;
};

export const LayoutPage = ({ children }: LayoutPageProps) => {
  return <Box pb={24}>{children}</Box>;
};
