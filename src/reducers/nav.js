import { SET_NAV } from "../actions/nav";

export default function nav(state = null, action) {
  switch (action.type) {
    case SET_NAV:
      return action.page;
    default:
      return state;
  }
}
