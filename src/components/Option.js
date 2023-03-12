import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

const Option = (props) => {

  return (
    <div className="col-6 col-12-small">
      <section className="box">
        <header>
          <h3>{props.text}</h3>
          <p>{formatDate(props.timestamp)}</p>
        </header>
        <footer>
          <ul className="actions">
            <li>
              <a href="#" className="button icon solid fa-file-alt">
                Select
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  );
};

export default connect()(Option);
