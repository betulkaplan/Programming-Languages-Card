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
            <img className={'logo'} src={props.logo} alt="" />
            <div>{props.name}</div>
          </>
        ) : (
          <>
            <ul className="back">
              <li>{props.desc}</li>
              <li>{props.date}</li>
              <li>{props.author}</li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
