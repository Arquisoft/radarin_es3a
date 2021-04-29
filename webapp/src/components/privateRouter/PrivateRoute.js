import React from "react";
import solidAuth from 'solid-auth-client';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  componentDidMount() {
    const fetchUserEmail = async () => {
      const response = await solidAuth.currentSession();
      const { user } = await response.json();
      this.setState({
        user
      });
    };
  }


  render() {
    return (
      <Route render={(props) => (
           this.state.user === null 
            ? <Redirect to='/'/> 
            : console.log(this.state.user)
        )}/>
    );
  }
}
export default PrivateRoute