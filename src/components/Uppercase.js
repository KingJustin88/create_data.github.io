import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import arraysData from './data.json'
import './Arrays.css';


export default class Uppercase extends Component {

    
    constructor(props) {

        super(props);
        this.state = {
            userUppercaseLetterInput: '',
            userArrayNumberInput: '',
            listOfUppercaseLetters: [],
            finalResults: []
        }
    }

    submit = () => {
        var uppercaseLetters = arraysData.arrays[1].uppercase.toString(',')
        const { userUppercaseLetterInput, userArrayNumberInput, listOfUppercaseLetters, finalResults} = this.state;        
        for(let i = 0; i < userArrayNumberInput; i++){
                for(let i = 0; i < userUppercaseLetterInput; i++) {
                // math.random can multiply for how big the number you want
                // you can later add userinput for how big the amount of arrays you want
                var randomLetterIndex = Math.floor(Math.random() * 26);
                var uppercaseLetter = uppercaseLetters[randomLetterIndex];                        
                listOfUppercaseLetters.push(uppercaseLetter) 
                console.log(uppercaseLetter)             
                }



                const comma = ','
                const wholeArrayOfNumbers = `<div>
                                            <p>[${listOfUppercaseLetters}]${comma}</p>
                                        </div>`
                finalResults.push(wholeArrayOfNumbers)                          
                // console.log(finalResults)
                // use map to multiply how many array you want at the end of innerHTML
                listOfUppercaseLetters.concat(listOfUppercaseLetters.splice(0,userUppercaseLetterInput))
                document.getElementById('results').innerHTML = finalResults.join(" ")
                
                
                
        }
        this.userUppercaseLetterInput.value = '';
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

        const { userUppercaseLetterInput, userArrayNumberInput} = this.state;

        return (
            <div className="arraysBackground">
                <div className="arrays-container">
                    <Link className="arrays-button" to={`/`}>Home</Link>                
                    <h1 className="arrays-background"></h1> 
                        <h2 id="results"></h2>
                    <div className="array-input">
                        <h1 className="h1">How would you like your Uppercase Letters arranged?</h1> 
                        <Form
                            submit={this.submit}
                            submitButtonText="Get your letters!"
                            elements={() => (
                                <React.Fragment>
                                    <input
                                        id="userNumberInput"
                                        className="userNumberInput" 
                                        name="userUppercaseLetterInput" 
                                        type="number"
                                        placeholder="How many letters in an array?"                                    
                                        value={userUppercaseLetterInput}
                                        onChange={this.change}
                                        ref={(el) => (this.userUppercaseLetterInput = el)}
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