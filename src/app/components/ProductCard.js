"use client";

import { Row, Tag } from "@narmi/design_system";

const ProductCard = ({ isFeatured = false, image, price, brand, name }) => {
  return (
    <article className="productCard">
      {isFeatured && (
         <div className="productCard-spangle">
            <Tag label="Featured!" />
         </div>
      )}
      <div
        className="bgColor--white rounded--all--m alignChild--center--center"
        style={{ outline: "1px dotted hotpink", height: "335px" }}
      >
        <span>img lol</span>
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
