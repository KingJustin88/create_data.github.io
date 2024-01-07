import React, { Component } from 'react'
import Form from './Form'





export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numbers: 'numbers',
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      upperLowerCase: 'upperLowercase',
      mixNumLetters: 'mixNumLetters'
    }
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h1>Let's get some Arrays!</h1>
            <div>             
              <Form
                submit={this.submit}
                submitButtonText="Let's Go!"
                elements={() => (
                  <>
                    <select id="choice" className="choice">
                      <option value="numbers">Numbers</option>
                      <option value="uppercase">Uppercase Letters from A - Z</option>
                      <option value="lowercase">Lowercase Letters from a - z</option>
                      <option value="upperLowercase">Upper and Lowercase Letters Aa - Zz</option>
                      <option value="mixNumLetters">Mix Numbers and Letters</option>    
                    </select>
                  </>
                  ) 
                }
              />    
            </div>
          </div>          
        </div>
      );
  }

    submit = () => {
      // grabbing the index position 
      const numbersArrayPosition = document.getElementById("choice").value

      // create array to push index position
      const arrayOfElements = []

      // pushes the index position to the array so conditional statement can determine which is selected 
      const numbers = numbersArrayPosition
      arrayOfElements.push(numbers)

      const uppercase = numbersArrayPosition
      arrayOfElements.push(uppercase)

      const lowercase = numbersArrayPosition
      arrayOfElements.push(lowercase)

      const upperLowercase = numbersArrayPosition
      arrayOfElements.push(upperLowercase)

      const mixNumLetters = numbersArrayPosition
      arrayOfElements.push(mixNumLetters)

      // conditional statement to see which selection is made, then sent to the selected route
      if(arrayOfElements[0] === "numbers"){
        this.props.history.push(`/numbers`);

      } else if (arrayOfElements[1] === "uppercase"){
        this.props.history.push(`/uppercase`);

      } else if (arrayOfElements[2] === "lowercase"){
        this.props.history.push(`/lowercase`);

      } else if (arrayOfElements[3] === "upperLowercase"){
        this.props.history.push(`/upperLowercase`);

      } else if (arrayOfElements[4] === "mixNumLetters"){
        this.props.history.push(`/mixNumLetters`);
      }

      }
    

}

