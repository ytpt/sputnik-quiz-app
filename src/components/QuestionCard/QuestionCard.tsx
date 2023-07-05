import React, { useState } from "react";
import { AnswerObject } from "../../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";
import { shuffleArray } from "../../utils";
import ChkBox from "../ChkBox/ChkBox";

type Props = {
    question: string;
    answers: string[];
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    right: string;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    userAnswer,
    questionNumber,
    right,
}) => {

    const [clicked, setClicked] = useState(false);

    const renderAnswers = () => {
        const answersList = [];
        for (let answer in answers) {
            answersList.push(
                <ChkBox
                    key={ answer }
                    variant={ answers[answer] }
                    label={ answers[answer] }
                    right={ right }
                    clicked={ clicked }
                    setClicked={ setClicked }
                />
            );
        }
        return answersList;
    };

    return (
        <Wrapper>
            <h2 className="c">
                Вопрос №{ questionNumber + 1 }
            </h2>
            <h3 dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                { renderAnswers() }
            </div>
        </Wrapper>
    )
}

export default QuestionCard;