

const Reducer = (state = initialEntries, action) => {
  let newEntries
  switch (action.type) {
    case 'ADD_ENTRY':
      newEntries = state.concat(action.payload)
      return newEntries;
    case 'REMOVE_ENTRY':
      newEntries = state.filter(entry => action.payload.id !== entry.id);
      return newEntries;
    default:
      return state;
  }
  // return state;
}

export default Reducer

var initialEntries = [
  {
    id: 1,
    description: "Work Income",
    value: 1000.00,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water Bill",
    value: 20.00,
    isExpense: true,
  }, {
    id: 3,
    description: "Rent",
    value: 300.00,
    isExpense: true,
  }, {
    id: 4,
    description: "Power Bill",
    value: 50.00,
    isExpense: true,
  },
]