import { Box } from "@chakra-ui/react";
import { Header } from "./components/header";
import { CreatePoolForm } from "./components/create-pool-form/create-fool-form";

export const CreatePoolPage = () => {
  return (
    <Box>
      <Header />
      <CreatePoolForm />
    </Box>
  );
};
