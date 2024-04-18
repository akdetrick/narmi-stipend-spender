"use client";

import { useAppContext } from "../context/context";
import VIEWS from "../context/views";
import { Row, Tag } from "@narmi/design_system";

const ProductCard = ({ isFeatured = false, imgUrl, price, brand, name }) => {
  const [appState, setAppState] = useAppContext();
  return (
    <article
      tabIndex={0}
      role="button"
      className="productCard"
      onClick={() => {
        setAppState({ ...appState, view: VIEWS.PRODUCT, currentProduct: name });
      }}
    >
      {isFeatured && (
        <div className="productCard-spangle">
          <Tag label="Featured!" />
        </div>
      )}
      <div className="productCard-img bgColor--white rounded--all--m alignChild--center--center">
        <div
          className="productCard-img-el"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      </div>
      <div className="margin--top--l fontColor--primary fontWeight--semibold">
        <Row>
          <Row.Item>{name}</Row.Item>
          <Row.Item shrink>${price}</Row.Item>
        </Row>
      </div>
      <div className="margin--top--s fontSize--s">{brand}</div>
    </article>
  );
};

export default ProductCard;
