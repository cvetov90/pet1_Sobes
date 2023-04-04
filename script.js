//Импорты
import {faqData} from './faqData.js'

// Код

let app = document.getElementById("app");

// Вывод контента (вопросов и ответов)
{
let content = document.createElement("div");

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

content.className = 'content'

app.append(content);
}
// Конец кода для вывода контента