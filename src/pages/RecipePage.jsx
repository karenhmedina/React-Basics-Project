import {
  Box,
  Center,
  Heading,
  Text,
  Card,
  CardBody,
  Image,
  Flex,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Labels } from "../components/ui/Labels";

export const RecipePage = ({ item, clickFn }) => {
  return (
    <Box minHeight="100vh" bgColor="pink.50" padding={4}>
      <Button
        size="sm"
        margin={2}
        bgColor="red.200"
        _hover={{ bg: "red.300" }}
        _focus={{ bg: "red.300" }}
        onClick={() => clickFn()}
      >
        Go Back
      </Button>

      <Center>
        <Card width="xl" borderRadius="xl" bgColor="white" variant="elevated">
          <Image
            src={item.recipe.image}
            objectFit="cover"
            height={300}
            borderTopRadius="xl"
          ></Image>
          <CardBody>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={4}
            >
              <GridItem>
                <Text
                  color="gray.500"
                  fontSize="xs"
                  fontWeight="600"
                  textTransform="uppercase"
                >
                  {item.recipe.mealType}
                </Text>

                <Heading size="md">{item.recipe.label}</Heading>

                <Flex gap={2} paddingTop={4}>
                  <Text fontSize="xs">Dish:</Text>
                  <Text
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="capitalize"
                  >
                    {item.recipe.dishType}
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Text fontSize="xs">Total cooking time:</Text>
                  <Text fontSize="xs" fontWeight="600">
                    {item.recipe.totalTime} Minutes
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Text fontSize="xs">Servings:</Text>
                  <Text fontSize="xs" fontWeight="600">
                    {item.recipe.yield}
                  </Text>
                </Flex>

                <Text fontSize="sm" fontWeight="600" paddingTop={4}>
                  Ingredients:
                </Text>

                {item.recipe.ingredientLines.map((ingredientLine) => (
                  <Text key={ingredientLine} fontSize="xs" lineHeight={6}>
                    {ingredientLine}
                  </Text>
                ))}
              </GridItem>

              <GridItem>
                {item.recipe.dietLabels.length > 0 && (
                  <Box>
                    <Text fontSize="xs" paddingTop={4}>
                      Diet:
                    </Text>

                    <Flex gap={1} flexWrap="wrap">
                      {item.recipe.dietLabels.map((dietLabel) => (
                        <Labels key={dietLabel} bgColor="purple.200">
                          {dietLabel}
                        </Labels>
                      ))}
                    </Flex>
                  </Box>
                )}

                <Text fontSize="xs" paddingTop={4}>
                  Health labels:
                </Text>

                <Flex gap={1} flexWrap="wrap">
                  {item.recipe.healthLabels.map((healthLabel) => (
                    <Labels key={healthLabel} bgColor="green.200">
                      {healthLabel}
                    </Labels>
                  ))}
                </Flex>

                {item.recipe.cautions.length > 0 && (
                  <Box>
                    <Text fontSize="xs" paddingTop={4}>
                      Cautions:
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

                <Text fontSize="sm" fontWeight="600" paddingTop={4}>
                  Total nutrients:
                </Text>

                <Grid templateColumns="repeat(4, auto)" gap={2} paddingTop={2}>
                  <GridItem>
                    <Text fontSize="xs">
                      {Math.round(item.recipe.calories)}
                    </Text>
                    <Text
                      fontSize="0.65rem"
                      fontWeight="600"
                      textTransform="uppercase"
                    >
                      Calories
                    </Text>
                  </GridItem>

                  <GridItem>
                    <Text fontSize="xs">
                      {Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}{" "}
                      {item.recipe.totalNutrients.CHOCDF.unit}
                    </Text>
                    <Text
                      fontSize="0.65rem"
                      fontWeight="600"
                      textTransform="uppercase"
                    >
                      Carbs
                    </Text>
                  </GridItem>

                  <GridItem>
                    <Text fontSize="xs">
                      {Math.round(item.recipe.totalNutrients.PROCNT.quantity)}{" "}
                      {item.recipe.totalNutrients.PROCNT.unit}
                    </Text>
                    <Text
                      fontSize="0.65rem"
                      fontWeight="600"
                      textTransform="uppercase"
                    >
                      Protein
                    </Text>
                  </GridItem>

                  <GridItem>
                    <Text fontSize="xs">
                      {Math.round(item.recipe.totalNutrients.FAT.quantity)}{" "}
                      {item.recipe.totalNutrients.FAT.unit}
                    </Text>
                    <Text
                      fontSize="0.65rem"
                      fontWeight="600"
                      textTransform="uppercase"
                    >
                      Fat
                    </Text>
                  </GridItem>

                  <GridItem>
                    <Text fontSize="xs">
                      {Math.round(item.recipe.totalNutrients.CHOLE.quantity)}{" "}
                      {item.recipe.totalNutrients.CHOLE.unit}
                    </Text>
                    <Text
                      fontSize="0.65rem"
                      fontWeight="600"
                      textTransform="uppercase"
                    >
                      Cholesterol
                    </Text>
                  </GridItem>

                  <GridItem>
                    <Text fontSize="xs">
                      {Math.round(item.recipe.totalNutrients.NA.quantity)}{" "}
                      {item.recipe.totalNutrients.NA.unit}
                    </Text>
                    <Text
                      fontSize="0.65rem"
                      fontWeight="600"
                      textTransform="uppercase"
                    >
                      Sodium
                    </Text>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};
