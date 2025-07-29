"use client";
import React, { useState } from "react";
import { recipes } from "@/data/recipes";

import ProductIcon from "@/components/ProductIcon";

const pastelGradient =
  "bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 min-h-screen w-full absolute inset-0 -z-10 animate-gradient-move";

const floatingShapes = (
  <>
    <svg
      className="absolute top-10 left-10 w-24 h-24 opacity-20 animate-float-slow"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="50" fill="#FBCFE8" />
    </svg>
    <svg
      className="absolute bottom-20 right-20 w-32 h-32 opacity-10 animate-float-fast"
      viewBox="0 0 100 100"
    >
      <rect width="100" height="100" rx="30" fill="#A7F3D0" />
    </svg>
    <svg
      className="absolute top-1/2 left-1/3 w-20 h-20 opacity-15 animate-float-mid"
      viewBox="0 0 100 100"
    >
      <ellipse cx="50" cy="50" rx="50" ry="30" fill="#C7D2FE" />
    </svg>
  </>
);

export default function RecipesPage() {
  const [expandedRecipe, setExpandedRecipe] = useState<string | null>(null);
  const [selectedMealType, setSelectedMealType] = useState<string>("All");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>("All");

  // const pageTitle = "Kid-Friendly Recipes | MomWise with Sophia";
  // const pageUrl =
  //   typeof window !== "undefined"
  //     ? window.location.href
  //     : "https://momwisewithsophia.com/recipes";

  // Get unique meal types and age groups for filtering
  const mealTypes = [
    "All",
    ...new Set(recipes.map((recipe) => recipe.mealType)),
  ];
  const ageGroups = [
    "All",
    ...new Set(recipes.map((recipe) => recipe.ageGroup)),
  ];

  // Filter recipes based on selected filters
  const filteredRecipes = recipes.filter((recipe) => {
    const mealMatch =
      selectedMealType === "All" || recipe.mealType === selectedMealType;
    const ageMatch =
      selectedAgeGroup === "All" || recipe.ageGroup === selectedAgeGroup;
    return mealMatch && ageMatch;
  });

  const toggleRecipe = (recipeId: string) => {
    setExpandedRecipe(expandedRecipe === recipeId ? null : recipeId);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <div className={pastelGradient} />
      {floatingShapes}
      <main className="w-full max-w-6xl mx-auto py-20 px-4 z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-500 text-center drop-shadow-lg animate-fade-in">
          🍎 Kid-Friendly Recipes
        </h1>
        <p className="mb-8 text-xl text-gray-600 text-center font-light animate-fade-in">
          Nutritious, delicious recipes with complete instructions, ingredients,
          and special mom tips!
        </p>

        {/* Filter Section */}
        <div className="mb-8 flex flex-wrap justify-center gap-4 animate-fade-in-up">
          {/* Meal Type Filter */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/40">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Meal Type
            </label>
            <select
              value={selectedMealType}
              onChange={(e) => setSelectedMealType(e.target.value)}
              className="bg-white/90 border border-purple-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              {mealTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Age Group Filter */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/40">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Age Group
            </label>
            <select
              value={selectedAgeGroup}
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              className="bg-white/90 border border-purple-200 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              {ageGroups.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-center text-gray-600 mb-6">
          Showing {filteredRecipes.length} recipe
          {filteredRecipes.length !== 1 ? "s" : ""}
        </p>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-up">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/40 overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              {/* Recipe Header */}
              <div className="p-6 border-b border-purple-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <ProductIcon type={recipe.iconType} className="w-16 h-16" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {recipe.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-3">
                      {recipe.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                        {recipe.mealType}
                      </span>
                      <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
                        {recipe.ageGroup}
                      </span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                        ⏱️ {recipe.prepTime}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        🍽️ {recipe.servings}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleRecipe(recipe.id)}
                      className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full font-medium shadow hover:from-purple-500 hover:to-pink-500 transition-all duration-300 text-sm"
                    >
                      {expandedRecipe === recipe.id
                        ? "Hide Recipe"
                        : "View Full Recipe"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Recipe Details */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  expandedRecipe === recipe.id
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 space-y-6">
                  {/* Nutrition Benefits */}
                  <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
                    <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                      🌱 Nutrition Benefits
                    </h3>
                    <p className="text-green-700 text-sm">
                      {recipe.nutritionBenefits}
                    </p>
                  </div>

                  {/* Ingredients */}
                  <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                    <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                      🥄 Ingredients
                    </h3>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-blue-700">
                            {ingredient.item}
                          </span>
                          <span className="text-blue-600 font-medium">
                            {ingredient.quantity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200">
                    <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                      👩‍🍳 Instructions
                    </h3>
                    <ol className="space-y-2">
                      {recipe.instructions.map((instruction, index) => (
                        <li key={index} className="flex gap-3 text-sm">
                          <span className="bg-purple-200 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-purple-700">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Mom Tips */}
                  <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
                    <h3 className="font-bold text-pink-800 mb-3 flex items-center gap-2">
                      💝 Special Mom Tips
                    </h3>
                    <ul className="space-y-2">
                      {recipe.momTips.map((tip, index) => (
                        <li key={index} className="flex gap-3 text-sm">
                          <span className="text-pink-500 flex-shrink-0 mt-1">
                            💡
                          </span>
                          <span className="text-pink-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/40 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🌟 Love these recipes?
          </h3>
          <p className="text-gray-600 mb-6">
            Follow me on Instagram for more daily cooking inspiration and tips!
          </p>
          <a
            href="https://www.instagram.com/momwisewithsophia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-transform duration-300"
          >
            📸 Follow @momwisewithsophia
          </a>
        </div>
      </main>
    </div>
  );
}
