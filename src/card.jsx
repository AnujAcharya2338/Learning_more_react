import { useDebugValue } from "react"
import profilePiv from './assets/anuj.png'

function Card(){

    return(
        <div className="card">
            <img className = "img1" src={profilePiv} alt="Profile Picture" />
            <h2 className="card-title">Anuj Acharya</h2>
            <p className="card-text"> I am a student and i like video games and coding</p>
        </div>
    )
}
export default Card