import React from "react";
import { AnswerObject } from "../../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

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
            <p className="number">
                Вопрос №{ questionNumber }
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                { answers.map((answer => (
                    <ButtonWrapper
                        key={ answer }
                        correct={ userAnswer?.correctAnswer === answer }
                        userClicked={ userAnswer?.answer === answer }
                    >
                        <input
                            type="checkbox"
                            name="option"
                            value={ answer }
                            onChange={ callback }
                            disabled={ !!userAnswer }
                        />
                        <label>{ answer }</label>
                    </ButtonWrapper>
                )))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard;