import { Component } from "react";
import ShowPeople from "./ShowPeople";
import { UserContext } from './UserContext';
class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPeopleClosed: true
    }
  }

  toggleHandler = () => {
    this.setState((prev) => ({showPeopleClosed: !prev.showPeopleClosed}))
  }

  static contextType =UserContext;
  render () {
    const { isLogin, people } = this.context;

    if (!(isLogin && people)) {
		throw new Error("Auth Failed");
    }

    return (
			<>
        <h1 className="center">🚀 Welcome to People page!</h1>
        <div className="center">
          <button className="show-people" onClick={this.toggleHandler}>Show People</button>
        </div>
        {this.state.showPeopleClosed ? "" : <ShowPeople  toggleHandler={this.toggleHandler} />}
			</>
		);
  }
}

export default People;
