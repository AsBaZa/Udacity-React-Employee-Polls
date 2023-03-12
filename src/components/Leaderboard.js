import { connect } from "react-redux";
import Summary from "./Summary";

const Leaderboard = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
          {props.users.map((user) => (
            <Summary user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users).map((k, v) => {
      return users[k];
    }),
  };
};

export default connect(mapStateToProps)(Leaderboard);
