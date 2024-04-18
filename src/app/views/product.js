import { useAppContext } from "../context/context";
import VIEWS from "../context/views";
import { Row, Button, Tabs } from "@narmi/design_system";
import Print from "../components/Print";

const ProductHeading = ({ label }) => (

        <h3 className="fontFamily--heading fontSize--heading3 fontWeight--normal">
          {label}
        </h3>
)

const ProductView = () => {
  const [appState, setAppState] = useAppContext();
  const { currentProduct, products } = appState;

  const product = products.filter(({ name }) => name === currentProduct)[0];

  return (
    <>
      <section className="margin--bottom--l">
        <div className="margin--bottom">
          <Button
            kind="negative"
            startIcon="arrow-left"
            label="Back"
            onClick={() => {
              setAppState({
                ...appState,
                view: VIEWS.EXPLORE,
                currentProduct: null,
              });
            }}
          />
        </div>
        <Row>
          <Row.Item shrink>
            <div
              className="bgColor--white product-image rounded--all--m"
              style={{ backgroundImage: `url(${product.imgUrl})` }}
            ></div>
          </Row.Item>
          <Row.Item>
            <h2 className="margin--bottom fontColor--heading fontFamily--heading fontWeight--normal fontSize--heading1">
              {product.name}
            </h2>
            <div className="fontSize--l">${product.price}</div>
            <Tabs>
              <Tabs.List>
                <Tabs.Tab label="Overview" />
                <Tabs.Tab label="Benefits" tabId="benefits" />
                <Tabs.Tab label="Details" tabId="details" />
              </Tabs.List>
            </Tabs>
            <p>{product.description}</p>
            <div className="margin--top--xxl product-add">
              <Button label="Add to bag" />
            </div>
          </Row.Item>
        </Row>
      </section>

      <section className="margin--top--xl">
        <ProductHeading label="Narmi Testimonials" />
      </section>

      <section className="margin--top--xl">
        <ProductHeading label="Bought by" />
      </section>
    </>
  );
};

export default ProductView;
