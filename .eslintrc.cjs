module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        project: "./tsconfig.json",
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        "react/react-in-jsx-scope": 0
    }
}
