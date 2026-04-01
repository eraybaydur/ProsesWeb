'use client';

import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

const FuzzyText = dynamic(() => import('@/components/ui/FuzzyText'), {
  ssr: false,
});

export default function FuzzyText404() {
  const { resolvedTheme } = useTheme();

  return (
    <FuzzyText
      fontSize="clamp(6rem, 20vw, 14rem)"
      fontWeight={900}
      color={resolvedTheme === 'dark' ? '#dc3063' : '#db1a5d'}
      baseIntensity={0.3}
      hoverIntensity={0.6}
      enableHover
    >
      404
    </FuzzyText>
  );
}
