

const allQuizElements = [];
let index = 0;
let score = 0;
let selected = 0;



class QuizElement{
    constructor(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.addToGlobalArray();
    }

     addToGlobalArray(){
        allQuizElements.push(this);
     }
}

 const quiz1 = new QuizElement('რომელ წელს დაიბადა მაჰათმა განდი?', ['1869','1440', '2003'], 1);
 
 const quiz2 = new QuizElement('ვინ გახდა ფეხბურთის მსოფლიო ჩემპიონი 2022 წელს?', ['ავსტრალია','არგენტინა', 'საქართველო'], 2);

function nextQuestion(){
    if(index < allQuizElements.length){
        if( index === 0){
            score = 0;
        }
        start(index);
        console.log(index);
        index++;
    }
    else{
        index++;
        const result = document.getElementById('quiz');
        result.innerHTML = "შენი შედეგია :" + score;
        index = 0;
    } 
};



function start(i) {
//render question to the html

const divContainer = document.getElementById("quiz");
divContainer.innerHTML = ' ';
const quizCounter = document.createElement("h3");
const quizDiv = document.createElement("h2");
divContainer.appendChild(quizDiv);
divContainer.appendChild(quizCounter);
quizCounter.innerHTML = (index + 1) + '/' + allQuizElements.length;
quizDiv.innerHTML = allQuizElements[i].question;


//render answers to the html
allQuizElements[i].answers.map((answer, answerIndex) => {
    const answerDiv = document.createElement("p");
    answerDiv.style.cursor = 'pointer';
    //answerDiv.addEventListener('click', nextQuestion())
    divContainer.appendChild(answerDiv);
    answerDiv.innerHTML = answer;
    selected = 3;
    answerDiv.addEventListener('click', function(){
        if(answerIndex + 1 === allQuizElements[i].correctAnswer){
            score++;
            console.log(score);
            selected = 1;
        }
        else{console.log('wrong');
        selected = 1;
    }
    answerDiv.style.color = "white";
    answerDiv.style.padding = "5px";
    answerDiv.style.display = 'inline-block';
    answerDiv.style.background = "lightgreen";
    } );
});

const startButton = document.getElementById("start").innerHTML = "Next";
};

const startButton = document.getElementById("start");
startButton.addEventListener('click', function() {
        if(selected != 3){
            nextQuestion();
        }
}  );




        
        