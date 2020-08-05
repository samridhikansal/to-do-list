import listItem from "../components/listItem";

const initialState = [
  { listItem: "item1" },
  { listItem: "item2" },
  { listItem: "item3" },
];
const listReducer = (state = initialState, action) => {
  return state;
};

export default listReducer;
