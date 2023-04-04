import { connect } from "react-redux";

const Summary = (props) => {
  const { id, name, avatarURL, answers, questions } = props.user;

  return (
    <tr>
      <td>
        <ul className="dates">
          <li>
            <span className="date">
              <img
                src={`${process.env.PUBLIC_URL}/avatars/${avatarURL}`}
                alt={`Avatar of ${name}`}
                width="40"
                height="40"
              />
            </span>
            <h3>{name}</h3>
            <p data-testid="username">{id}</p>
          </li>
        </ul>
      </td>
      <td data-testid="answers">{Object.keys(answers).length}</td>
      <td data-testid="questions">{questions.length}</td>
    </tr>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: users,
  };
};

export default connect(mapStateToProps)(Summary);
