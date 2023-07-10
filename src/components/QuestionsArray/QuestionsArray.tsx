import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { shuffleArray } from "../../utils";

type Props = {
    newQuestions: any;
    startIndex: number;
    endIndex: number;
    isClicked: boolean;
    setIsClicked: (boolean) => void;
}

const QuestionsArray: React.FC<Props> = ({
    newQuestions,
    startIndex,
    endIndex,
    isClicked,
    setIsClicked,
}) => {

    const isGameStarted = useSelector((state: RootState) => state.isGameStarted);

    const shuffledQuestions = newQuestions
        .slice(startIndex, endIndex)
        .map((question) => ({
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer
            ])
        }));

    return (
        <>
            {
                isGameStarted.is_game_started
                    && shuffledQuestions.map((question, index) => (
                        <QuestionCard
                            key={ index }
                            questionNumber={ index + startIndex }
                            question={ question.question }
                            answers={[
                                ...question.incorrect_answers,
                                question.correct_answer
                            ]}
                            right={ question.correct_answer }
                            isClicked={ isClicked }
                            setIsClicked={ setIsClicked }
                        />
                    ))
            }
        </>
    )
};

export default QuestionsArray;