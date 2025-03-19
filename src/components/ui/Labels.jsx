import { Tag } from "@chakra-ui/react";

export const Labels = ({ ...props }) => {
  return (
    <Tag
      size="sm"
      textTransform="uppercase"
      fontSize="0.65rem"
      variant="subtle"
      justifyContent="center"
      paddingTop={1}
      paddingBottom={1}
      paddingLeft={1.5}
      paddingRight={1.5}
      {...props}
    >
      {props.children}
    </Tag>
  );
};
