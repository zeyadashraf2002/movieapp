function Title({ title, className }) {
  return (
    <h2 className={`mb-4 ${className || ""}`}>
      {title}
    </h2>
  );
}

export default Title;
