import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import Link from 'next/link';
import React from 'react';

type Props = {
  nextPage?: string
  prevPage?: string
};

function PaginationButton({ nextPage, prevPage }: Props) {
  return (
    <div className="my-5">
      <div className={classnames('flex items-center  mt-3 space-x-5 justify-end')}>
        {prevPage && (
          <Link href={prevPage}>
            <a className="flex flex-col items-center text-center group">
              <div className="flex items-center justify-center w-10 h-10 p-2 my-auto border border-black rounded-full hover:bg-primary">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <span className="small text-default/70 group-hover:text-primary">Previous</span>
            </a>
          </Link>
        )}
        {nextPage && (
          <Link href={nextPage} >
            <a className="flex flex-col items-center text-center group">
              <div className="flex items-center justify-center w-10 h-10 p-2 my-auto border border-black rounded-full hover:bg-primary">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <span className="small text-default/70 group-hover:text-primary">Next</span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default PaginationButton;
