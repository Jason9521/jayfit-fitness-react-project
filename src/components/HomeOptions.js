import "../styles/HomeOptions.css"
import { Link } from 'react-router-dom'


const HomeOptions = () => {
    return ( 
        <div className="options-container">

                <div>
                    <h2>Enter Your Information</h2>
                    <p>Tell us a bit about yourself and your fitness goals. We will use that information to determine the best plan that works for you. </p> 
                    <Link to='/personal-info'>
                        <button type="button">Get Started</button>
                    </Link>
                </div>

                <div>
                    <h2>Track Calories</h2>
                    <p>Calories really do add up. Most people are eating too much or too little without noticing. Keep track of all of the foods you eat, here on JayFit Fitness</p>
                    <Link to='/calorie-tracker'>
                        <button type="button">Track</button>
                    </Link>
                </div>

                <div>
                    <h2>Create Workouts</h2>
                    <p>Is there a certain workout regimen that you follow? Store them here and make adjustments as you continue to improve</p>
                    <Link to='/create-workouts'>
                        <button type="button">Create</button>
                    </Link>
                </div>

                <div>
                    <h2>Search Exercises</h2>
                    <p>Need new exercises to add to your workouts? Search for them here using our exercise database, powered by ['API NAME']</p>
                    <Link to='/exercise-search'>
                        <button type="button">Search</button>
                    </Link>
                </div>

        </div>
     );
}
 
export default HomeOptions;