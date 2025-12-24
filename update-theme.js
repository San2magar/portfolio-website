// Run this to update all component colors to light theme
// Restart the dev server after running: npm run dev

const fs = require("fs");
const path = require("path");

const componentsDir = "./client/src/Components";

const colorMappings = {
  // Dark backgrounds to light
  "bg-gray-900": "bg-white",
  "bg-gray-800": "bg-gradient-to-br from-blue-50 to-indigo-50",
  "bg-gray-700": "bg-gray-100",

  // Dark text to light
  "text-white": "text-gray-900",
  "text-gray-300": "text-gray-700",
  "text-gray-200": "text-gray-800",
  "text-gray-400": "text-gray-600",

  // Blue shades
  "text-blue-400": "text-blue-600",
  "text-blue-300": "text-indigo-700",
  "from-blue-400": "from-blue-600",
  "to-cyan-400": "to-indigo-600",
  "from-blue-500": "from-blue-600",
  "to-cyan-500": "to-indigo-600",
  "border-blue-400": "border-blue-600",
  "hover:bg-blue-600": "hover:bg-blue-600",
  "bg-blue-600": "bg-blue-600",

  // Gradients
  "from-gray-900": "from-blue-50",
  "via-blue-950": "via-indigo-50",
  "to-gray-900": "to-purple-50",
  "from-gray-800": "from-gray-50",
  "to-gray-800": "to-gray-100",

  // Borders
  "border-gray-700": "border-gray-200",
  "border-gray-800": "border-gray-300",

  // Hover states
  "hover:text-blue-400": "hover:text-blue-600",
  "hover:border-blue-500": "hover:border-blue-600",
};

console.log("Theme update mappings created. Apply manually to components.");
