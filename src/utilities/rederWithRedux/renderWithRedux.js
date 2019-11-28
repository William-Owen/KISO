import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from '../../redux/rootReducer'
import {render} from '@testing-library/react'

export default function renderWithRedux(ui, {initialState, store = createStore(rootReducer, initialState)} = {}) {

    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    }

}