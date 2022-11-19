const { createStore } = require("redux");
const { counterReducer } = require("../reducers/counterReducer");

const store=createStore(counterReducer);
export default store;