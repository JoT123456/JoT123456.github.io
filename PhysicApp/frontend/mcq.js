var submitAnswerBtns = document.getElementsByClassName("submitbtn")
var mcqANS = document.get

//question generation
questionList = [{
    question: "Which of the following nucleus is not directly involved in the proton-proton chain. ",
    options: {'a':'1H',
    'b':'2H',
    'c':'3H',
    'd':'3He'},
    answer: 'c'
},{
    question: `Which of the following statements explains why there is no fusion reactor currently in the world. 
    I.	More energy is needed to overcome electrostatic repulsion between nucleus than the energy produced by nuclear fusion.
    II.	Products of nuclear fusion is toxic to the environment
    III.	Neutrons produced during fusion poses threat of neutron radiation.
    `,
    options: {a:'I only',
    b:'II and III',
    c:'I and III',
    d:'All of the above'},
    answer: 'c'
},{
    question: `Which of the following shows a correct comparison between nuclear fusion and nuclear fission:

        Nuclear Fusion                                  Nuclear Fission
    A	Only small nuclei can undergo fusion	        Nuclei of all size can undergo fission
    B	Requires high density and high temperature      Requires bombardment of neutrons to initiate cascade.
        to overcome electrostatic repulsion between nuclei	
    C	Final Mass is more than initial mass	        Final mass is less than initial mass
    D	Energy is produced	                            Energy is absorbed
`,
    options: {a:'A',
    b:'B',
    c:'C',
    d:'D'},
    answer: 'b'
},{
    question: "The sun has a mass composition of 73% H1, 25% He4 and 2% heavier elements with approximately equal number of neutrons and protons in their nucleus. What percentage of the Sun’s mass do protons consist of?",
    options: {a:'86.5%',
    b:'73%',
    c:'5.2%',
    d:'56.7%'},
    answer: 'a'
},{
    question: "The nuclear strong force overpowers the repulsive electrostatic force at a radius of around 4.0x10-15m. By considering the change in potential energy of protons, determine the temperature needed for protons to have sufficient average kinetic energy to overcome the potential barrier. KEavg = 3/2 k_B T. Charge of proton = 1.60x10^-19 C, Coulomb’s constant k = 8.99x10^9 N m^2 C^-2, Boltzmann constant = 1.38x10^-23 J K^-1.",
    options: {a:'1.5*10^7 K',
    b:'6.7*10^6 K',
    c:'4.2*10^8 K',
    d:'2.8*10^9 K'},
    answer: 'd'
},{
    question: "Given that the coefficients of the wave function are B=1, C=0.6, D=1.4, F=0.2, find the probability the particle travels through the barrier. Hint: Look at equation (1) marked on the right side of the page and the third last sentence of the page. ",
    options: {a:'0.5',
    b:'0.009',
    c:'0.04',
    d:'6*10^15'},
    answer: 'c'
}]

var questionsElement = document.getElementById('questions')
for (var i = 0; i<questionList.length; i++){
    question = questionList[i]
    questionsElement.innerHTML += `
    <div class = '${question.answer} border border-white rounded p-2 my-3'>
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
        trueAns = btnClicked.parentElement.className.slice(0,1)
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


