const initialState = {

    count: 0

}

const reducer = (state = initialState, action) => {

	switch (action.type) {

		case "INCREMENT_COUNT":

            // Increase the number in the count by 1.

			return {

				...state,

				count: state.count + 1,

			}

		case "DECREMENT_COUNT":

            // Reduce the number in the count by 1.

			return {

				...state,

				count: state.count - 1,

			}

		default:

			return state

	}

}

export default reducer
