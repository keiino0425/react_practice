import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";
import { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton = (props: Props) => {
  const {children, disabled = false, loading = false, onClick} = props;
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }} isDisabled={disabled || loading} isLoading={loading} onClick={onClick}>
      {children}
    </Button>
  );
};
