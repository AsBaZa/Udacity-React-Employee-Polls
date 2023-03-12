import { connect } from "react-redux";
import Option from "./Option";

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
        <Option text={optionOne.text} timestamp={timestamp} />
        <Option text={optionTwo.text} timestamp={timestamp} />
      </div>
    </section>
  );
};

export default connect()(Poll);
