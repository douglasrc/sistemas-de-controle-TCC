import "./styles.scss";

const WidgetSm = () => {
  const hanbleFormatPrice = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const hanbleFormatData = (value) => {
    return new Intl.DateTimeFormat("pt-BR").format(new Date(value));
  };

  return (
    <section className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <section className="icon-paid">
            <span className="material-symbols-outlined">paid</span>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
          </section>
          <section className="informations">
            <span className="price">{hanbleFormatPrice(160)}</span>
            <span className="data">{hanbleFormatData("2023-05-09")}</span>
          </section>
        </li>
      </ul>
    </section>
  );
};

export default WidgetSm;
