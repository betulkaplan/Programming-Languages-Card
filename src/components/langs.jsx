import React from 'react';

export default function Langs(props) {
  const [hover, setHover] = React.useState(0);
  const [flip, setFlip] = React.useState(0);

  const handleHover = () => {
    setHover(1);
  };
  const handleHoverRes = () => {
    setHover(0);
  };

  const handleClick = () => {
    setFlip(!flip);
  };

  return (
    <>
      <div
        className={`langs ${hover ? 'hover' : null} ${flip ? 'flip' : null}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverRes}
        onClick={handleClick}
      >
        {!flip ? (
          <>
            <img className="logo" src={props.logo} alt="" />
            <div className="desc">{props.name}</div>
          </>
        ) : (
          <>
            <ul className="back">
              <li>{props.options[0]}</li>
              <li>{props.options[1]}</li>
              <li>{props.options[2]}</li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
