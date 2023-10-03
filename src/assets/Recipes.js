const recipes = [
  {
    name: "Easy Homemade Lasagna",
    hours: 1.75,
    imageURL:
      "https://www.spendwithpennies.com/wp-content/uploads/2022/12/1200-Lasagna-SpendWithPennies-24-1.jpeg",
    complexity: 1.5,
    servings: 12,
    source: "https://www.spendwithpennies.com/easy-homemade-lasagna/",
    ingredients: [
      "12 lasagna noodles, uncooked",
      "4 cups mozzarella cheese, shredded and divided",
      "1/2 cup parmesan cheese, shredded and divided",
      "1/2 pound lean ground beef",
      "1/2 pound Italian sausage",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "36 ounces pasta sauce",
      "2 tablespoons tomato paste",
      "1 teaspoon Italian seasoning",
      "2 cups ricotta cheese",
      "1/4 cup fresh parsley, chopped",
      "1 egg, beaten",
      "3/4 teaspoon salt, divided",
      "1/4 teaspoon black pepper",
    ],
    instructions: [
      {
        text: "Preheat the oven to 350°F.",
        button: {
          text: "Preheat oven",
          value: "350",
          location: "oven",
        },
      },
      {
        text: "In a large pot of salted water, boil lasagna noodles until al dente according to package directions. Drain, rinse under cold water, and set aside.",
        button: {
          text: "Turn on back-right burner",
          value: "medium",
          location: "back-right",
        },
      },
      {
        text: "In a large skillet, brown beef, sausage, onion, and garlic over medium-high heat until no pink remains. Drain any fat.",
        button: {
          text: "Turn on front-left burner",
          value: "medium-high",
          location: "front-left",
        },
      },
      {
        text: "Stir in the pasta sauce, tomato paste, Italian seasoning, 1/2 teaspoon of salt, and 1/4 teaspoon of black pepper. Simmer uncovered over medium heat for 5 minutes or until thickened.",
        button: {
          text: "Turn down heat of front-left burner",
          value: "medium",
          location: "front-left",
        },
      },
      {
        text: "In a separate bowl, combine 1 1/2 cups mozzarella, 1/4 cup parmesan cheese, ricotta, parsley, egg, and 1/4 teaspoon salt.",
      },
      {
        text: "Spread 1 cup of the meat sauce in a 9x13 pan or casserole dish. Top it with 3 lasagna noodles. Layer with 1/3 of the ricotta cheese mixture and 1 cup of meat sauce. Repeat twice more. Finish with 3 noodles topped with remaining sauce.",
      },
      {
        text: "Cover with foil and bake for 45 minutes.",
      },
      {
        text: "Remove the foil and sprinkle with the remaining 2 1/2 cups mozzarella cheese and 1/4 cup parmesan cheese. Bake for an additional 15 minutes or until browned and bubbly.",
      },
      {
        text: "Rest for at least 15 minutes before cutting.",
      },
    ],
    nutritionFacts: [
      "377 calories",
      "28g carbohydrates",
      "29g protein",
      "16g fat",
      "7g saturated fat",
      "71mg cholesterol",
      "857mg sodium",
      "492mg potassium",
      "2g fiber",
      "4g sugar",
      "805IU vitamin A",
      "7.4mg vitamin C",
      "526mg calcium",
      "2.2mg iron",
    ],
    equipment: [
      "1 large skillet",
      "1 bowl",
      "1 large pot",
      "9 x 13 baking dish",
      "oven",
      "aluminum foil",
    ],
  },
];

export default recipes;
