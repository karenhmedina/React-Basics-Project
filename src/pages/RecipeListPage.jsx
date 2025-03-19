import { Center, Heading, Box, Grid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItemCard } from "../components/RecipeItemCard";
import { TextInput } from "../components/ui/TextInput";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const filteredRecipes = data.hits.filter((item) => {
    return (
      item.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
      item.recipe.healthLabels.some((healthLabel) =>
        healthLabel.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  });

  const handleChange = (event) => setSearchField(event.target.value);

  return (
    <Box minHeight="100vh" bgColor="pink.50">
      <Heading textAlign="center" padding={8}>
        My Recipe App
      </Heading>

      <Center margin={8}>
        <TextInput changeFn={handleChange} />
      </Center>

      <Center padding={8}>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
          width={{ base: "80%", sm: "60%", md: "75%", lg: "85%" }}
        >
          {filteredRecipes.map((item) => (
            <RecipeItemCard
              key={item.recipe.label}
              item={item}
              clickFn={clickFn}
            />
          ))}
        </Grid>
      </Center>
    </Box>
  );
};
