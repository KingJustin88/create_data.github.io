import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import arraysData from './data.json'
import './Arrays.css';

export default class UpperLowercase extends Component {

    constructor(props) {

        super(props);
        this.state = {
            userUpperLowercaseLetterInput: '',
            userArrayNumberInput: '',
            listOfUpperLowercaseLetters: [],
            finalResults: []
        }
    }

    submit = () => {
        var upperlowercaseLetters = arraysData.arrays[3].upperLowercase.join('')
        const { userUpperLowercaseLetterInput, userArrayNumberInput, listOfUpperLowercaseLetters, finalResults} = this.state;        
        for(let i = 0; i < userArrayNumberInput; i++){
                for(let i = 0; i < userUpperLowercaseLetterInput; i++) {
                // math.random can multiply for how big the number you want
                // you can later add userinput for how big the amount of arrays you want
                var randomLetterIndex = Math.floor(Math.random() * 52);
                var upperlowercaseLetter = upperlowercaseLetters[randomLetterIndex];                          
                listOfUpperLowercaseLetters.push(upperlowercaseLetter)           
                }

                const comma = ','
                const wholeArrayOfNumbers = `<div>
                                            <p>[${listOfUpperLowercaseLetters}]${comma}</p>
                                        </div>`
                finalResults.push(wholeArrayOfNumbers)                          
                // console.log(finalResults)
                // use map to multiply how many array you want at the end of innerHTML
                listOfUpperLowercaseLetters.concat(listOfUpperLowercaseLetters.splice(0,userUpperLowercaseLetterInput))
                document.getElementById('results').innerHTML = finalResults.join("")
                
                
                
        }
        this.userUpperLowercaseLetterInput.value = '';
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

        const { userUpperLowercaseLetterInput, userArrayNumberInput} = this.state;

        return (
            <div className="arraysBackground">
                <div className="arrays-container">
                    <Link className="arrays-button" to={`/`}>Home</Link>                
                    <h1 className="arrays-background"></h1> 
                        <h2 id="results"></h2>
                    <div className="array-input">
                    <h1 className="h1">How would you like your Upper and Lowercase Letters arranged?</h1>    
                        <Form
                            submit={this.submit}
                            submitButtonText="Get your letters!"
                            elements={() => (
                                <React.Fragment>
                                    <input
                                        id="userNumberInput"
                                        className="userNumberInput" 
                                        name="userUpperLowercaseLetterInput" 
                                        type="number"
                                        placeholder="How many letters in an array?"                                    
                                        value={userUpperLowercaseLetterInput}
                                        onChange={this.change}
                                        ref={(el) => (this.userUpperLowercaseLetterInput = el)}
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