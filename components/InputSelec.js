const InputSelec = ({ style, setSelecRegion }) => {
  return (
    <>
      <select
        onChange={(e) => setSelecRegion(e.target.value)}
        className={style}
      >
        <option value="total">---Select Region---</option>
        <option>Africa</option>

        <option>Americas</option>

        <option>Asia</option>

        <option>Europe</option>

        <option>Oceania</option>
      </select>

      <style>
        {`
        .${style}{
             padding:20px;
             width: 300px;
        }
      
      `}
      </style>
    </>
  );
};

export default InputSelec;
