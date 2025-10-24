import { Global } from "@emotion/react";

export const GlobalScrollbarHide = () => (
  <Global
    styles={`
      * {
        scrollbar-width: none;         /* Firefox */
        -ms-overflow-style: none;      /* IE и старый Edge */
      }
        
      *::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    `}
  />
);
