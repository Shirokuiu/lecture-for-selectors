import { PropsWithChildren } from 'react';

import './center-layout.scss';

import { PropsWithCssClassName } from 'src/type/shared';

function CenterLayout({ children, className = '' }: PropsWithChildren<PropsWithCssClassName>) {
  return <div className={`center-layout ${className}`.trim()}>{children}</div>;
}

export default CenterLayout;
