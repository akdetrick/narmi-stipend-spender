"use client";

import { Row, IconButton } from "@narmi/design_system";
import { useAppContext } from "../context/context";

const Header = () => {
  const [appState] = useAppContext();

  const cartNumber = appState.cart.length;

  return (
    <header className="padding--x--xl padding--y bgColor--white">
      <Row>
        <Row.Item>Narmi</Row.Item>
        <Row.Item shrink>
          <div className="cart-status">
            <IconButton
              kind="plain"
              textSize="l"
              name="shopping-bag"
              label="Shopping bag"
            />
            {cartNumber > 0 && <span className="num">{cartNumber}</span>}
          </div>
        </Row.Item>
      </Row>
    </header>
  );
};

export default Header;
