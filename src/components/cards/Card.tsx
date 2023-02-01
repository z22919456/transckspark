import tw from 'tailwind-styled-components';

const Card = tw.div`w-full 
  relative
  py-5 md:px-0 sm:px-5 lg:px-5 lg:odd:pl-0 lg:even:pr-0 sm:odd:pl-0 sm:even:pr-0
  border-t sm:odd:border-r md:odd:border-r-0 lg:odd:border-r border-default 
  before:content-none sm:odd:before:content-[''] md:odd:before:content-none lg:odd:before:content-[''] 
  before:absolute 
  before:h-10 before:w-10 before:top-0 before:right-0 
  before:translate-x-1/2 before:-translate-y-1/2 before:bg-white before:z-[1]
  cursor-pointer
  group
`;

export const CardContainer = el.div`grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2`;

export default Card;
