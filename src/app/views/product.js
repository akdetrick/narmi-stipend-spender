import { useAppContext } from "../context/context";
import VIEWS from "../context/views";
import { Row, Button, Tabs } from "@narmi/design_system";

const ProductView = () => {
  const [appState, setAppState] = useAppContext();
  const { currentProduct, products } = appState;

  const product = products.filter(({ name }) =>
    name === currentProduct
  )[0];

  return (
    <>
      <div className="margin--bottom">
      <Button
        kind="negative"
        startIcon="arrow-left"
        label="Back"
        onClick={() => {
          setAppState({...appState, view: VIEWS.EXPLORE, currentProduct: null })
        }}
      />
      </div>
      <Row>
        <Row.Item shrink>
          <div className="product-image rounded--all--m" style={{ backgroundImage: `url(${product.imgUrl})`}}></div>
        </Row.Item>
        <Row.Item>
          <h2 className="margin--bottom fontColor--heading fontFamily--heading fontWeight--normal fontSize--heading1">{product.name}</h2>
          <div className="fontSize--l">${product.price}</div>
          <Tabs>
            <Tabs.List>
              <Tabs.Tab label="Overview" />
              <Tabs.Tab label="Benefits" tabId="benefits" />
              <Tabs.Tab label="Details" tabId="details" />
            </Tabs.List>
          </Tabs>
          <p>{product.description}</p>
        </Row.Item>
      </Row>
    </>
  );
};

export default ProductView;
