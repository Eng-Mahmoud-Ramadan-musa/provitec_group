import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import ViewCompany from "./components/layout/ViewCompany";
import Team from "./components/layout/Team";
import Rating from "./components/layout/Rating";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-button">
      <Header />
      <main className="flex flex-col gap-8 py-16 px-8 items-center sm:items-start w-full flex-1 overflow-hidden bg-background2">
        <Hero />
        <ViewCompany />
        <Team />
        <Rating />
      </main>
      <Footer />
    </div>
  );
}
