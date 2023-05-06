import Cards from "../../Cards";
import Heading from "./components/Heading";
import "./styles.scss";

const Board = () => {
  return (
    <section className="container-board">
      <Heading />
      <Cards />
    </section>
  );
};

export default Board;
