module.exports = function(config) {
  config.set({
    testRunner: "jest",
    mutator: "javascript",
    transpilers: [],
    reporters: ["clear-text", "progress"],
    packageManager: "npm",
    coverageAnalysis: "off",
    mutate: ["src/**/*.js", "!src/**/*.test.js"]
  });
};
