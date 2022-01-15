const ul = document.getElementById('faqList');
const list = document.createDocumentFragment();
const url = 'https://lxpi9qne2a.api.quickmocker.com/getReactFAQs';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let questions = data.response;


        for (let i = 0; i < 14; i++) {
            let question = questions[i];
            let li = document.createElement('li');
            let title = document.createElement('h2');
            let message = document.createElement('span');

            title.innerHTML = `${question.title}`;
            message.innerHTML = `${question.Message}`;

            li.appendChild(title);
            li.appendChild(message);
            list.appendChild(li);
        }

        ul.appendChild(list);
    })
    .catch(function(error) {
        console.log(error);
    });


// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}