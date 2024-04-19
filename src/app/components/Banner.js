import { Row } from "@narmi/design_system";
import { useAppContext } from "../context/context";

const Banner = () => {
  const [appState] = useAppContext();

  const remaining =
    500 - appState.cart.reduce((total, p) => (total += p.price), 0);

  return (
    <div className="fontColor--white bgColor--pine padding--x--xl padding--y--xl">
      <div className="bounds">
      <Row alignItems="center">
        <Row.Item>
          <h1 className="fontFamily--heading fontSize--heading0">
            Welcome, Opal!
          </h1>
          <p>Please pick out whatever you need for your home office.</p>
        </Row.Item>
        <Row.Item shrink>
          <div
            className="stipend-remaining alignChild--center--center fontFamily--heading fontColor--pine"
            style={{ backgroundImage: "url(./star.svg)" }}
          >
            ${remaining}
          </div>
        </Row.Item>
      </Row>
      </div>
    </div>
  );
};

export default Banner;
