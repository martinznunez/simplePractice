import { getCountryName, getCountryAll } from "../../service/Axios";
import NotFound from "../../components/NotFound";
import CountryLayout from "../../components/seccion/CountryLayout";
import { useRouter } from "next/router";
const Country = ({ newCity, error }) => {
  const router = useRouter();

  const { name } = router.query;

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <CountryLayout newCity={newCity} />
    </>
  );
};

// export const getServerSideProps = async ({ params }) => {
//   try {
//     const { name } = params;
//     const respose = await getCountryName(name);
//     const data = respose.data;

//     return {
//       props: { newCity: data },
//     };
//   } catch {
//     return {
//       props: { error: true },
//     };
//   }
// };

export const getStaticPaths = async () => {
  const respose = await getCountryAll();
  const data = respose.data;

  const paths = data.map((country) => {
    return {
      params: { name: country.name },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.name;

  try {
    const response = await getCountryName(name);
    const data = response.data;

    return {
      props: { newCity: data },
    };
  } catch {
    return {
      props: { error: true },
    };
  }
};
export default Country;
