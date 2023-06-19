'use client';

import Image from 'next/image';
import React from 'react';
import { ICustomButton } from '~/types';

const CustomButton: React.FC<ICustomButton> = ({
  containerStyles,
  title,
  handleClick,
  type,
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      className={` ${containerStyles} custom-btn`}
      disabled={false}
      type={type || `button`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles || ''}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="Right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
