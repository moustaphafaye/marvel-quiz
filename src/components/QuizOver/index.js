import React, { Fragment, useEffect, useState } from "react";

// const QuizOver = (props) => {

//     console.log(props);

//     return (
//         <div >
//             Quiz Over
//         </div>
//     )

// }
const QuizOver = React.forwardRef((props, ref) => {
    const [asket, setState] = useState([])

    useEffect(() => {
        setState(ref.current);
    }, [ref])

   const questionAnwers = asket.map(question => {
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


    return (
        <Fragment>
            <div className="stepsBtnContainer">
                <p className="successMsg">Bravo vous étes un expert</p>
                <button className="btnResult success">Niveau Suivant</button>
            </div>
            <div className="percentage">
                <div className="progressPercent">Reusite 10%</div>
                <div className="progressPercent">Note : 10/10</div>

            </div>
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