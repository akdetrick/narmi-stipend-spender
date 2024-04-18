import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import { AppWrapper } from "./context/AppContext";

export default function Home() {
  return (
    <AppWrapper>
      <Header />
      <Banner />
      <main style={{ padding: "2rem"}}>
        <div className="padding--all--xl">
          <div style={{width: "274px"}}>
            <ProductCard 
              isFeatured={true}
              name="Ergonomic Chair"
              price={299}
              brand="Branch"
            />
          </div>
        </div>
      </main>
    </AppWrapper>
  );
}
