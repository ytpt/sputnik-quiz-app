import React, { FC } from "react";
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

const QuestionCard: FC<Props> = ({
    question,
    answers,
    questionNumber,
    right,
    selectedAnswer,
    setSelectedAnswer,
}) => {

    const renderAnswers = () => {
        if (answers) {
            return answers.map((answer, index) => (
                <ChkBox
                    key={ `${questionNumber}_${index}` }
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