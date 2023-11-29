import React from "react";
const Friend = (props) => {
  const { friend } = props;
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div className="info" style={style}>
      <p>-{friend.name}-</p>
      <p>{friend.email}</p>
    </div>
  );
};

export default Friend;
