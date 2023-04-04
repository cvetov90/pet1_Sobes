//Импорты
import {faqData} from './faqData.js'

// Код

let app = document.getElementById("app");

// Вывод шапки
let header = document.createElement('header')
header.innerText = 'header'
app.append(header)
// Конец кода для вывода шапки

// Вывод меню
let menu = document.createElement('div')
menu.className = 'menu'
menu.innerText = 'menu'
app.append(menu)
// Конец кода для вывода меню

// Вывод контента (вопросов и ответов)
{
let content = document.createElement("div");
content.className = 'content'

for (let item of faqData) {
  let chapter = document.createElement("div");
  let chapterTitle = document.createElement("div");
  let chapterQuestions = document.createElement("div");

  chapterTitle.innerText = item.chapterTitle;

  for (let faqBlock of item.chapterQuestions) {
    let questionBlock = document.createElement("div");
    let question = document.createElement("div");
    let answer = document.createElement("div");

    question.innerText = faqBlock.question;
    answer.innerText = faqBlock.answer;
    questionBlock.append(question);
    questionBlock.append(answer);
    chapterQuestions.append(questionBlock);
  }

  chapter.append(chapterTitle);
  chapter.append(chapterQuestions);
  content.append(chapter);
}

app.append(content);
}
// Конец кода для вывода контента

// Вывод подвала
let footer = document.createElement('footer')
footer.innerText = 'footer'
app.append(footer)
// Конец кода для вывода подвала