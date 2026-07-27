const Button = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`rounded-xl bg-[#005BAC] px-6 py-3 text-white font-semibold transition-all duration-300 hover:brightness-110 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;