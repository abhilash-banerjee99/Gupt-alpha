import { useRouter } from "next/router";
import Nav from "../../components/nav/Nav";
import Loader from "../../components/loader/Loader";
import Footer from "../../components/footer/Footer";
import { downloadFileApi } from "../../services/api";

const download = ({ statusCode }) => {
  const router = useRouter();
  const { id } = router.query;

  if (id) downloadFileApi(id);

  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
      </div>
      <div className="row justify-content-sm-center">
        <Loader />
        Download
      </div>
      <div className="row justify-content-sm-center">
        <Footer />
      </div>
    </div>
  );
};

export default download;