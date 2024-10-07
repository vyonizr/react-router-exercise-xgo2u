import Highlight from "../components/Highlight";
import NavigationButton from "../components/NavigationButton";

const Highlights = [
  {
    title: "Who are we?",
    description:
      "We are Jakarta-based coffee and tea house focused on professionally brewing local sourced, high quality, coffee beans and tea leaves.",
  },
  {
    title: "Product Showcase",
    description:
      "Our products contain the highest quality ingredients processed with care.",
    actionButton: (
      <NavigationButton
        title={"See our coffe and tea"}
        destination={"product"}
      />
    ),
  },
  {
    title: "Hang out with us!",
    description:
      "Our stores use sustainable  furnitures, surrounded by nature, to help our planet survive.",
    actionButton: (
      <NavigationButton title={"Find out cafes"} destination={"store"} />
    ),
  },
];

const Home = () => {
  return (
    <div>
      {Highlights.map((highlight, index) => (
        <div key={index}>
          <Highlight highlight={highlight} />
        </div>
      ))}
    </div>
  );
};

export default Home;
