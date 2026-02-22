import allure

@allure.feature("Feature 1")
@allure.suite("Suite 1")
@allure.title("Первый тест")
def test_allure_3_first():
    pass


@allure.feature("Feature 1")
@allure.suite("Suite 2")
@allure.title("Второй тест")
def test_allure_3_second():
    pass


@allure.feature("Feature 2")
@allure.suite("Suite 2")
@allure.title("Третий тест")
def test_allure_3_third():
    pass