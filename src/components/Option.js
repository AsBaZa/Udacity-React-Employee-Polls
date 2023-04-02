import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { handleAddQuestionAnswer } from "../actions/questions";
import { handleAddUserAnswer } from "../actions/users";
import { setNav } from "../actions/nav";
import { useNavigate } from "react-router-dom";

const Option = ({dispatch, id, option, text, timestamp}) => {
  const navigate = useNavigate();

  const handleSelectOption = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestionAnswer(id, option));
    dispatch(handleAddUserAnswer(id, option));

    dispatch(setNav("home"));
    navigate("/");
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
