"use client"

import Image from "next/image"
import { CustomButtonProps } from '../types/index';

const CustomButton = ({ title, btnType, containerStyles, handleClick, rightIcon, textStyles, isDisabled }: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={btnType}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1 ${textStyles}`} >
				{title}
			</span>
      {rightIcon && (
        <div className="relative w-6 h-6" >
          <Image 
            src={rightIcon}
            alt="Right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
		</button>
	)
}

export default CustomButton
