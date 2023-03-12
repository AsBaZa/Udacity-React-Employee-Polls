import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

const Poll = (props) => {
  const { id, author, timestamp, optionOne, optionTwo } = props.question;

  return (
    <section>
      <header className="major">
        <h2>Poll by {author}</h2>
      </header>

      <section id="intro" className="container">
        <div className="row">
          <div className="col-4 col-12-medium"></div>
          <div className="col-4 col-12-medium">
            <section className="middle">
              <img src={`${process.env.PUBLIC_URL}/avatars/${props.user.avatarURL}`} alt={`Avatar of ${props.user.name}`} width="100%" height="100%"/>
            </section>
          </div>
          <div className="col-4 col-12-medium"></div>
        </div>
      </section>

      <header className="major">
        <h2>Would you rather</h2>
      </header>
      <div className="row">
        <div className="col-6 col-12-small">
          <section className="box">
            <header>
              <h3>{optionOne.text}</h3>
              <p>{formatDate(timestamp)}</p>
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
        <div className="col-6 col-12-small">
          <section className="box">
            <header>
              <h3>{optionTwo.text}</h3>
              <p>{formatDate(timestamp)}</p>
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
      </div>
    </section>
  );
};

export default connect()(Poll);
