"use client";

import { Row, IconButton } from "@narmi/design_system";
import { useAppContext } from "../context/context";

const Header = () => {
  const [appState, setAppState] = useAppContext();

  const cartNumber = appState.cart.length;

  return (
    <header className="padding--x--xl padding--y bgColor--white">
      <div className="bounds">
      <Row>
        <Row.Item>Narmi WFH Stipend</Row.Item>
        <Row.Item shrink>
          <div className="cart-status">
            <IconButton
              kind="plain"
              textSize="l"
              name="shopping-bag"
              label="Shopping bag"
              onClick={() => {
                setAppState({...appState, isCartOpen: true })
              }}
            />
            {cartNumber > 0 && <span className="num">{cartNumber}</span>}
          </div>
        </Row.Item>
      </Row>
      </div>
    </header>
  );
};

export default Header;
