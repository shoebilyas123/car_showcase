'use client';

import React from 'react';
import { ICustomButton } from '~/types';

const CustomButton: React.FC<ICustomButton> = ({
  containerStyles,
  title,
  handleClick,
}) => {
  return (
    <button
      className={` ${containerStyles} custom-btn`}
      disabled={false}
      type={`button`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
