export const SecondsCounter = (props) => {
  const sixDigits = props.seconds.toString().padStart(6, "0").split("");

  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col digit-box">{sixDigits[0]}</div>
        <div className="col digit-box">{sixDigits[1]}</div>
        <div className="col digit-box">{sixDigits[2]}</div>
        <div className="col digit-box">{sixDigits[3]}</div>
        <div className="col digit-box">{sixDigits[4]}</div>
        <div className="col digit-box">{sixDigits[5]}</div>
      </div>
    </div>
  );
};
