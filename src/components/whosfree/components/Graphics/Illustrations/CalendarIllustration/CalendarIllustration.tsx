import React, { SVGAttributes } from 'react';
import { joinClassNames } from '../../../../utils';
import { IllustrationContainer, IllustrationContainerProps } from '../IllustrationContainer';
import styles from './styles.scss';

export type CalendarIllustrationProps = SVGAttributes<SVGElement> &
  Omit<IllustrationContainerProps, 'children'> & {
    title?: string;
    desc?: string;
  };

export const CalendarIllustration: React.VFC<CalendarIllustrationProps> = ({
  title,
  desc,
  className,
  ...props
}) => (
  <IllustrationContainer {...props}>
    <svg className={joinClassNames(styles.default, className)}
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512"
      style="enable-background:new 0 0 512 512;" xml:space="preserve">
      
      {title && <title>{title}</title>}
      {desc && <desc>{desc}</desc>}
      <path style="fill:#fd8469;" d="M490.667,512H21.333C9.6,512,0,502.4,0,490.667V73.6c0-11.733,9.6-21.333,21.333-21.333h469.333  C502.4,52.267,512,61.867,512,73.6v417.067C512,502.4,502.4,512,490.667,512z" />
      <path style="fill:#F2F2F2;" d="M474.667,173.867H37.333c-6.4,0-10.667,4.267-10.667,10.667v290.133  c0,6.4,4.267,10.667,10.667,10.667H400L485.333,400V184.533C485.333,179.2,481.067,173.867,474.667,173.867z" />
      <path style="fill:#CDD6E0;" d="M400,485.333L485.333,400H409.6c-5.333,0-9.6,4.267-9.6,9.6V485.333z" />
      <g>
        <circle style="fill:#FFFFFF;" cx="85.333" cy="92.8" r="22.4" />
        <circle style="fill:#FFFFFF;" cx="199.467" cy="92.8" r="22.4" />
        <circle style="fill:#FFFFFF;" cx="312.533" cy="92.8" r="22.4" />
        <circle style="fill:#FFFFFF;" cx="426.667" cy="92.8" r="22.4" />
      </g>
      <g>
        <path style="fill:#40596B;" d="M85.333,104.533L85.333,104.533c-7.467,0-13.867-6.4-13.867-13.867v-76.8C70.4,6.4,76.8,0,85.333,0   l0,0C92.8,0,99.2,6.4,99.2,13.867V89.6C99.2,98.133,92.8,104.533,85.333,104.533z" />
        <path style="fill:#40596B;" d="M199.467,104.533L199.467,104.533c-7.467,0-13.867-6.4-13.867-13.867v-76.8   C185.6,6.4,192,0,199.467,0l0,0c7.467,0,13.867,6.4,13.867,13.867V89.6C213.333,98.133,206.933,104.533,199.467,104.533z" />
        <path style="fill:#40596B;" d="M312.533,104.533L312.533,104.533c-7.467,0-13.867-6.4-13.867-13.867v-76.8   C298.667,6.4,305.067,0,312.533,0l0,0C320,0,326.4,6.4,326.4,13.867V89.6C327.467,98.133,321.067,104.533,312.533,104.533z" />
        <path style="fill:#40596B;" d="M426.667,104.533L426.667,104.533c-7.467,0-13.867-6.4-13.867-13.867v-76.8   C412.8,6.4,419.2,0,426.667,0l0,0c7.467,0,13.867,6.4,13.867,13.867V89.6C441.6,98.133,435.2,104.533,426.667,104.533z" />
      </g>
      <g>
        <rect x="167.467" y="205.867" style="fill:#CDD6E0;" width="67.2" height="60.8" />
        <rect x="277.333" y="205.867" style="fill:#CDD6E0;" width="67.2" height="60.8" />
        <rect x="386.133" y="205.867" style="fill:#CDD6E0;" width="67.2" height="60.8" />
        <rect x="58.667" y="299.733" style="fill:#CDD6E0;" width="67.2" height="60.8" />
      </g>
      <rect x="167.467" y="299.733" style="fill:#FFD15C;" width="67.2" height="60.8" />
      <g>
        <rect x="277.333" y="299.733" style="fill:#CDD6E0;" width="67.2" height="60.8" />
        <rect x="386.133" y="299.733" style="fill:#CDD6E0;" width="67.2" height="60.8" />
        <rect x="58.667" y="392.533" style="fill:#CDD6E0;" width="67.2" height="60.8" />
        <rect x="167.467" y="392.533" style="fill:#CDD6E0;" width="67.2" height="60.8" />
        <rect x="277.333" y="392.533" style="fill:#CDD6E0;" width="67.2" height="60.8" />
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
    </svg>
  </IllustrationContainer>
);

CalendarIllustration.displayName = 'CalendarIllustration';


