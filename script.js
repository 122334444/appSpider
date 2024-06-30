document.addEventListener('DOMContentLoaded', () => {
    const ingredients = [
        'Tomato', 'Onion', 'Garlic', 'Chicken', 'Rice', 'Bell Pepper',
        'Carrot', 'Potato', 'Cheese', 'Milk', 'Butter', 'Egg'
    ];

    const recipes = [
        {
            name: 'Tomato Soup',
            ingredients: ['Tomato', 'Onion', 'Garlic'],
            image: url='1.png',
            procedure: 'Boil tomatoes and blend with onion and garlic. Serve hot.'
        
        },
        {
            name: 'Chicken Curry',
            ingredients: ['Chicken', 'Onion', 'Garlic', 'Tomato'],
            image: 'https://via.placeholder.com/150',
            procedure: 'Cook chicken with onions, garlic, and tomatoes. Serve with rice.'
        },
        {
            name: 'Fried Rice',
            ingredients: ['Rice', 'Onion', 'Bell Pepper', 'Carrot'],
            image: 'https://via.placeholder.com/150',
            procedure: 'Stir-fry vegetables with rice. Serve hot.'
        },
        {
            name: 'Mashed Potatoes',
            ingredients: ['Potato', 'Butter', 'Milk'],
            image: 'https://via.placeholder.com/150',
            procedure: 'Boil potatoes and mash with butter and milk. Season to taste.'
        },
        {
            name: 'Omelette',
            ingredients: ['Egg', 'Onion', 'Bell Pepper', 'Cheese'],
            image: 'https://via.placeholder.com/150',
            procedure: 'Beat eggs and cook with chopped onions, bell peppers, and cheese.'
        },
        {
            name: 'Garlic Bread',
            ingredients: ['Garlic', 'Butter', 'Bread'],
            image: 'https://via.placeholder.com/150',
            procedure: 'Spread garlic butter on bread and bake until golden brown.'
        },
        {
            name: 'Chicken Fried Rice',
            ingredients: ['Chicken', 'Rice', 'Onion', 'Carrot', 'Bell Pepper'],
            image: 'https://via.placeholder.com/150',
            procedure: 'Cook chicken and stir-fry with rice, onions, carrots, and bell peppers.'
        },
        {
            name: 'Grilled Cheese Sandwich',
            ingredients: ['Cheese', 'Butter', 'Bread'],
            image: 'https://via.placeholder.com/150',
            procedure: 'Place cheese between bread slices, butter the outside, and grill until golden.'
        },
        {
            name: 'Cheesy Garlic Mashed Potatoes',
            ingredients: ['Potato', 'Butter', 'Milk', 'Garlic', 'Cheese'],
            image: 'https://via.placeholder.com/150',
            procedure: 'Boil potatoes and mash with butter, milk, garlic, and cheese.'
        },
        {
            name: 'Vegetable Stir Fry',
            ingredients: ['Bell Pepper', 'Carrot', 'Onion', 'Garlic'],
            image: 'https://via.placeholder.com/150',
            procedure: 'Stir-fry bell peppers, carrots, onions, and garlic. Serve with rice or noodles.'
        }
    ];

    const ingredientListDiv = document.getElementById('ingredient-list');
    const recipeResultsDiv = document.getElementById('recipe-results');

    ingredients.forEach(ingredient => {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.classList.add('ingredient');
        ingredientDiv.innerHTML = `
            <input type="checkbox" id="${ingredient}" name="ingredients" value="${ingredient}">
            <label for="${ingredient}">${ingredient}</label>
        `;
        ingredientListDiv.appendChild(ingredientDiv);
    });

    document.getElementById('find-recipes').addEventListener('click', () => {
        const selectedIngredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(checkbox => checkbox.value);
        const matchingRecipes = recipes.filter(recipe => selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient)));
        
        recipeResultsDiv.innerHTML = '';
        if (matchingRecipes.length > 0) {
            matchingRecipes.forEach(recipe => {
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe');
                recipeDiv.innerHTML = `
                    <h2>${recipe.name}</h2>
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                    <p>${recipe.procedure}</p>
                `;
                recipeResultsDiv.appendChild(recipeDiv);
            });
        } else {
            recipeResultsDiv.innerHTML = '<p>No matching recipes found.</p>';
        }
    });
});