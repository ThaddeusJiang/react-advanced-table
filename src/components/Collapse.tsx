import React, { FC } from 'react';

type Props = {
  title: string;
};

export const Collapse: FC<Props> = ({ title, children }) => {
  return (
    <div tabIndex={0} className="collapse ">
      <input type="checkbox"></input>
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        {children ?? <p className=" text-yellow-400">Your content.</p>}
      </div>
    </div>
  );
};
