import {
  Card,
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  Modal,
} from "react-bootstrap";
import fullRecipeList from "../assets/Recipes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ setSelectedRecipe }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [recipesList, setRecipesList] = useState(fullRecipeList);
  const [query, setQuery] = useState(""); // String
  const [minServingsFilter, setMinServingsFilter] = useState(""); // Number
  const [maxComplexityFilter, setMaxComplexityFilter] = useState(""); // Number
  const [maxHoursFilter, setMaxHoursFilter] = useState(""); // Number
  const [equipmentFilter, setEquipmentFilter] = useState(""); // String
  const [ingredientFilter, setIngredientFilter] = useState(""); // String

  // Scroll to the top of the page when it first renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update the list of shown recipes when the search query or filters are changed
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

    // Only include recipes that are less than or equally complex as the user's entered complexity
    if (maxComplexityFilter)
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.complexity <= maxComplexityFilter
      );

    // Only include recipes that are less than or equal the user's max time
    if (maxHoursFilter)
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.hours <= maxHoursFilter
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

  const resetFilters = () => {
    setMinServingsFilter("");
    setMaxComplexityFilter("");
    setMaxHoursFilter("");
    setEquipmentFilter("");
    setIngredientFilter("");
  };

  const redirectToDetails = (recipe) => {
    setSelectedRecipe(recipe);
    navigate("/details");
  };

  return (
    <>
      <Modal id="searchFilterModal" show={showModal}>
        <Modal.Header>
          <Modal.Title>Apply Search Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Minimum Servings</Form.Label>
              <Form.Control
                type="number"
                placeholder="4"
                min="0"
                max="1000"
                value={minServingsFilter}
                onChange={(event) => setMinServingsFilter(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Maximum Complexity (Out of 5)</Form.Label>
              <Form.Control
                type="number"
                placeholder="3"
                min="0"
                max="5"
                value={maxComplexityFilter}
                onChange={(event) => setMaxComplexityFilter(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Maximum Completion Time (Hours)</Form.Label>
              <Form.Control
                type="number"
                placeholder="1.5"
                min="0"
                max="48"
                value={maxHoursFilter}
                onChange={(event) => setMaxHoursFilter(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Required Equipment</Form.Label>
              <Form.Control
                type="text"
                maxLength="50"
                placeholder="baking dish"
                value={equipmentFilter}
                onChange={(event) => setEquipmentFilter(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contained Ingredient</Form.Label>
              <Form.Control
                type="text"
                maxLength="50"
                placeholder="beef"
                value={ingredientFilter}
                onChange={(event) => setIngredientFilter(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={resetFilters}>
            Clear Filters
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <h1 style={{ textAlign: "center" }}>Cooking Companion</h1>
      <Form style={{ marginTop: 50 }}>
        <InputGroup className="mb-3">
          <Button
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            variant="secondary"
            onClick={() => setShowModal(true)}
          >
            Filters
          </Button>
          <Form.Control
            type="text"
            maxLength="100"
            placeholder="Search..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Button
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            variant="danger"
            onClick={() => setQuery("")}
          >
            Clear
          </Button>
        </InputGroup>
        {(minServingsFilter ||
          maxComplexityFilter ||
          maxHoursFilter ||
          equipmentFilter ||
          ingredientFilter) && (
          <InputGroup>
            {minServingsFilter && (
              <InputGroup.Text>
                Minimum Servings: {minServingsFilter}
              </InputGroup.Text>
            )}
            {maxComplexityFilter && (
              <InputGroup.Text>
                Maximum Complexity: {maxComplexityFilter}
              </InputGroup.Text>
            )}
            {maxHoursFilter && (
              <InputGroup.Text>
                Maximum Number of Hours: {maxHoursFilter}
              </InputGroup.Text>
            )}
            {equipmentFilter && (
              <InputGroup.Text>Requires: {equipmentFilter}</InputGroup.Text>
            )}
            {ingredientFilter && (
              <InputGroup.Text>Contains: {ingredientFilter}</InputGroup.Text>
            )}
          </InputGroup>
        )}
      </Form>

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
                  style={{margin: "0px 20px"}}
                  onClick={() => redirectToDetails(recipe)}
                >
                  View Details
                </Button>
                <Button style={{margin: "10px 20px"}} href={recipe.source}>
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
