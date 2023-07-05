import React from "react";
import { AnswerObject } from "../../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";
import { shuffleArray } from "../../utils";
import ChkBox from "../ChkBox/ChkBox";

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
}) => {
    return (
        <Wrapper>
            <h2 className="c">
                Вопрос №{ questionNumber + 1 }
            </h2>
            <h3 dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                { shuffleArray(answers).map((answer => (
                    <ButtonWrapper
                        key={ answer }
                        correct={ userAnswer?.correctAnswer === answer }
                        userClicked={ userAnswer?.answer === answer }
                    >
                        <ChkBox
                            value={ answer }
                            onChange={ callback }
                            disabled={ !!userAnswer }
                        />
                    </ButtonWrapper>
                )))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard;