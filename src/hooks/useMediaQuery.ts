import { useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

const config = resolveConfig(tailwindConfig);

const useMediaQuery = () => {
  const screens = config.theme?.screens as { [key: string]: string };

  const getBreakpointName = () => {
    if (!screens || typeof window === 'undefined') return '';
    const names = Object.keys(screens).reverse();
    return names.reduce((prev, name) => {
      if (!window.matchMedia(`(min-width: ${screens[name]})`).matches) return name;
      return prev;
    }, names[0]);
  };

  const [breakpointName, setBreakpointName] = useState(getBreakpointName);

  useEffect(() => {
    const handleResize = () => {
      const name = getBreakpointName();
      if (breakpointName !== name) setBreakpointName(name);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return breakpointName;
};

export default useMediaQuery;

// 2xl: "1536px"
// lg: "1024px"
// md: "768px"
// sm: "640px"
// xl: "1280px"
