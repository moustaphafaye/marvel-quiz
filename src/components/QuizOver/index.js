import React, { Fragment, useEffect, useState } from "react";
const QuizOver = React.forwardRef((props, ref) => {


    const {
        levelNames,
        score,
        maxQuestions,
        quizlevel,
        percent,
        loadLevelQuestions
    } = props;
    const [asket, setState] = useState([])

    useEffect(() => {
        setState(ref.current);
    }, [ref])

    const averageGrade = (maxQuestions) / 2;
    const desision = score >= averageGrade ? (
        <Fragment>
            <div className="stepsBtnContainer">
                {
                    quizlevel < levelNames.length ?
                        (
                            <Fragment>
                                <p className="successMsg">Bravo , passer au niveau suivant</p>
                                <button
                                    className="btnResult success"
                                    onClick={() => loadLevelQuestions(quizlevel)}
                                >
                                    Niveau Suivant
                                </button>
                            </Fragment>
                        )
                        :
                        (
                            <Fragment>
                                <p className="successMsg">Bravo vous étes un expert</p>
                                <button
                                    className="btnResult gameOver"
                                    onClick={() => loadLevelQuestions(0)}
                                >
                                   Accueil
                                </button>
                            </Fragment>
                        )
                }
            </div>
            <div className="percentage">
                <div className="progressPercent">Reusite : {percent} %</div>
                <div className="progressPercent">Note :  {score} /{maxQuestions} </div>
            </div>
        </Fragment >
    )
        :
        (
            <Fragment>
                <div className="stepsBtnContainer">
                    <p className="failureMsg">Vous avez échoué !</p>

                </div>
                <div className="percentage">
                    <div className="progressPercent">Reusite : {percent} %</div>
                    <div className="progressPercent">Note :  {score} /{maxQuestions} </div>
                </div>
            </Fragment>
        );
    const questionAnwers = score >= averageGrade ? (
        asket.map(question => {
            return (
                <tr key={question.id}>
                    <td>{question.question}</td>
                    <td>{question.answer}</td>
                    <td>
                        <button className="btnInfo">Info</button>
                    </td>
                </tr>
            )
        })
    ) : (
        <tr >
            <td colSpan="3">
                <p style={{ textAlign: 'center', color: 'red' }}>Pas de réponse </p>
            </td>
        </tr>

    );


    return (
        <Fragment>
            {desision}
            <hr />
            <p className="">
                Les reponses aux questions posées sont affichées ci-dessous.
            </p>
            <div className="answerContainer">
                <table className="answers">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Reponse</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionAnwers}
                    </tbody>

                </table>

            </div>
        </Fragment>
    )
})


export default React.memo(QuizOver);