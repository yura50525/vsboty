function getQuestionAnswer(apiKey, question, answers) {
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Дай відповідь на запитання вибравши 1 відповідь: "${question}"Варіанти відповіді[${answers}]`,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const generetedAns = data.choices[0].message.content;
      var divForBtn = document.querySelector(".v-test-go-body-test-button");
      var ansTextarea = document.createElement("p");
      ansTextarea.textContent = generetedAns;

      divForBtn.appendChild(ansTextarea);
    })
    .catch((error) => {
      console.error(error);
      var divForBtn = document.querySelector(".v-test-go-body-test-button");
      var ansTextarea = document.createElement("p");
      ansTextarea.textContent = "error";

      divForBtn.appendChild(ansTextarea);
    });
}

function startBot(apiKey) {
  var mainBtn = document.querySelector(".v-icon-timer-new");

  // Add an onclick event listener to the button
  mainBtn.addEventListener("click", function () {
    const question = document.querySelector(".content-box").textContent;
    const divWithAns = document.querySelector(".flex-row-test");
    const labelsWithAns = divWithAns.querySelectorAll("label");

    var ansString = "";
    labelsWithAns.forEach(function (label) {
      ansString = ansString + `"${label.textContent}",`;
    });
    console.log(question);
    console.log(ansString);
    getQuestionAnswer(apiKey, question, ansString);
  });
}
