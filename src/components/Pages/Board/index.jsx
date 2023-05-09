import Cards from "../../Cards";
import WidgetSm from "../../widget";
import Heading from "./components/Heading";
import "./styles.scss";

const Board = () => {
  return (
    <section className="container-board">
      <Heading />
      <Cards />
      <WidgetSm />
    </section>
  );
};

export default Board;
