import { Card, Button, Form, Row, Col, Container } from "react-bootstrap";
import fullRecipeList from "../assets/Recipes";
import { useEffect, useState } from "react";

const Search = ({ setSelectedRecipe }) => {
  const [recipesList, setRecipesList] = useState(fullRecipeList);
  const [query, setQuery] = useState(""); // String
  const [minServingsFilter, setMinServingsFilter] = useState(""); // Number
  const [maxComplexityFilter, setMaxComplexityFilter] = useState(""); // Number
  const [maxHoursFilter, setMaxHoursFilter] = useState(""); // Number
  const [equipmentFilter, setEquipmentFilter] = useState(""); // String
  const [ingredientFilter, setIngredientFilter] = useState(""); // String

  useEffect(() => {
    // Begin with the full list of recipes
    let filteredRecipes = fullRecipeList;

    // Only include recipes with names that contain the keyword the user entered
    if (query)
      filteredRecipes = filteredRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      );

    // Only include recipes that make at least as many servings as the user wants
    if (minServingsFilter)
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.servings >= minServingsFilter
      );

    // Only include recipes that are less complex than the user's entered complexity
    if (maxComplexityFilter)
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.complexity < maxComplexityFilter
      );

    // Only include recipes that are less than the user's max time
    if (maxHoursFilter)
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.hours < maxHoursFilter
      );

    // Only include recipes that contain equipment names with the user's entered equipment
    if (equipmentFilter)
      filteredRecipes = filteredRecipes.filter(
        (recipe) =>
          recipe.equipment.filter((equipmentName) =>
            equipmentName.toLowerCase().includes(equipmentFilter.toLowerCase())
          ).length > 0
      );

    // Only include recipes that contain ingredients names with the user's entered ingredient
    if (ingredientFilter)
      filteredRecipes = filteredRecipes.filter(
        (recipe) =>
          recipe.ingredients.filter((ingredientName) =>
            ingredientName
              .toLowerCase()
              .includes(ingredientFilter.toLowerCase())
          ).length > 0
      );

    // Show the user the recipes filtered according to their entered filters and search query
    setRecipesList(filteredRecipes);
  }, [
    query,
    minServingsFilter,
    maxComplexityFilter,
    maxHoursFilter,
    equipmentFilter,
    ingredientFilter,
  ]);

  const resetFiltersAndQuery = () => {
    setQuery("");
    setMinServingsFilter("");
    setMaxComplexityFilter("");
    setMaxHoursFilter("");
    setEquipmentFilter("");
    setIngredientFilter("");
  };

  return (
    <>
      <h1>Cooking Companion</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Search Query</Form.Label>
          <Form.Control
            type="text"
            placeholder="lasagna"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Minimum Servings</Form.Label>
          <Form.Control
            type="number"
            placeholder="4"
            value={minServingsFilter}
            onChange={(event) => setMinServingsFilter(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Maximum Complexity (Out of 5)</Form.Label>
          <Form.Control
            type="number"
            placeholder="3"
            value={maxComplexityFilter}
            onChange={(event) => setMaxComplexityFilter(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Maximum Completion Time (Hours)</Form.Label>
          <Form.Control
            type="number"
            placeholder="1.5"
            value={maxHoursFilter}
            onChange={(event) => setMaxHoursFilter(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Required Equipment</Form.Label>
          <Form.Control
            type="text"
            placeholder="baking dish"
            value={equipmentFilter}
            onChange={(event) => setEquipmentFilter(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contains Ingredient</Form.Label>
          <Form.Control
            type="text"
            placeholder="beef"
            value={ingredientFilter}
            onChange={(event) => setIngredientFilter(event.target.value)}
          />
        </Form.Group>
      </Form>
      <Button className="mb-3" onClick={() => resetFiltersAndQuery()}>
        Reset All
      </Button>
      <Row className="g-4">
        {recipesList.map((recipe, index) => {
          return (
            <Col md="4" key={index}>
              <Card style={{ margin: 20 }}>
                <Card.Img
                  style={{ objectFit: "cover" }}
                  height={200}
                  variant="top"
                  src={recipe.imageURL}
                />
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Text>Time: {recipe.hours} hours</Card.Text>
                  <Card.Text>Complexity: {recipe.complexity}/5</Card.Text>
                  <Card.Text>Servings: {recipe.servings}</Card.Text>
                </Card.Body>
                <Button
                  className="m-3"
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  View Details
                </Button>
                <Button className="m-3" href={recipe.source}>
                  View Original Source
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Search;
