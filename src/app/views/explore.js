import { useAppContext } from "../context/context";
import ProductCard from "../components/ProductCard";

const ExploreView = () => {
  const [appState] = useAppContext();
  const { products } = appState;
  return (
    <div className="padding--all--xl">
      {products.map((p) => (
         <div style={{ width: "274px" }}>
         <ProductCard
            isFeatured={true}
            name={p.name}
            price={p.price}
            brand={p.brand}
            imgUrl={p.imgUrl}
         />
         </div>
      ))}
    </div>
  );
};

export default ExploreView;
