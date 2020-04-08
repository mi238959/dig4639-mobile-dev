import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import questions from './components/Questions/questions.json'


const TITLE_STATE = 0
const QUESTION_STATE = 1

export default class App extends React.Component {
  constructor (props) {
    super()
    this.state = {
      currentState: TITLE_STATE,
      currentQuestion: 0,
      score: 0
    }
  }

  nextQuestion (a) {
    if (a.correct) {
      this.setState({ score: this.state.score + 1 })
    }
    this.setState({ currentQuestion: this.state.currentQuestion + 1 })
  }

  scoreMessage () {
    if (this.state.score / questions.length > 0.8) {
      return 'Reward yourself with an icecream because you are ready for summer!'
    } else if (this.state.score / questions.length >= 0.8) {
      return 'Buy some sunblock because you are almost ready!'
    } else {
      return 'Dont worry! Just a few more assignments to finish then you can relax!'
    }
  }

  render () {
    return (
      <Card containerStyle={styles.container}>
        {(this.state.currentState === TITLE_STATE)
          ? <>
            <Text style={styles.title}>Are you ready for summer?</Text>
            <Text style={styles.text}>Test how prepared you are for the end of the semester</Text>
            <br /><br />
            <Button title="Start Quiz" buttonStyle={styles.button} onClick = {() => this.setState({ currentState: QUESTION_STATE })}/>
          </>
          : (this.state.currentQuestion < questions.length)
            ? <>
              <Text style={styles.title}>{questions[this.state.currentQuestion].question}</Text>
              <View>
                {questions[this.state.currentQuestion].answers.map((ans, i) => {
                  return <Button title={ans.text} key={i} buttonStyle={styles.button} onClick={() => this.nextQuestion(ans)} />
                })}
              </View>
            </>
            : <>
              <Text style={styles.title}>You are all finished!</Text>
              <Text style={styles.title}>Score: {this.state.score}/{questions.length}</Text>
              <Text style={styles.text}>{this.scoreMessage()}</Text>
              <Button title="Start Over" buttonStyle={styles.button} onClick={() => this.setState({ currentState: TITLE_STATE, currentQuestion: 0, score: 0 })}/>
            </>
        }
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8CD8F0',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 500,
    maxWidth: 700,
    margin: 'auto',
    padding: 50,
    textAlign: 'center'
  },
  text: {
    fontSize: 30,
    marginBottom: 30
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    paddingBottom: 30
  },
  button: {
    backgroundColor: '#427EEB',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
    margin: 15,
    fontWeight: '700'
  }

})