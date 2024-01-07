import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import arraysData from './data.json'
import './Arrays.css';

export default class MixNumLetters extends Component {

    constructor(props) {

        super(props);
        this.state = {
            userMixNumLetterInput: '',
            userArrayNumberInput: '',
            listOfMixNumLetters: [],
            finalResults: []
        }
    }

    submit = () => {
        var mixNumLetters = arraysData.arrays[4].mixNumLetters.join('')
        const { userMixNumLetterInput, userArrayNumberInput, listOfMixNumLetters, finalResults} = this.state;        
        for(let i = 0; i < userArrayNumberInput; i++){
                for(let i = 0; i < userMixNumLetterInput; i++) {
                // math.random can multiply for how big the number you want
                // you can later add userinput for how big the amount of arrays you want
                var randomMixNumLetterIndex = Math.floor(Math.random() * 62);
                var mixNumLetter = mixNumLetters[randomMixNumLetterIndex];                          
                listOfMixNumLetters.push(mixNumLetter)           
                }

                const comma = ','
                const wholeArrayOfNumbers = `<div>
                                            <p>[${listOfMixNumLetters}]${comma}</p>
                                        </div>`
                finalResults.push(wholeArrayOfNumbers)                          
                // console.log(finalResults)
                // use map to multiply how many array you want at the end of innerHTML
                listOfMixNumLetters.concat(listOfMixNumLetters.splice(0,userMixNumLetterInput))
                document.getElementById('results').innerHTML = finalResults.join("")
                
                
                
        }
        this.userMixNumLetterInput.value = '';
        this.userArrayNumberInput.value = '';
        this.state.finalResults = [];  
        // console.log(uppercaseLetters)      
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;    
        this.setState(() => {
        return {
            [name]: value
        };
        });
    }

    render() {

        const { userMixNumLetterInput, userArrayNumberInput} = this.state;

        return (
            <div className="arraysBackground">
                <div className="arrays-container">
                    <Link className="arrays-button" to={`/`}>Home</Link>                
                    <h1 className="arrays-background"></h1> 
                        <h2 id="results"></h2>
                    <div className="array-input">
                        <h1 className="h1">How would you like your Numbers and Letters arranged?</h1>                         
                        <Form
                            submit={this.submit}
                            submitButtonText="Get your numbers and letters!"
                            elements={() => (
                                <React.Fragment>
                                    <input
                                        id="userNumberInput"
                                        className="userNumberInput" 
                                        name="userMixNumLetterInput" 
                                        type="number"
                                        placeholder="How many numbers and letters in an array?"                                    
                                        value={userMixNumLetterInput}
                                        onChange={this.change}
                                        ref={(el) => (this.userMixNumLetterInput = el)}
                                    />
                                    <input
                                        id="userArrayNumberInput" 
                                        name="userArrayNumberInput"
                                        className="userArrayNumberInput" 
                                        type="number" 
                                        placeholder="How many arrays?"                                   
                                        value={userArrayNumberInput}
                                        onChange={this.change}
                                        ref={(el) => (this.userArrayNumberInput = el)}
                                    />
                                </React.Fragment>
                            )}
                        />                            
                    </div>
                </div>
            </div>
            
        )
    }
}