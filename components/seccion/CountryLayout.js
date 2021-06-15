import Button from "../Button";
import Link from "next/link";

const CountryLayout = ({ newCity }) => {
  return (
    <>
      <div>
        <Link href="/">
          <a>
            <Button style={"style"} value={"back"} />
          </a>
        </Link>
      </div>
      <div className="container">
        <div className="card" key={newCity[0].name} className="card">
          <img src={newCity[0].flag} alt="" />
          <h5> {newCity[0].name} </h5>
          <p>
            Population: <strong> {newCity[0].population}</strong>
          </p>
          <p>
            Region: <strong> {newCity[0].region}</strong>{" "}
          </p>
          <p>
            Capital: <strong> {newCity[0].capital}</strong>{" "}
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;

          align-items: center;

          text-align: center;
          justify-content: center;
        }

        h5 {
          font-size: 2rem;
        }
      `}</style>
    </>
  );
};

export default CountryLayout;
