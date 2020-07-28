## Подготовка среды

### Mac OS

1. Установить [Homebrew](https://brew.sh):
    ```shell
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```

2. Установить [Yarn](https://yarnpkg.com/lang/en/):
    ```shell
    brew install yarn
    ```

### Windows

1. [Скачать](https://yarnpkg.com/lang/en/docs/install/#windows-stable) и установить Yarn.

## Как начать пользоваться

1. Перейти в папку проекта.

2. Установить зависимости:
    ```shell
    yarn install
    ```

3. Запустить сайт c примерами:
    ```shell
    yarn start
    ```

4. Сайт будет автоматически открыт в браузере по адресу [http://localhost:1234](http://localhost:1234).

5. Чтобы собрать билд дизайн-системы, нужно выполнить:
    ```shell
    yarn build
    ```

6. Css файлы будут созданы в папке /dist в папке проекта.
