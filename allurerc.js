export default {
  // Общий заголовок
  name: "Демонстрация деревьев в Allure 3",
  // Путь к папке с отчётом
  output: "./allure-report",
  // Путь к файлу с историей
  historyPath: "./test-history/history.jsonl",
  // Отчёты
  plugins: {
    // Отчёт с группировкй по фичам
    "awesome-by-feature": {
      import: "@allurereport/plugin-awesome",
      options: {
        // Имя отчёта
        reportName: "Группируем по фичам",
        // Язык отчёта
        reportLanguage: "ru",
        // Поле, по которому группируются тесты в отчёте
        groupBy: ["feature"],
      },
    },
    // Отчёт с группировкой по сюитам
    "awesome-by-suite": {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Группируем по сюитам",
        reportLanguage: "ru",
        groupBy: ["suite"],
      },
    },
    // Классический отчёт
    "classic view": {
      import: "@allurereport/plugin-classic",
      options: {
        reportName: "Классическое отображение",
        reportLanguage: "ru",
      },
    },
    // Отчёт с группировкой по уровням
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

