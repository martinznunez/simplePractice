const ContainerDarkMode = () => {
  return (
    <>
      <div>
        <p>image</p>
        <p>Dark Mode</p>
      </div>
      <style jsx>
        {`
          div {
            display: flex;
            margin-right: 10%;
            font-size: 1.3rem;
          }
          p {
            margin: 5px;
          }
        `}
      </style>
    </>
  );
};

export default ContainerDarkMode;
