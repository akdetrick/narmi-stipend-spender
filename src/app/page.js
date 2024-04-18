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
              imgUrl="https://ih1.redbubble.net/image.3076102465.2435/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
            />
          </div>
        </div>
      </main>
    </AppWrapper>
  );
}
