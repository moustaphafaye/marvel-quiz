import React, { Component } from 'react'
import Levels from '../Levels';
import { QuizMarvel } from '../quizMarvel';
import ProgressBar from '../ProgressBar';

class Quiz extends Component {

  state = {
    levelNames: ["debutant", "confirme", "expert"],
    quizlevel: 0,
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
    idQuestion: 0,
    btnDisabled: true,
    userAnswer: null,
  }

  loadQuestion = level => {
    const fetchArrayQuiz = QuizMarvel[0].quizz[level]
    if (fetchArrayQuiz.length >= this.state.maxQuestions) {
      const newArray = fetchArrayQuiz.map(({ answer, ...keeqRest }) => keeqRest);
      this.setState({
        storedQuestions: newArray
      })

    } else {
      console.log('Pas assez de questions');

    }

  }

  componentDidMount() {
    this.loadQuestion(this.state.levelNames[this.state.quizlevel])
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.storedQuestions !== prevState.storedQuestions) {
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options: this.state.storedQuestions[this.state.idQuestion].options
      })
    }
  }

  submitAnswer = selectedAnswer => {
    this.setState({
      userAnswer: selectedAnswer,
      btnDisabled: false
    })
  }

  render() {
    const { pseudo } = this.props.userData;
    const displayOptions = this.state.options.map((option, index) => {
      return (
        <p
          key={index}
          className={`answerOptions ${this.state.userAnswer === option ? "selected" : ""}`}
          onClick={() => this.submitAnswer(option)}
        >
          {option} </p>
      )
    })
    return (
      <div className="quiz-container">
        {/* <h2>Pseudo :  {pseudo} </h2> */}
        <Levels />
        <ProgressBar />
        <h2> {this.state.question} </h2>
        {displayOptions}
        <button disabled={this.state.btnDisabled} className='btnSubmit'>Suivant</button>
      </div>
    )
  }
}

export default Quiz
