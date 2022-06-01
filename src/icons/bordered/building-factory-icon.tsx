import type { FC, SVGProps } from 'react';

const BuildingFactoryMediumIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  fill = '#f1f2f3',
  ...rest
}) => {
  return (
    <svg
      enableBackground='new 0 0 24 24'
      fill='none'
      height={height}
      viewBox='0 0 24 24'
      width={width}
      xmlSpace='preserve'
      {...rest}
    >
      <g>
        <path
          d='M20,18.25h-2.099l-0.098-0.147c-1.013-1.52-1.554-3.305-1.554-5.131V12.9c0-0.635-0.515-1.15-1.15-1.15h-2.77
		c-0.053-0.716-0.08-1.434-0.08-2.153V9.4c0-0.635-0.515-1.15-1.15-1.15H6.9c-0.635,0-1.15,0.515-1.15,1.15v0.197
		c0,2.847-0.416,5.678-1.234,8.405L4.442,18.25H4c-0.414,0-0.75,0.336-0.75,0.75S3.586,19.75,4,19.75h16
		c0.414,0,0.75-0.336,0.75-0.75S20.414,18.25,20,18.25z M14.754,13.25c0.045,1.762,0.547,3.47,1.412,5h-2.607l-0.074-0.248
		c-0.466-1.555-0.786-3.146-0.989-4.752H14.754z M7.25,9.75h3.501c0.014,2.878,0.439,5.738,1.249,8.5H6.001
		C6.811,15.488,7.235,12.628,7.25,9.75z'
          fill={fill}
        />
        <path
          d='M9.335,6.671l0.499-0.25c0.687-0.344,1.506-0.293,2.145,0.134c1.223,0.815,2.817,0.815,4.04,0
		c0.639-0.426,1.458-0.477,2.146-0.134l0.499,0.25c0.37,0.185,0.821,0.035,1.006-0.335c0.185-0.37,0.035-0.821-0.335-1.006
		l-0.499-0.25c-1.169-0.584-2.561-0.498-3.648,0.227c-0.719,0.48-1.656,0.48-2.376,0c-1.087-0.725-2.48-0.812-3.648-0.227
		l-0.499,0.25c-0.37,0.185-0.521,0.636-0.335,1.006S8.965,6.856,9.335,6.671z'
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default BuildingFactoryMediumIcon;