import React from 'react'

type Props = {
  title: string;
  children: React.ReactElement;
}

const Tab: React.FC<Props> = ({ title, children }) => {
  return <div className='order-items' title={title}>{children}</div>
}

export default Tab