import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import QuestionDetail from "./QuestionDetail";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <Fragment>
      <div className="container">
        {props.authedUser === true ? <Login /> : (
          <div>
            <Nav />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/leaderboard" exact element={<LeaderBoard />} /> 
              <Route path="/question/:id" element={<QuestionDetail />} />
              <Route path="/new" element={<NewQuestion />} /> 
            </Routes>
          </div>)}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: (authedUser === null || Object.keys(authedUser).length === 0) ? true : false,
});

export default connect(mapStateToProps)(App);
