module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended', // If you're using TypeScript
      'plugin:tailwindcss/recommended', // For TailwindCSS
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      'tailwindcss',
    ],
    rules: {
      // Customize rules as needed, such as:
      'tailwindcss/no-custom-classname': 'off',
    },
  };
  