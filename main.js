
function getMultiQuestionAnswer(apiKey, question, answers){
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [{role: 'user', content: `Дай відповідь на запитання вибравши 1 відповідь: "${question}"Варіанти відповіді[${answers}]`}]
  })
})
.then(response => response.json())
.then(data => {
  console.log(data.choices[0].message.content)
  var fourthDiv = document.querySelector('#test7429573 > div > div:nth-child(2) > div > div > div.v-test-go-body-test-button');
  var newParagraph = document.createElement('p');
newParagraph.textContent = data.choices[0].message.content;

fourthDiv.appendChild(newParagraph);

})
.catch(error => console.error(error));

}


function startBot(){
  var button = document.querySelector('.v-icon-timer-new');

// Add an onclick event listener to the button
button.addEventListener('click', function() {
  const vQuestion= document.querySelector('#i-test-question-jbw350 > div > div.v-test-questions-title').textContent;
const divWithAnswers = document.querySelector('#i-test-question-jbw350 > div > div:nth-child(2) > div');
const ansversText = divWithAnswers.querySelectorAll('label');

var vAnsversString = '';
ansversText.forEach(function(label) {
  vAnsversString = vAnsversString + `"${label.textContent}",`;
})
console.log(vQuestion)
console.log(vAnsversString)
getMultiQuestionAnswer('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', vQuestion, vAnsversString);
});
}
