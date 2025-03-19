import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn }) => {
  return (
    <Input
      variant="outline"
      width={{ base: "80%", sm: "60%", lg: "40%" }}
      bgColor="white"
      placeholder="Search for a recipe..."
      onChange={changeFn}
    />
  );
};
