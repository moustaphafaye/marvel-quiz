import React, { Fragment } from 'react'

const ProgressBar = (props) => {

  const {idQuestion , maxQuestions} = props

  const actionQuestion = idQuestion + 1;

  const getWidth = (totalQuestions , questionId) => {
    return (100 / totalQuestions) * (questionId);
  }
  
  const progressBarWidth = getWidth(maxQuestions, actionQuestion);
  return (
    <Fragment>
      <div className='percentage'>
        <div className='progressPercent'> {idQuestion + 1 }/ {maxQuestions} </div>
        <div className='progressPercent'> Progression : {progressBarWidth} %</div>
      </div>
      <div className='progressBar'>
        <div className='progressBarChange' style={{width : `${progressBarWidth}%`}}></div>
      </div>
    </Fragment>
  )
}

export default ProgressBar
