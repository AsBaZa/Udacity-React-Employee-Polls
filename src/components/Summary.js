import { connect } from "react-redux";

const Summary = (props) => {
  const { id, password, name, avatarURL, answers, questions } = props.user;

  return (
    <tr>
      <td>
        {/* <img src={`${process.env.PUBLIC_URL}/avatars/${avatarURL}`} alt={`Avatar of ${name}`} width="40" height="40"/>
        <div><b style={{ fontWeight: "bold" }}>{name}</b>
        <br></br>
        {id}
        </div> */}
        <ul className="dates">
          <li>
            <span className="date"><img src={`${process.env.PUBLIC_URL}/avatars/${avatarURL}`} alt={`Avatar of ${name}`} width="40" height="40"/></span>
            <h3>{name}</h3>
            <p>{id}</p>
          </li>
        </ul>
      </td>
      <td>{Object.keys(answers).length}</td>
      <td>{questions.length}</td>
    </tr>
  );
};

export default connect()(Summary);
