import React, { useState } from 'react'

import styled from "styled-components";


    const Container = styled.div`
        padding: 10px;
        background-color:whitesmoke;
        display : flex;
        flex-direction : column;
        align-items : center;

`

    const ContainerButton = styled.div`
`

    const QuestionView = styled.div`
        height: 150px;
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        background:#F5F5F5;
    /* border-style: solid; */
        border-radius: 10px;
    `


const Abutton = styled.button`
    height: 2.25rem;
    font-size: 1rem;
    border-radius: 10px;
    margin-left: 10px;
      background: white;
    /* &:hover{
        background: #339af0;
    }
    &:active{
        background: #1c7ed6;
            & + & {
        margin-left: 1rem;
    }
    } */
`

    

const Question = () => {

    const [question, setQuestion] = useState("나이가 어떻게 되시나요?")
    const [answer, setAnswer] = useState(["10~20대", "30대~40대", "50대 이상"])
    console.log(question)
    console.log(answer)
    console.log('----------------------')

    const answerList = answer.map((el, idx) => (<Abutton key={`button ${idx}`}>{el}</Abutton>))
    const onClickAnswer = () => {
        console.log("클릭했다리")
        setQuestion()
        setAnswer()

    }
    // const questionList1 = "나이가 어떻게 되시나요?";
    // const questionList2 = "오늘 기분은 어떤가요?";
    // const questionList3 = "오늘 땡기는 종류는 무엇인가요?";
    // const questionList4 = "1인분 예산을 알려주세요.";
    const questionList = [
        ["오늘 기분은 어떤가요?"],
        ["오늘 땡기는 종류는 무엇인가요?"],
        ["1인분 예산을 알려주세요."]        
    ]


    // const answerList1 = ["10~20대", "30대~40대", "50대 이상"];
    // const answerList2 = ["좋음", "그저 그럼", "나쁨"];
    // const answerList3 = ["육류", "해산물", "그외"];
    // const answerList4 = ["만원 이하", "만원~3만원", "3만원 이상"]

    return (<Container>
        <QuestionView>{question}</QuestionView>
        <ContainerButton onClick={onClickAnswer}>{answerList}</ContainerButton>
    </Container>
    )
}

export default Question;