export default {
  // Using more specific micromatch patterns
  "src/**/*.{js,jsx,ts,tsx}": (files) => {
    return [
      `eslint --fix ${files.join(" ")}`,
      `prettier --write ${files.join(" ")}`,
      // Optional: Add test related to changed files
      // `npm test -- --findRelatedTests ${files.join(' ')}`,
    ];
  },
  // Handle CSS/SCSS files
  "app/**/*.{css,scss}": ["prettier --write"],
  // Handle JSON, MD, YAML files
  "{package.json,*.yml,*.yaml,*.md}": ["prettier --write"],
  // Optimize images
  "app/**/*.{png,jpeg,jpg,gif,svg}": [
    // Optional: Add image optimization
    // "imagemin-lint-staged"
  ],
};
