import { connect } from "react-redux";
import Summary from "./Summary";

const Leaderboard = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <section>
          <header className="major">
            <h2>Leaderboard</h2>
          </header>

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
        </section>
      </div>
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
