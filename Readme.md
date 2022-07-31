### Обязательные свойства для HTML-тегов
* border=«0» — толщина рамки в пикселах;

cellpadding=«0» — отступ от рамки до содержимого ячейки;

* cellspacing=«0» — расстояние между ячейками;

* style=«margin:0; padding:0» — обнуляем внутренние и внешние отступы, которые добавляет некоторые почтовые клиенты

* color: #333333; font: 10px Arial, sans-serif — всегда используем эти свойства для всех ссылок и спанов, иначе почтовые клиенты будут добавлять к этим свойствам свои значения;

* line-height: 30px — тоже используем для всех ссылок и спанов, в ином случае почтовые клиенты будут ставить свое значение. Также этим свойством мы можем делать отступы сверху и снизу между строчными и блочными элементами;

* -webkit-text-size-adjust:none — обязательное свойство для всех строчных элементов

---

### Шрифты

* font-family: Arial, Helvetica, sans-serif;
* font-family: 'Arial Black', Gadget, sans-serif;
* font-family: Georgia, serif;
* font-family: 'MS Sans Serif', Geneva, sans-serif;
* font-family: 'MS Serif', 'New York', sans-serif;
* font-family: Tahoma, Geneva, sans-serif;
* font-family: 'Times New Roman', Times, serif;
* font-family: 'Trebuchet MS', Helvetica, sans-serif;
* font-family: Verdana, Geneva, sans-serif;

#### Шаблон таблицы
```html
<table border="0" cellpadding="0" cellspacing="0" style="margin:0; padding:0" width="100%">
  <tr>
    <td>
контент
    </td>
  </tr>
</table>
```
#### Центрирование
```html
<center style="max-width: 600px; width: 100%;">
  содержимое
</center>
```
