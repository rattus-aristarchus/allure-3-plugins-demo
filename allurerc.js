export default {
  name: "Демонстрация деревьев в Allure 3",
  output: "./allure-report",
  historyPath: "./test-history/history.jsonl",
  plugins: {
    "awesome-by-feature": {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Группируем по фичам",
        reportLanguage: "ru",
        groupBy: ["epic", "feature", "story"],
      },
    },
    "awesome-by-suite": {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Группируем по сюитам",
        reportLanguage: "ru",
        groupBy: ["suite"],
      },
    },
  },
};

