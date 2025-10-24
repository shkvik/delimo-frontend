import { BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export type LayoutPageProps = BoxProps & {
  children: ReactNode;
};
