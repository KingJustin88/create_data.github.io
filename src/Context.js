import React, { Component } from 'react';

const Context = React.createContext(); 

export class Provider extends Component {





render() {
const {authenticatedUser} = this.state;
const value = {
    authenticatedUser,
    data: this.data,
    actions: { // add the 'actions' property and object
    signIn: this.signIn,
    signOut: this.signOut
    },
};

return (
    <Context.Provider value={value}>
    {this.props.children}
    </Context.Provider>  
);
} 


signIn = async (emailAddress, password) => {
const user = await this.data.getUser(emailAddress, password);  
    if (user !== null) {
    user["password"]=password;
    this.setState(() => {
        return {
        authenticatedUser: user,
        };
    });
    // set cookie
    
    }
    return user;
}


}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
return function ContextComponent(props) {
return (
    <Context.Consumer>
    {context => <Component {...props} context={context} />}
    </Context.Consumer>
);
}
}