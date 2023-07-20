import "../styles/Header.css";
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <div className="header-div">
      <Link to="/" className="header">JayFit Fitness</Link>
      <h3 className="sub-header">Your Personal Fitness Journal</h3>
    </div>
  )
};

export default Title;
