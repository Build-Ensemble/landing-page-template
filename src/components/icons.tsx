'use client';

import React from 'react';
import Image from 'next/image';
export const Icons = {
  logo: (props: React.SVGProps<SVGSVGElement> & { size?: number }) => (
    <Image src="/logo.png" alt="Logo" width={props.size || 3048} height={props.size || 3048} />
  ),
};
