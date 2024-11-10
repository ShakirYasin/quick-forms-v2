export default {
  "app/**/*.{js,jsx,ts,tsx}": (files) => {
    return [
      `eslint --fix ${files.join(" ")}`,
      `prettier --write ${files.join(" ")}`,
    ];
  },
  "app/**/*.{css,scss}": ["prettier --write"],
  "{package.json,*.yml,*.yaml,*.md}": ["prettier --write"],
};
