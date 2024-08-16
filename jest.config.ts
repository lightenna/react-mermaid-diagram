module.exports = {
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/node_modules/"],
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
    },
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        "/node_modules/(?!(mermaid))/"
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};