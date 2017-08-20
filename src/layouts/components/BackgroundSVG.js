import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
`;

export default function BackgroundSVG() {
  return (
    <Svg viewBox="0 0 1024 535">
      <defs>
        <linearGradient
          x1="64.0475814%"
          y1="90.3737383%"
          x2="76.1003264%"
          y2="8.81175504%"
          id="linearGradient-1"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="0%" />
          <stop stopColor="#BBC8FD" stopOpacity="0.750651042" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="78.744885%"
          y1="44.8441497%"
          x2="-25.8994655%"
          y2="54.4539594%"
          id="linearGradient-2"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="0%" />
          <stop stopColor="#C6EDFF" stopOpacity="0.763813406" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="39.5208075%"
          y1="7.48822932%"
          x2="38.2751555%"
          y2="87.5027415%"
          id="linearGradient-3"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="0%" />
          <stop stopColor="#B0CBFD" stopOpacity="0.554149683" offset="100%" />
        </linearGradient>
      </defs>
      <g fillRule="evenodd">
        <polygon
          id="Path-2"
          fill="url(#linearGradient-1)"
          points="1024 5.56094071e-15 1024 534.277344 -5.68434189e-14 55.3515625 -5.68434189e-14 0"
        />
        <polygon
          id="Path-2"
          fill="url(#linearGradient-2)"
          points="1024.58345 0.5546875 372 5.68434189e-14 372 494.46875 1024.58345 220.550781"
        />
        <polygon
          id="Path-2"
          fill="url(#linearGradient-3)"
          transform="translate(512.061355, 284.968750) scale(-1, -1) translate(-512.061355, -284.968750) "
          points="0.12271095 40.65625 0.12271095 569.9375 108.032867 569.9375 1024 184.800781 1024 0"
        />
      </g>
    </Svg>
  );
}
