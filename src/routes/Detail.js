import React from "react";

// function Detail(props) {
//   console.log(props);
//   return <span>hello</span>;
// }

class Detail extends React.Component {
  componentDidMount() {
    //나중에
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    console.log(location.state);
  }
  render() {
    //먼저
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
