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
          value: 350,
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
  {
    name: "Oven Baked Chicken Breast",
    hours: 0.5,
    imageURL:
      "https://www.recipetineats.com/wp-content/uploads/2018/03/Oven-Baked-Chicken-Breast_8-1.jpg",
    complexity: 1,
    servings: 4,
    source: "https://www.recipetineats.com/oven-baked-chicken-breast/",
    ingredients: [
      "4 chicken breasts",
      "2 teaspoons olive oil, divided",
      "1 1/2 tablespoons brown sugar",
      "1 teaspoon paprika",
      "1 tsp dried oregano or thyme",
      "1/4 teaspoon garlic powder",
      "1/2 teaspoon salt",
      "1/2 teaspoon black pepper",
      "finely chopped parsley (optional)",
    ],
    instructions: [
      {
        text: "Preheat oven to 425°F.",
        button: {
          text: "Preheat oven",
          value: 425,
          location: "oven",
        },
      },
      {
        text: "Pound chicken to 1.5cm at the thickest part using a rolling pin, meat mallet, or your fist.",
      },
      {
        text: "Mix brown sugar, paprika, oregano/thyme, garlic powder, salt, and pepper together to create the seasoning.",
      },
      {
        text: "Line tray with foil and baking/parchment paper. Place chicken upside down on tray. Drizzle chicken with half the oil. Rub over with fingers. Sprinkle with seasoning.",
      },
      {
        text: "Flip chicken. Drizzle with the rest of the oil, rub with fingers, and sprinkle with seasoning, covering as much of the surface area as you can.",
      },
      {
        text: "Bake 18 minutes, or until internal temperature is 165°F using a meat thermometer.",
      },
      {
        text: "Remove from oven and immediately transfer chicken to serving plates.",
      },
      {
        text: "Wait 3-5 minutes before serving. Top with parsley if desired.",
      },
    ],
    nutritionFacts: [
      "286 calories",
      "4g carbohydrates",
      "46g protein",
      "7g fat",
      "1g saturated fat",
      "1g polyunsaturated fat",
      "1g monounsaturated fat",
      "127mg cholesterol",
      "403mg sodium",
      "397mg potassium",
      "4g sugar",
      "325IU vitamin A",
      "1.7mg vitamin C",
      "11mg calcium",
      "0.6mg iron",
    ],
    equipment: [
      "oven",
      "meat mallet or rolling pin",
      "aluminum foil",
      "baking/parchment paper",
      "meat thermometer",
      "baking tray",
    ],
  },
  {
    name: "Creamy Homemade Baked Mac and Cheese",
    hours: 0.75,
    imageURL:
      "https://www.allrecipes.com/thmb/55m3_k4qDl5NZsToQ6eNyOcQBT0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/11679-homemade-mac-and-cheese-chef-mo-3x2-1-f0f5582e8dd549d18e56b95cece93045.jpg",
    complexity: 3,
    servings: 4,
    source: "https://www.allrecipes.com/recipe/11679/homemade-mac-and-cheese/",
    ingredients: [
      "8 ounces uncooked elbow macaroni",
      "1/4 cup salted butter",
      "3 tablespoons all-purpose flour",
      "2 1/2 cups milk, or more as needed",
      "2 cups sharp cheddar cheese, shredded",
      "1/2 cup parmesan cheese, finely grated",
      "salt and ground black pepper to taste (optional)",
    ],
    instructions: [
      {
        text: "Preheat oven to 350°F. Grease an 8-inch square baking dish.",
        button: {
          text: "Preheat oven",
          value: 350,
          location: "oven",
        },
      },
      {
        text: "Bring a large pot of lightly salted water to a boil. Add macaroni and simmer, stirring occasionally, until tender yet firm to the bite, about 8 minutes. Drain and transfer to the prepared baking dish.",
        button: {
          text: "Turn on back-right burner",
          value: "medium",
          location: "back-right",
        },
      },
      {
        text: "While the macaroni is cooking, melt 1/4 cup butter in a medium skillet over low heat. Whisk in flour and stir until the mixture becomes paste-like and light golden brown, 3 to 5 minutes.",
        button: {
          text: "Turn on front-left burner",
          value: "low",
          location: "front-left",
        },
      },
      {
        text: "Gradually whisk 2 1/2 cups milk into the flour mixture, and bring to a simmer. Stir in shredded cheddar and finely grated parmesan cheeses; season with salt and pepper. Cook and stir over low heat until cheese is melted and sauce has thickened, 3 to 5 minutes, adding up to 1/2 cup more milk if needed. Pour cheese sauce over macaroni and stir until well combined.",
      },
      {
        text: "Melt 2 tablespoons butter in a small skillet over medium heat. Add bread crumbs; cook and stir until well coated and browned. Spread bread crumbs over macaroni and cheese, then sprinkle with paprika.",
        button: {
          text: "Turn on front-right burner",
          value: "medium",
          location: "front-right",
        },
      },
      {
        text: "Bake in the preheated oven until topping is golden brown and macaroni and cheese is bubbling, about 30 minutes.",
      },
    ],
    nutritionFacts: [
      "48g total fat",
      "30g saturated fat",
      "142mg cholesterol",
      "881mg sodium",
      "65g carbohydrate",
      "3g fiber",
      "37g protein",
      "1mg vitamin C",
      "865mg calcium",
      "3mg iron",
      "522mg potassium",
    ],
    equipment: [
      "8-inch square baking dish",
      "oven",
      "large pot",
      "medium skillet",
      "small skillet",
    ],
  },
  {
    name: "",
    hours: 1,
    imageURL: "",
    complexity: 1,
    servings: 1,
    source: "",
    ingredients: ["", ""],
    instructions: [
      {
        text: "",
        button: {
          text: "",
          value: "",
          location: "",
        },
      },
      {
        text: "",
      },
    ],
    nutritionFacts: ["", ""],
    equipment: ["", ""],
  },
];

export default recipes;
