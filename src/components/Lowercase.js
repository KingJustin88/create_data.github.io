import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import arraysData from './data.json'
import './Arrays.css';


export default class Lowercase extends Component {

    constructor(props) {

        super(props);
        this.state = {
            userLowercaseLetterInput: '',
            userArrayNumberInput: '',
            listOfLowercaseLetters: [],
            finalResults: []
        }
    }

    submit = () => {
        var lowercaseLetters = arraysData.arrays[2].lowercase.toString(',')
        const { userLowercaseLetterInput, userArrayNumberInput, listOfLowercaseLetters, finalResults} = this.state;        
        for(let i = 0; i < userArrayNumberInput; i++){
                for(let i = 0; i < userLowercaseLetterInput; i++) {
                // math.random can multiply for how big the number you want
                // you can later add userinput for how big the amount of arrays you want
                var randomLetterIndex = Math.floor(Math.random() * 26);
                var lowercaseLetter = lowercaseLetters[randomLetterIndex];                          
                listOfLowercaseLetters.push(lowercaseLetter)
                console.log(lowercaseLetter)            
                }

                const comma = ','
                const wholeArrayOfNumbers = `<div>
                                            <p>[${listOfLowercaseLetters}]${comma}</p>
                                        </div>`
                finalResults.push(wholeArrayOfNumbers)                          
                // console.log(finalResults)
                // use map to multiply how many array you want at the end of innerHTML
                listOfLowercaseLetters.concat(listOfLowercaseLetters.splice(0,userLowercaseLetterInput))
                document.getElementById('results').innerHTML = finalResults.join(" ")
                
                
                
        }
        this.userLowercaseLetterInput.value = '';
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

        const { userLowercaseLetterInput, userArrayNumberInput} = this.state;

        return (
            <div className="arraysBackground">                        
                <div className="arrays-container">              
                    <Link className="arrays-button" to={`/`}>Home</Link>                                                         
                    <h1 className="arrays-background"></h1>                    
                        <h2 id="results"></h2>                                        
                    <div className="array-input">
                        <h1 className="h1">How would you like your Lowercase Letters arranged?</h1>
                        <Form
                            className="formsPosition"
                            submit={this.submit}
                            submitButtonText="Get your letters!"
                            elements={() => (
                                <>
                                    <input
                                        id="userNumberInput"
                                        className="userNumberInput" 
                                        name="userLowercaseLetterInput" 
                                        type="number"
                                        placeholder="How many letters in an array?"                                    
                                        value={userLowercaseLetterInput}
                                        onChange={this.change}
                                        ref={(el) => (this.userLowercaseLetterInput = el)}
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
                                </>
                            )}
                        /> 
                        
                                                     
                    </div>
                </div>
            </div>
            
        )
    }
}