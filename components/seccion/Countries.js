import { getCountryAll } from "../../service/Axios";

const Countries = ({ countries }) => {
  return (
    <>
      <div>
        {countries.map((county) => (
          <div key={county.name} className="card">
            <img src={county.flag} alt="" />
            <h5> {county.name} </h5>
            <p>
              Population: <strong> {county.population}</strong>
            </p>
            <p>
              Region: <strong> {county.region}</strong>{" "}
            </p>
            <p>
              Capital: <strong> {county.capital}</strong>{" "}
            </p>
          </div>
        ))}
      </div>

      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            margin: auto;
            text-align: center;
            justify-content: center;
          }

          .card {
            display: flex;
            width: 30%;
            min-height: 650px;
            flex-direction: column;
            margin-top: 15px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            border-radius: 5px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
          }
          h5 {
            font-size: 1.2rem;
          }
          img {
            border-radius: 5px 5px 0 0;
            max-width: 350px;
          }
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </>
  );
};

export default Countries;
