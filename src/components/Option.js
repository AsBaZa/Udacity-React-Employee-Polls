import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { handleAddQuestionAnswer } from "../actions/questions";
import { handleAddUserAnswer } from "../actions/users";

const Option = ({dispatch, id, option, text, timestamp}) => {

  const handleSelectOption = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestionAnswer(id, option));
    dispatch(handleAddUserAnswer(id, option));
  };

  return (
    <div className="col-6 col-12-small">
      <section className="box">
        <header>
          <h3>{text}</h3>
          <p>{formatDate(timestamp)}</p>
        </header>
        <footer>
          <ul className="actions">
            <li>
              <a href="#" className="button icon solid fa-file-alt" onClick={handleSelectOption}>
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
