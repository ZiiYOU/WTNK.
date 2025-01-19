import { useEffect, useState } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit';
  size?: 'header' | 'default';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
}

const Button = ({ size, type, onClick, children }: ButtonProps) => {
  const [isSubmit, setIsSubmit] = useState<boolean>(true);

  useEffect(() => {
    if (type !== 'submit') setIsSubmit(false);
  }, []);
  const headerButtonStyle =
    'cursor-pointer text-sm text-white px-3 py-[.5px] rounded-md duration-300 hover:text-theme hover:drop-shadow-xl';
  const defaultButtonStyle = `cursor-pointer w-full py-2 border ${isSubmit ? 'border-gray-300/10 text-default bg-theme' : 'border-theme/70 text-theme bg-transparent'} rounded-md duration-300 drop-shadow-xl hover:border-theme/50 hover:text-white hover:bg-theme/20 `;

  return (
    <button
      className={size && size === 'header' ? headerButtonStyle : defaultButtonStyle}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
