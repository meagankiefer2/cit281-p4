/*
    CIT 281 project 4: server
    Meagan Kiefer
*/

const fastify = require("fastify")();
const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer } = require("./p4-module");

fastify.get("/cit/question", (request ,reply) => {
    let questionObj = {
        error: "",
        statusCode: 200,
        questions: [getQuestions()]
    }
    
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(JSON.stringify(questionObj));
});

fastify.get("/cit/answer", (request ,reply) => {
    let answerObj = {
        error: "",
        statusCode: 200,
        answers: [getAnswers()]
    }
    
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(JSON.stringify(answerObj));
});

fastify.get("/cit/questionanswer", (request ,reply) => {
    let questionAnswerObj = {
        error: "",
        statusCode: 200,
        questions_answers: [getQuestionsAnswers()]
    }
    
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(JSON.stringify(questionAnswerObj));
});

fastify.get("/cit/question/:number", (request ,reply) => {
    const { number } = request.params
    let num = parseInt(number)
    let q = getQuestion(num)
    console.log(q)
    let questionNumObj = {
        error: q.error,
        statusCode: 200,
        question: q.question,
        number: num
    }
    
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(JSON.stringify(questionNumObj));
});

fastify.get("/cit/answer/:number", (request ,reply) => {
    const { number } = request.params
    let num = parseInt(number)
    let answerNumObj = {
        error: getAnswer(num).error,
        statusCode: 200,
        answer: getAnswer(num).answer,
        number: num
    }
    
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(JSON.stringify(answerNumObj));
});

fastify.get("/cit/questionanswer/:number", (request ,reply) => {
    const { number } = request.params
    let num = parseInt(number)
    let questionAnswerNumObj = {
        error: getQuestionAnswer(num).error,
        statusCode: 200,
        question: getQuestionAnswer(num).question,
        answer: getQuestionAnswer(num).answer,
        number: num
    }
    
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(JSON.stringify(questionAnswerNumObj));
});

fastify.get("*", (request ,reply) => {
    let noRoute = {
        error: "Route not found",
        statusCode: 404
    }
    reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(noRoute);
});

const listenPort = 8080;
const listenIP = "localhost";
fastify.listen(listenPort, listenIP, (err, address) => {
    if(err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`);
});