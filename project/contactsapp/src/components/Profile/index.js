import React from 'react';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {profile: []};
  }

  componentDidMount() {
    fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "foster"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({ profile: data });
      console.log(data)
    });
  }

  render() {
    return (
      <div><h2>Profile</h2>
        <p>Name: {this.state.profile.name} <br />
        Total Contacts: {this.state.profile.count}</p>
      </div>
    );
  }
}

export default Profile;