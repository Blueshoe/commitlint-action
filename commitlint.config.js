module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
      "youtrack-issue-in-scope": [2, "always"],
    },
    plugins: [
      {
        rules: {
          "youtrack-issue-in-scope": ({ scope }) => {
            return [
              scope &&
                scope.match(
                  /^#((?!([A-Z0-9a-z]{1,10})-?$)[A-Z]{1}[A-Z0-9]+-[1-9][0-9]*)$/g
                ),
              "Your scope should contain a YouTrack issue number (ex. feat(#ABC-123) : description)",
            ];
          },
        },
      },
    ],
  };
  