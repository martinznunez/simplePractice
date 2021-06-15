import ContainerDarkMode from "./ContainerDarkMode";
import Title from "./Title";
const NavBar = () => {
  return (
    <>
      <div>
        <Title />
        <ContainerDarkMode />
      </div>
      <style jsx>
        {`
          div {
            display: flex;
            height: 20%;
            justify-content: space-between;
            background-color: #fafafa;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default NavBar;
