import SaveMore from "./components/CustomBlocks/SaveMore";
import Table from "./components/Table";
import skull from "./assets/skull_icon.png";

let blocks: BlockType[] = [
  {
    customComponent: SaveMore,
    order: 3,
  },
  {
    title: "Day Pas",
    icon: skull,
    perks: ["8 hours usage of our coworking space", "Access to All our rooms"],
    cost: 20,
    order: 1,
  },
  {
    title: "Monthly Pass",
    icon: skull,
    perks: [
      "8 hours usage of our coworking space",
      "Access to All our rooms",
      "Dedicated Desk",
      "Free Business Address",
      "Free Lunch 1x a day",
    ],
    cost: 380,
    order: 2,
  },
];

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Table blocks={blocks} />
      <div className="text-center text-blue-500 py-3">
        <a href="https://github.com/pawix135/pricing-tables" target={"_blank"}>
          Github/pricing-tables
        </a>
      </div>
    </div>
  );
};

export default App;
