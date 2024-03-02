import GET_TOP_100 from "../../get_api/GET_API";
import "../../../scss/top-100/top-100.scss";

const Top100 = () => {
  return (
    <div className="top-100">
      <div className="top-100-body">
        <div className="top-100-body-header">Топ-100 криптовалют</div>
        <div className="top-100-table">
          <GET_TOP_100 />
        </div>
      </div>
    </div>
  );
};

export default Top100;
