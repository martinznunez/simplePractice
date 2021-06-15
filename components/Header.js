import NavBar from "./NavBar";
import Input from "./Input";
import InputSelec from "./InputSelec";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [nameCountry, setNameCountry] = useState(null);

  const [selecRegion, setSelecRegion] = useState();

  const router = useRouter();

  if (nameCountry) {
    router.push(`/country/${nameCountry}`);
  }

  return (
    <>
      <NavBar />

      <Input setNameCountry={setNameCountry} />
      <div>
        <InputSelec style={"style"} setSelecRegion={setSelecRegion} />
      </div>
      <style jsx>
        {`
          div {
            margin-top: 30px;
            margin-left: 10%;
          }
        `}
      </style>
    </>
  );
};

export default Header;
