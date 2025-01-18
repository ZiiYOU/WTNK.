interface ButtonProps {
  type?: 'button' | 'submit';
  size?: 'header' | 'default';
  onClick?: () => void;
  children: string;
}

const Button = ({ size, type, onClick, children }: ButtonProps) => {
  const headerButtonStyle =
    'border border-white/70 text-sm text-white px-3 py-[.5px] rounded-md duration-300 hover:border-theme/50 hover:text-theme hover:drop-shadow-xl';
  const defaultButtonStyle =
    'w-full py-2 border border-gray-300/10 text-default bg-theme rounded-md duration-300 drop-shadow-xl hover:border-theme/50 hover:text-white hover:bg-theme/20 ';

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
