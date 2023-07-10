import React, { useState } from "react";
import { Wrapper } from "./QuestionCard.styles";
import ChkBox from "../ChkBox/ChkBox";

type Props = {
    question: string;
    answers: string[];
    questionNumber: number;
    right: string;
    isClicked: boolean;
    setIsClicked: (boolean) => void;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    questionNumber,
    right,
    isClicked,
    setIsClicked,
}) => {

    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const renderAnswers = () => {
        return answers.map((answer) => (
            <ChkBox
                key={answer}
                variant={answer}
                label={answer}
                right={right}
                isClicked={isClicked}
                setIsClicked={ setIsClicked }
                setSelectedAnswer={setSelectedAnswer}
                selectedAnswer={selectedAnswer}
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