import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store.js';
import App from './app.js';
import {DEFAULT_COUNT} from './constants.js'

const root = document.getElementById("app");

// Состояние приложения
const store = new Store({
  items: [
    {code: 1, title: 'Название элемента', count: DEFAULT_COUNT},
    {code: 2, title: 'Некий объект', count: DEFAULT_COUNT},
    {code: 3, title: 'Заголовок', count: DEFAULT_COUNT},
    {code: 4, title: 'Короткое название', count: DEFAULT_COUNT},
    {code: 5, title: 'Запись', count: DEFAULT_COUNT},
    {code: 6, title: 'Пример названия', count: DEFAULT_COUNT},
    {code: 7, title: 'Седьмой', count: DEFAULT_COUNT}
  ]
});

// Сообщаем реакту что и куда рендерить.
store.subscribe(() => {
  ReactDOM.render(<App store={store}/>, root);
});

// Сообщаем реакту что и куда рендерить.
ReactDOM.render(<App store={store}/>, root);
