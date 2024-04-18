"use client"
import { useAppContext } from "./context/context";
import Header from "./components/Header";
import Banner from "./components/Banner";

import VIEWS from "./context/views";
import ExploreView from "./views/explore";
import ProductView from "./views/product";

// I'm doing some whack custom routing here because I don't
// want to learn Nextjs client-only routing

export default function Home() {
  const [appState, setAppState] = useAppContext();
  const { view, currentProduct } = appState;

  return (
    <>
      <Header />
      <Banner />
      <main className="padding--x--xl padding--y--l">
        {view === VIEWS.EXPLORE && <ExploreView />}
        {currentProduct !== null && view === VIEWS.PRODUCT && <ProductView />}
      </main>
    </>
  );
}
