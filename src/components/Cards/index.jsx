import "./styles.scss";
import Card from "./components/Card";

const Cards = () => {
  return (
    <section className="container-cards">
      <div className="column-cards">
        <h1>Transações Recentes</h1>

        <div className="cards">
          <Card />
        </div>
      </div>
    </section>
  );
};
export default Cards;
