export function Button({ children, className = "gumb", ...props }) {
  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  );
}
