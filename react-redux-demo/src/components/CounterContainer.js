import React from "react";
import { connect } from "react-redux";
import { increment } from "./../redux/counter/counterActions";

function CounterContainer(props) {
  return (
    <div>
      <h2>Counter - {props.count} </h2>
      <button onClick={props.increment}>Increment</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { increment: () => dispatch(increment()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
