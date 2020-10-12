module.exports = {
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "^ui(.*)$": "<rootDir>/ui$1",
    "^components(.*)$": "<rootDir>/components$1",
    "^utils(.*)$": "<rootDir>/utils$1",
    "^hooks(.*)$": "<rootDir>/hooks$1",
    "^fetch_api(.*)$": "<rootDir>/fetch_api$1",
  },
};
