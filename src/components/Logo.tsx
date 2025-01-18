interface LogoProps {
  onClick?: () => void;
}
const Logo = ({ onClick }: LogoProps) => {
  return (
    <div onClick={onClick} className="text-theme font-bold text-xl">
      WTNK.
    </div>
  );
};

export default Logo;
