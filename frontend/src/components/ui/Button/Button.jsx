const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-[#01D3BE] hover:bg-[#00468A] text-white font-semibold px-6 py-3 rounded-full transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

// const Button = ({
//   children,
//   className = "",
//   ...props
// }) => {
//   return (
//     <button
//       className={`rounded-xl bg-[#005BAC] px-6 py-3 text-white font-semibold transition-all duration-300 hover:brightness-110 ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;