import React, { FC } from 'react';

type Props = {
  id: string;
};

export const Modal: FC<Props> = ({ id }) => {
  return (
    <div>
      <input type="checkbox" id={id} className="modal-toggle"></input>
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor={id} className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
