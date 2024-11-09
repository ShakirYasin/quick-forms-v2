export default {
  "src/**/*.{js,jsx,ts,tsx}": (files) => {
    return [
      `eslint --fix ${files.join(" ")}`,
      `prettier --write ${files.join(" ")}`,
    ];
  },
  "app/**/*.{css,scss}": ["prettier --write"],
  "{package.json,*.yml,*.yaml,*.md}": ["prettier --write"],
  "app/**/*.{png,jpeg,jpg,gif,svg}": [
    // Optional: Add image optimization
    // "imagemin-lint-staged"
  ],
};
