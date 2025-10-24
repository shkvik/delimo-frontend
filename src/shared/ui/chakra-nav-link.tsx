import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { LinkProps } from "@chakra-ui/react";
import { NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";

export const ChakraNavLink = forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, "href"> & NavLinkProps
>(({ children, ...props }, ref) => {
  return (
    <Link as={NavLink} ref={ref} {...props}>
      {children}
    </Link>
  );
});
