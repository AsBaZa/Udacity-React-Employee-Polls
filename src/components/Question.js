import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

const Question = (props) => {
  const { id, author, timestamp, optionOne, optionTwo } = props.question;

  return (
    <div className="col-4 col-6-medium col-12-small">
      <section className="box">
        <a href="#" className="image featured">
          <img src="images/pic02.jpg" alt="" />
        </a>
        <header>
          <h3>{author}</h3>
        </header>
        <p>
          {formatDate(timestamp)}
        </p>
        <footer>
          <ul className="actions">
            <li>
              <a href="#" className="button alt">
                Show
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  );
  }
  
  // export default connect(mapStateToProps)(Dashboard);
  export default connect()(Question);