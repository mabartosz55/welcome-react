import React from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import Display from "./Display"

class Jeopardy extends React.Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: { answer: "" }
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    let formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.data.answer === this.state.formData.answer) {
      this.setState((prevState) => {
        return { score: prevState.score + prevState.data.value }
      })
    } else {
      this.setState ((prevState) => {
        return {score: prevState.score - prevState.data.value} 
      })
    }
    this.getNewQuestion() 

    this.setState({
      submitted: true
    });
  }
  //display the results on the screen
  render() {

    return <Display jData = {this.state} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>

    // let element = "Loading"
    // if (this.state.data.category !== undefined) {
    //   element = (
    //     <div>
    //       Category: {this.state.data.category.title}
    //       <br />
    //       <br />
    //       Question: {this.state.data.question}
    //       <br />
    //       <br />
    //       Point Value: {this.state.data.value}
    //       <br />
    //       <form onSubmit={this.handleSubmit}>
    //         <div>
    //           <label htmlFor="answer">Answer</label>
    //           <input
    //             type="text"
    //             name="answer"
    //             value={this.state.formData.answer}
    //             onChange={this.handleChange}
    //           />
    //         </div>
    //         <button>Submit Answer</button>
    //       </form>
    //       Player Score: {this.state.score}
    //       <br />
    //       <br />
    //       Answer: Who/What is {this.state.data.answer} ?
    //       <br />
    //     </div>
    //   )
    // }
    // return (
    //   <div>
    //     {element}
    //   </div>
    // );
  }
}
export default Jeopardy