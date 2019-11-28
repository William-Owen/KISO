const initialState = {

	count: 0,

}

const reducer = (state = initialState, action) => {

	switch (action.type) {

		case "INCREMENT_COUNT":

			// Increase the number in the count by 1.
			// The ++ (increment) and -- (decrement) operators have been known to contribute to bad code and it recommended to avoid their use.

			return {

				...state,

				count: state.count + 1,

			}

		case "DECREMENT_COUNT":

			// Reduce the number in the count by 1.
			// The ++ (increment) and -- (decrement) operators have been known to contribute to bad code and it recommended to avoid their use.

			return {

				...state,

				count: state.count - 1,

			}

		default:

			return state

	}

}

export default reducer
