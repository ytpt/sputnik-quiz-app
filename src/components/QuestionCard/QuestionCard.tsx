import React from "react";
import { Wrapper } from "./QuestionCard.styles";
import ChkBox from "../ChkBox/ChkBox";

type Props = {
    question: string;
    answers: string[];
    questionNumber: number;
    right: string;
    isClicked: boolean;
    setIsClicked: (boolean) => void;
    isTimeExpired: boolean;
    selectedAnswer: string | null;
    setSelectedAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    questionNumber,
    right,
    isClicked,
    setIsClicked,
    isTimeExpired,
    selectedAnswer,
    setSelectedAnswer,

}) => {

    const renderAnswers = () => {
        return answers.map((answer) => (
            <ChkBox
                key={answer}
                variant={answer}
                label={answer}
                right={right}
                isClicked={isClicked}
                setIsClicked={ setIsClicked }
                selectedAnswer={ selectedAnswer }
                setSelectedAnswer={ setSelectedAnswer }
                isTimeExpired={ isTimeExpired }
            />
        ));
    };

    return (
        <Wrapper>
            <h2>Вопрос №{ questionNumber + 1 }</h2>
            <h3 dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                { renderAnswers() }
            </div>
        </Wrapper>
    )
}

export default QuestionCard;