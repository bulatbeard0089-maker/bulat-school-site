# Brutal-сайт (Netlify) — Школа тренеров Булата Зарипова + проект «Сильные Люди»

## Страницы
- index.html — главная (АНО ДПО)
- about.html — о нас
- services.html — услуги
- projects.html — проекты (в т.ч. «Сильные Люди»)
- project-silnye-lyudi.html — отдельная страница проекта + логотип
- news.html — новости (подгружаются из JSON)
- contacts.html — контакты + форма (демо)

## Как добавлять новости
Открой `assets/data/news.json` и добавь объект:
{
  "date": "2026-02-10",
  "category": "Сильные Люди",
  "title": "Заголовок",
  "excerpt": "Короткое описание",
  "link": "project-silnye-lyudi.html#platform"
}

## Netlify Forms (реальная отправка)
В `contacts.html` внутри `<form>` добавь:
- `name="contact" netlify`
- `<input type="hidden" name="form-name" value="contact" />`

## Деплой
Загрузи ZIP в Netlify. Build не нужен. Publish directory: корень архива.
