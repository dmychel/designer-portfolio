import Hero from "/src/components/Hero";
import Introduction from "/src/components/Introduction";
import Work from "/src//components/Work";

export default function Index() {
  return (
    <div className="index">
      <Hero />
      <Introduction />
      <Work />
    </div>
  );
}
