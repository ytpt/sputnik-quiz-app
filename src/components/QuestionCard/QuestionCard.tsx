import React from "react";
import { Wrapper } from "./QuestionCard.styles";
import ChkBox from "../ChkBox/ChkBox";

type Props = {
    question: string;
    answers: string[];
    questionNumber: number;
    right: string;
    selectedAnswer: string | null;
    setSelectedAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    questionNumber,
    right,
    selectedAnswer,
    setSelectedAnswer,

}) => {

    const renderAnswers = () => {
        if (answers) {
            return answers.map((answer) => (
                <ChkBox
                    key={ answer }
                    variant={ answer }
                    label={ answer }
                    right={ right }
                    selectedAnswer={ selectedAnswer }
                    setSelectedAnswer={ setSelectedAnswer }
                />
            ));
        }
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