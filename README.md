# ModulBank UI React Components

## Импорт компонентов:

```sh
import {Button, Input} from 'modul-ui';
// или
import Button from 'modul-ui/Button';
import Input from 'modul-ui/Input';
```

## Установка и запуск песочныцы:

```
mkdir modul.components
cd ./modul.components

git clone git@github.com:brcportal2/modul-ui.git
git clone git@github.com:brcportal2/Markup.Common.git
git clone git@github.com:brcportal2/Markup.Kassa.git

cd ./modul-ui
npm install

npm start
```

## Storybook

[https://brcportal2.github.io/modul-ui](https://brcportal2.github.io/modul-ui)

### Локальный запуск
```
npm run storybook
```

### Обновление
```
npm run build-storybook
npm run deploy-storybook
```