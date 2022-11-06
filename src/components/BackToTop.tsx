import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function BackToTop() {
  const handleClick = () => window.scrollTo(0, 0);
  return (
    <button className="flex flex-col items-center mx-auto my-5 text-center group" onClick={handleClick}>
      <div className="flex items-center justify-center w-10 h-10 my-auto border border-black rounded-full group-hover:bg-primary">
        <FontAwesomeIcon icon={faArrowUp} className="h-5" />
      </div>
      <span className="small text-default/70 group-hover:text-primary">Back to Top</span>
    </button>
  );
}

export default BackToTop;
