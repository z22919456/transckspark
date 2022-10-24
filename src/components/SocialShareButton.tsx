import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

function SocialShareButton() {
  const { asPath } = useRouter();
  const host = useMemo(() => process.env.NEXT_PUBLIC_HOST || '', []);
  console.log(host + asPath);
  return (
    <div className="my-5">
      <p className="text-center small text-default/70">Share with</p>
      <div className="flex items-center justify-center my-auto mt-3 space-x-5">
        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(host + asPath)}`} target="_blank">
          <a className="flex items-center justify-center w-10 h-10 border border-black rounded-full hover:bg-primary" rel="noreferrer noopener" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </Link>
        <Link href={`https://twitter.com/intent/tweet?url=${encodeURI(host + asPath)}`} >
          <a className="flex items-center justify-center w-10 h-10 border border-black rounded-full hover:bg-primary" rel="noreferrer noopener" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </Link>
        <button type="button" className="flex items-center justify-center w-10 h-10 border border-black rounded-full hover:bg-primary">
          { }
          <FontAwesomeIcon icon={faInstagram} />
        </button>
      </div>
    </div>
  );
}

export default SocialShareButton;
