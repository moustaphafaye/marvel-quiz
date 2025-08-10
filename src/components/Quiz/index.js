import React, { Component, Fragment } from 'react'
import Levels from '../Levels';
import { QuizMarvel } from '../quizMarvel';
import ProgressBar from '../ProgressBar';
// import { ToastContainer } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import QuizOver from '../QuizOver';


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
    score: 0,
    shohWelcomeMsg: false,
    quizEnd: false
  }

  storedDataRef = React.createRef();

  loadQuestion = level => {
    const fetchArrayQuiz = QuizMarvel[0].quizz[level]
    if (fetchArrayQuiz.length >= this.state.maxQuestions) {
      this.storedDataRef.current = fetchArrayQuiz;

      const newArray = fetchArrayQuiz.map(({ answer, ...keeqRest }) => keeqRest);
      this.setState({
        storedQuestions: newArray
      })

    } else {

    }

  }

  showWelcomeMsg = pseudo => {
    if (!this.state.shohWelcomeMsg) {
      this.setState({
        shohWelcomeMsg: true
      });
      toast.warn(`Welcome ${pseudo}, et bonne chance`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
    }

  }

  componentDidMount() {
    this.loadQuestion(this.state.levelNames[this.state.quizlevel])
  }

  nextQuestion = () => {
    if (this.state.idQuestion === this.state.maxQuestions - 1) {
      this.gameOver();

    } else {
      this.setState(prevState => ({
        idQuestion: prevState.idQuestion + 1,
      }))

    }
    const goodanswer = this.storedDataRef.current[this.state.idQuestion].answer;
    if (goodanswer === this.state.userAnswer) {
      this.setState(prevState => ({
        score: prevState.score + 1
      }))
      toast.success('Bravo + 1', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
    } else {
      toast.error('Raté 0', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // bodyClassName: "toastError",
        // transition: Bounce,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.storedQuestions !== prevState.storedQuestions) {
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options: this.state.storedQuestions[this.state.idQuestion].options
      })
    }

    if (this.state.idQuestion !== prevState.idQuestion) {
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options: this.state.storedQuestions[this.state.idQuestion].options,
        userAnswer: null,
        btnDisabled: true
      })
    }
    if (this.props.userData.pseudo) {
      this.showWelcomeMsg(this.props.userData.pseudo);

    }
  }

  submitAnswer = selectedAnswer => {
    this.setState({
      userAnswer: selectedAnswer,
      btnDisabled: false
    })
  }

  gameOver = () => {

    this.setState({
      quizEnd: true
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

    return !this.state.quizEnd ? (
      <QuizOver ref={this.storedDataRef}/>
    ) : (

      <Fragment>
        {/* <h2>Pseudo :  {pseudo} </h2> */}
        <Levels />
        <ProgressBar
          idQuestion={this.state.idQuestion}
          maxQuestions={this.state.maxQuestions}
        />
        <h2> {this.state.question} </h2>
        {displayOptions}
        <button
          disabled={this.state.btnDisabled}
          className='btnSubmit'
          onClick={this.nextQuestion}
        >
          {/* {this.state.idQuestion === this.state.maxQuestions - 1 ? "Terminer" : "Suivant"} */}
          {this.state.idQuestion < this.state.maxQuestions - 1 ? "Suivant" : "Terminer"}
        </button>
        <ToastContainer />
      </Fragment>
    )


  }
}

export default Quiz
