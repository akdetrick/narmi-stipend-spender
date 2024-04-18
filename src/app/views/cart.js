import { useAppContext } from "../context/context";
import { Button, Row, IconButton } from "@narmi/design_system";

const Cart = () => {
  const [appState, setAppState] = useAppContext();
  return (
    <div className="shim">
      <aside className="cart-list padding--all bgColor-smokeGrey padding--top--xl">
        <Row>
          <Row.Item>
            <h2 className="fontFamily--heading fontSize--heading2 fontColor--heading">
              My office
            </h2>
          </Row.Item>
          <Row.Item shrink>
            <IconButton
              textSize="l"
              name="x"
              onClick={() => {
                setAppState({ ...appState, isCartOpen: false });
              }}
            />
          </Row.Item>
        </Row>
        <div className="margin--y--xxl">
          {appState.cart.map((p, i) => (
            <div className={`margin--top ${i > 0 ? "border--top padding--top" : ""}`}>
              <Row>
                <Row.Item shrink>
                  <div
                    className="cart-img"
                    style={{ backgroundImage: `url(/products/${p.imgFile})` }}
                  ></div>
                </Row.Item>
                <Row.Item>
                  <h4>{p.name}</h4>
                  <Button kind="negative" label="Remove" onClick={() => {
                     const newCart = appState.cart.reduce((newC, product) => {
                        if (!product.name === p) {
                           newC.push(p);
                        }
                        return newC;
                     }, [])
                     setAppState({...appState, cart: newCart})
                  }}/>
                </Row.Item>
                <Row.Item shrink>${p.price}</Row.Item>
              </Row>
            </div>
          ))}
        </div>
        <div className="margin--top">
          <Button
            label="Checkout"
            onClick={() => {
              alert("spendin ur money");
            }}
          />
        </div>
      </aside>
    </div>
  );
};

export default Cart;
