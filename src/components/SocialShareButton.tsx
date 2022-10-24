import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import classnames from 'classnames';

type Props = {
  left?: boolean
};

function SocialShareButton({ left = false }: Props) {
  const { asPath } = useRouter();
  const host = useMemo(() => process.env.NEXT_PUBLIC_HOST || '', []);
  return (
    <div className="my-5">
      <p className={classnames('small text-default/70', left ? 'text-left' : 'text-center')}>Share with</p>
      <div className={classnames('flex items-center  mt-3 space-x-5', left ? 'justify-start' : 'my-auto justify-center')}>

        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(host + asPath)}`} target="_blank">
          <a className="flex flex-col items-center text-center group" rel="noreferrer noopener" target="_blank">
            <div className="flex items-center justify-center w-10 h-10 my-auto border border-black rounded-full hover:bg-primary">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <span className="small text-default/70 group-hover:text-primary">Facebook</span>
          </a>
        </Link>
        <Link href={`https://twitter.com/intent/tweet?url=${encodeURI(host + asPath)}`} >
          <a className="flex flex-col items-center text-center group" rel="noreferrer noopener" target="_blank">
            <div className="flex items-center justify-center w-10 h-10 my-auto border border-black rounded-full hover:bg-primary">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <span className="small text-default/70 group-hover:text-primary">Twitter</span>
          </a>
        </Link>
        <button type="button" className="flex flex-col items-center text-center group">
          <div className="flex items-center justify-center w-10 h-10 my-auto border border-black rounded-full hover:bg-primary">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <span className="small text-default/70 group-hover:text-primary">Twitter</span>
        </button>
      </div>
    </div>
  );
}

export default SocialShareButton;
