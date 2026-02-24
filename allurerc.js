export default {
  // Общий заголовок
  name: "Демонстрация деревьев в Allure 3",
  // Путь к папке с отчётом
  output: "./allure-report",
  // Путь к файлу с историей
  historyPath: "./test-history/history.jsonl",
  // Плагины
  plugins: {
    // Плагин для группировки по фичам
    "awesome-by-feature": {
      import: "@allurereport/plugin-awesome",
      options: {
        // Имя отчёта
        reportName: "Группируем по фичам",
        // Язык отчёта
        reportLanguage: "ru",
        // Поле, по которому группируются тесты в отчёте
        groupBy: ["epic", "feature", "story"],
      },
    },
    // Плагин для группировки по сюитам
    "awesome-by-suite": {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Группируем по сюитам",
        reportLanguage: "ru",
        groupBy: ["suite"],
      },
    },
    // Плагин для классического отображения
    "classic view": {
      import: "@allurereport/plugin-classic",
      options: {
        reportName: "Классическое отображение",
        reportLanguage: "ru",
      },
    },
    // Плагин для отображения тестов по уровням
    "layer view": {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Группируем по уровням",
        reportLanguage: "ru",
        groupBy: ["level"],
      },
    },
  },
};

