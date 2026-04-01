'use client';

import dynamic from 'next/dynamic';

const FuzzyText = dynamic(() => import('@/components/ui/FuzzyText'), {
  ssr: false,
});

export default function FuzzyText404() {
  return (
    <FuzzyText
      fontSize="clamp(6rem, 20vw, 14rem)"
      fontWeight={900}
      color="#db1a5d"
      baseIntensity={0.3}
      hoverIntensity={0.6}
      enableHover
    >
      404
    </FuzzyText>
  );
}
