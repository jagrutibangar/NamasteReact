import './User.css'

const User = ({name}) =>{
    return (
        <>
        <div className="usercard">
        <h1>User 1</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Nashik</h3>
        <h3>Contact: jagrutibangar@gmail.com</h3>
        </div>
        </>
    );
};

export default User;