import React  from "react";
import { Wrapper } from "./QuestionCard.styles";
import ChkBox from "../ChkBox/ChkBox";
import { shuffleArray } from "../../utils";

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

    const renderAnswers = () => {
        const answersList = [];

        for (let answer in answers) {
            answersList.push(
                <ChkBox
                    key={ answer }
                    variant={ answers[answer] }
                    label={ answers[answer] }
                    right={ right }
                    isClicked={ isClicked }
                    setIsClicked={ setIsClicked }
                />
            );
        }
        const newAnswerList = shuffleArray(answersList);
        
        return newAnswerList;
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