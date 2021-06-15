const Button = ({ value, style }) => {
  return (
    <>
      <button className={style}> {value} </button>
      <style jsx>{`
        button {
          font-size: 1.2rem;
        }
        .${style} {
          padding: 10px;
          margin: 10px;
          font-size: 2rem;
          cursos: pointer;
        }
      `}</style>
    </>
  );
};

export default Button;
