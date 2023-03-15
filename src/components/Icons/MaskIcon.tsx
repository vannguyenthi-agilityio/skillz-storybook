export const MaskIcon = () => {
  return (
    <svg
      width='36'
      height='36'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <mask
        id='mask0_583_3886'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='36'
        height='36'
      >
        <circle
          cx='18'
          cy='18'
          r='18'
          fill='#D9D9D9'
        />
      </mask>
      <g mask='url(#mask0_583_3886)'>
        <rect
          x='1'
          y='1'
          width='35'
          height='36'
          fill='url(#pattern0)'
        />
        <circle
          cx='18'
          cy='18'
          r='17'
          stroke='#F3F3F3'
          strokeWidth='2'
        />
      </g>
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_583_3886'
            transform='matrix(0.00327571 0 0 0.00318471 -0.01101 0)'
          />
        </pattern>
        <image
          id='image0_583_3886'
          width='312'
          height='314'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};
