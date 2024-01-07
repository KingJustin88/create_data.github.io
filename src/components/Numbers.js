import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
// import arraysData from './data.json'
import './Arrays.css';

// var numbers = arraysData.arrays[0].numbers.toString(', ')
// console.log(numbers[0])


export default class Numbers extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            userNumberInput: '',
            userArrayNumberInput: '',
            listOfNumbers: [],
            finalResults: []          
        }        
    }    

    submit = () => {
        const { userNumberInput, userArrayNumberInput, listOfNumbers, finalResults} = this.state;        
        // const numbers = { userNumberInput, userArrayNumberInput, listOfNumbers, finalResults};
        // console.log(numbers)        
        for(let i = 0; i < userArrayNumberInput; i++){
                for(let i = 0; i < userNumberInput; i++) {
                // math.random can multiply for how big the number you want
                // you can later add userinput for how big the number you want            
                const randomNumber = Math.ceil(Math.random() * 100);
                listOfNumbers.push(randomNumber)
                console.log(listOfNumbers)                
                }
                const comma = ','
                // use .join('') after listOfNumbers to get rid of commas
                const wholeArrayOfNumbers = `<div>
                                            <p>[${listOfNumbers}]${comma}</p>
                                        </div>`
                finalResults.push(wholeArrayOfNumbers)                          
                // console.log(finalResults)
                // use map to multiply how many array you want at the end of innerHTML
                listOfNumbers.concat(listOfNumbers.splice(0,userNumberInput))
                document.getElementById('results').innerHTML = finalResults.join(" ")
                
                
                
        }
        this.userNumberInput.value = '';
        this.userArrayNumberInput.value = '';
        this.state.finalResults = [];        
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
        const {userNumberInput, userArrayNumberInput} = this.state

        return (
            <div className="arraysBackground">
                <div className="arrays-container">
                    <Link className="arrays-button" to={`/`}>Home</Link>                
                    <h1 className="arrays-background"></h1> 
                        <h2 id="results"></h2>
                    <div className="array-input">                                       
                        <h1 className="h1">How would you like your Numbers arranged?</h1>
                        <Form
                            submit={this.submit}
                            submitButtonText="Get your numbers!"
                            elements={() => (
                                
                                <React.Fragment>
                                    
                                    <input
                                        id="userNumberInput"
                                        className="userNumberInput" 
                                        name="userNumberInput" 
                                        type="number"
                                        placeholder="How many numbers in an array?"                                    
                                        value={userNumberInput}
                                        onChange={this.change}
                                        ref={(el) => (this.userNumberInput = el)}
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


