/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================

import { createStore } from 'redux';
import counter from 'counter/counter';

const store = createStore(counter);

store.subscribe(() =>
    console.log(store.getState())
)

store.dispatch({ type: 'INCREMENT' })

