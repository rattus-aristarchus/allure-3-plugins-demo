import allure

# Сортировка по фичам:
@allure.feature("Feature 1")
# Сортировка по сюитам:
@allure.suite("Suite 1")
@allure.title("Первый тест")
def test_first():
    pass


@allure.feature("Feature 2")
@allure.suite("Suite 2")
@allure.title("Второй тест")
def test_second():
    pass


@allure.feature("Feature 1")
@allure.suite("Suite 2")
@allure.title("Третий тест")
def test_third():
    pass


@allure.label("level", "UI")
@allure.title("Тест на UI")
def test_ui():
    pass


@allure.label("level", "API")
@allure.title("Тест на API")
def test_api():
    pass
