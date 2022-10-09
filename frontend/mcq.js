var submitAnswerBtns = document.getElementsByClassName("submitbtn")
var mcqANS = document.get

//question generation
questionList = [{
    question: "",
    options: {'a':'option1',
    'b':'option2',
    'c':'option3',
    'd':'option4'},
    answer: 'a'
},{
    question: "",
    options: {a:'option1',
    b:'option2',
    c:'option3',
    d:'option4'},
    answer: 'd'
}]

var questionsElement = document.getElementById('questions')
for (var i = 0; i<questionList.length; i++){
    question = questionList[i]
    questionsElement.innerHTML += `
    <div class = '${question.question} border border-white rounded p-2 my-3'>
        <h5 id = "Qn ${i+1}">Qn ${i+1}</h5>
        <p>${question.question}</p>
        <form action="" class = 'container'>
            <input type="radio" id = "Q${i+1}A" name = "Question${i+1}" value = "a"><label for="Q${i+1}A">${question.options.a}</label><br>
            <input type="radio" id = "Q${i+1}B" name = "Question${i+1}" value = "b"><label for="Q${i+1}B">${question.options.b}</label><br>
            <input type="radio" id = "Q${i+1}C" name = "Question${i+1}" value = "c"><label for="Q${i+1}C">${question.options.c}</label><br>
            <input type="radio" id = "Q${i+1}D" name = "Question${i+1}" value = "d"><label for="Q${i+1}D">${question.options.d}</label><br>
        </form>
        <button class = 'submitbtn btn btn-primary btn-sm'>Submit</button>
        <div class = 'completiontext'></div>
    </div>
    `
}


// // for (let bookmark of bookmarks) {
//     childElement = document.createElement('form');
//     appendChildElement = parentElement.appendChild(childElement)
//     appendChildElement.innerHTML = bookmark.url
// //   }

//function to check the for the correct answers
function checkAnswer(element, trueAns,studentAns){
    if (trueAns === studentAns){
        console.log('correct')
        text = 'congratulations, you got it correct!'
    }
    else {
        console.log('answer is incorrect')
        text = 'You got it wrong, please try again!'
    }
    element.innerHTML = text
}
// event listener to collect button ans

for (var i = 0; i < submitAnswerBtns.length;i++){
    var btn = submitAnswerBtns[i]

    btn.addEventListener('click', function(event){
        var btnClicked = event.target
        nodes = btnClicked.parentElement.childNodes
        trueAns = btnClicked.parentElement.className
        console.log(nodes)
        radioButtons = nodes[5]
        //checking radio button is pressed
        for(var i = 0; i<radioButtons.length;i++){
            if (radioButtons[i].checked){
                studentAns = radioButtons[i].value
                //checking if answer is correct 
                checkAnswer(nodes[9],trueAns,studentAns)
                break;
            }
            else if (i === radioButtons.length-1){
                alert("No option selected!")
                break;
            }
        }

    })
    
}

console.log('test')


