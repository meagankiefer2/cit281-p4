/*
    CIT 281 project 4: modules
    Meagan Kiefer
*/

const { data } = require('./p4-data');

const getQuestions = () => {
    let questionArr = [];
    for (let index = 0; index <  data.length; index++) {
        if (data[index] !== null) {
            questionArr.push(data[index].question);
        } 
    }
    return questionArr
}

/* getQuestions = data.map(function(value) {
        return value.question;
}); 
*/

const getAnswers = () => {
    let answerArr = [];
    for (let index = 0; index <  data.length; index++) {
        if (data[index] !== null) {
            answerArr.push(data[index].answer);
        } 
    }
    return answerArr
}

/* getAnswers = data.map(function(value){
    return value.answer;
});
*/

const getQuestionsAnswers = () => {
    let copy = [...data];
    return copy
}

const getQuestion = (number) => {
    let questionNumber = null;
    for (let index = 0; index <  data.length; index++) {
        if (data[index].question.charAt(1) == number) {
            let questionNumber = data[index].question;
            return {error: '', question: questionNumber, number: parseInt(questionNumber.charAt(1)) }
        } 
    }
    if (parseInt(number) !== number ){
            return { error: 'Question number must be an integer', question: '', answer: '', number: '' } 
        } else if(number < 1) {
            return { error: 'Question number must be >= 1', question: '', answer: '', number: '' } 
        } else {
            return { error: `Question number must be less than the number of questions (${data.length})`, question: '', answer: '', number: '' }
        }
}
//make number and integer

const getAnswer = (number) => {
    let answerNumber = null;
    for (let index = 0; index <  data.length; index++) {
        
        if (data[index].answer.charAt(1) == number) {
            let answerNumber = data[index].answer;
            return {error: '', answer: answerNumber, number: parseInt(answerNumber.charAt(1)) }
        } 
    }
    if (parseInt(number) !== number ){
            return { error: 'Answer number must be an integer', question: '', answer: '', number: '' } 
        } else if(number < 1) {
            return { error: 'Answer number must be >= 1', question: '', answer: '', number: '' } 
        } else {
            return { error: `Answer number must be less than the number of questions (${data.length})`, question: '', answer: '', number: '' }
        }
}
//console.log(getAnswer(1))

const getQuestionAnswer = (number) => {
    let questionNumber = null;
    for (let index = 0; index <  data.length; index++) {
        if (data[index].question.charAt(1) == number) {
                let questionNumber = data[index].question;
                    return { error: '', question: questionNumber, answer: data[index].answer, number: parseInt(questionNumber.charAt(1)) }
            } 
        }  
        if (parseInt(number) !== number ){
                return { error: 'Question number must be an integer', question: '', answer: '', number: '' } 
            } else if(number < 1) {
                return { error: 'Question number must be >= 1', question: '', answer: '', number: '' } 
            } else {
                return { error: `Question number must be less than the number of questions (${data.length})`, question: '', answer: '', number: '' }
            } 
    }



//console.log(getQuestionAnswer(1))

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false; //this one
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

//export all the functions 
module.exports = { 
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
}