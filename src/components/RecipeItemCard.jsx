import {
  Heading,
  Text,
  Card,
  CardBody,
  Image,
  Stack,
  Flex,
  Box,
  AspectRatio,
} from "@chakra-ui/react";
import { Labels } from "./ui/Labels";

export const RecipeItemCard = ({ item, clickFn }) => {
  const healthLabels = item.recipe.healthLabels;

  const labels = [];
  if (healthLabels.includes("Vegan")) labels.push("Vegan");
  if (healthLabels.includes("Vegetarian")) labels.push("Vegetarian");

  return (
    <Card
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      minHeight="420px"
      bgColor="white"
      borderRadius="xl"
      variant="elevated"
      cursor="pointer"
      onClick={() => clickFn(item)}
    >
      <AspectRatio ratio={16 / 9} width="100%">
        <Image
          src={item.recipe.image}
          objectFit="cover"
          borderTopRadius="xl"
        ></Image>
      </AspectRatio>
      <CardBody display="flex" flexDirection="column" flex="1">
        <Stack spacing={2} flex="1">
          <Text
            color="gray.500"
            textAlign="center"
            fontSize="xs"
            textTransform="uppercase"
          >
            {item.recipe.mealType}
          </Text>

          <Heading size="md">{item.recipe.label}</Heading>

          <Flex gap={2}>
            <Text color="gray.500" fontSize="sm">
              Dish:
            </Text>
            <Text
              color="gray.500"
              fontSize="sm"
              textTransform="capitalize"
              fontWeight="600"
            >
              {item.recipe.dishType}
            </Text>
          </Flex>

          {labels.length > 0 && (
            <Flex gap={1} flexWrap="wrap">
              {labels.map((label) => (
                <Labels key={label} bgColor="green.200">
                  {label}
                </Labels>
              ))}
            </Flex>
          )}

          {item.recipe.dietLabels.length > 0 && (
            <Flex gap={1} flexWrap="wrap">
              {item.recipe.dietLabels.map((dietLabel) => (
                <Labels key={dietLabel} bgColor="purple.200">
                  {dietLabel}
                </Labels>
              ))}
            </Flex>
          )}

          {item.recipe.cautions.length > 0 && (
            <Box>
              <Text color="gray.500" fontSize="sm">
                Cautions:{" "}
              </Text>

              <Flex gap={1} flexWrap="wrap">
                {item.recipe.cautions.map((caution) => (
                  <Labels key={caution} bgColor="red.200">
                    {caution}
                  </Labels>
                ))}
              </Flex>
            </Box>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
