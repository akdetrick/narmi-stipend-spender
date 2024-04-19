import { useAppContext } from "../context/context";
import { Tabs } from "@narmi/design_system";
import ProductCard from "../components/ProductCard";
import categories from "../context/categories";

import Print from "../components/Print";

const ExploreView = () => {
  const [appState] = useAppContext();
  const { products } = appState;
  const categoryEntries = Object.entries(categories);

  return (
    <div>
      <Tabs>
        <Tabs.List>
          {categoryEntries.map(([id, name]) => (
            <Tabs.Tab label={name} tabId={id} />
          ))}
        </Tabs.List>
        {categoryEntries.map(([id, name]) => (
          <Tabs.Panel tabId={id}>
            <div className="products-container margin--top--l">
              {products
                .filter((p) => p.category.toLowerCase() === id.toLowerCase())
                .map((p) => (
                  <ProductCard
                    name={p.name}
                    price={p.price}
                    brand={p.brand}
                    imgFile={p.imgFile}
                  />
                ))}
            </div>
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  );
};

export default ExploreView;
