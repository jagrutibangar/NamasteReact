import React from 'react';

//class component
class UserClass extends React.Component {

    // Constructor to initialize state if needed
    constructor(props){
        super(props);

        //console.log("Constructor called");

        //creating state in class component
        this.state = {
            userInfo:{
                login: "Ram",
                location: "default location",
                avatar_url:"https://avatars.githubusercontent.com/u/1?v=4"
            },
        }
        ;
        //Updating state using setState method
        //Never Update state directly in class component
    };


    async componentDidMount(){
        //console.log("Component Did Mount called");
        // This method is called after the component is mounted in the DOM

        const data = await fetch("https://api.github.com/users/jagrutibangar"); // Example API call
        const json = await data.json();
        //console.log(json);

        this.setState({
            userInfo:json, })
    }

    render(){
        //console.log("Child Render method called ");
        const {login, location, avatar_url} = this.state.userInfo;

        return (
            <>
            <div className='border-1 h-90 w-100 mt-1 rounded-4xl space-x-1 m-2 p-10 bg-gray-50 ml-30 text-xl font-medium '>

                <img src={avatar_url} alt="User Avatar" className='h-50' />
                <h2>Name: {login}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: sakshibangar@gmail.com</h3>
            </div>
            </>
        );
    };
};

export default UserClass;
// This is a class component that displays user information. It extends React.Component and overrides the render method to return JSX. The component is exported as UserClass for use in other parts of the application.

