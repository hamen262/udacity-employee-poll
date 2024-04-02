import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { useDispatch } from "react-redux";

const Nav = (props) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setAuthedUser(null));
  }
  return (
    <nav className="nav">
      <div className="left-side">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leaderboard">LeaderBoard</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>


        </ul>
      </div>
      <div className="right-side">
        <ul>
          <li className='user-info'>{props.authedUser.id}</li>
          <li className='user-info'><Link to="/" onClick={handleLogout}>Log out</Link> </li>
        </ul>
      </div>

    </nav>
  );
};
const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(Nav);
