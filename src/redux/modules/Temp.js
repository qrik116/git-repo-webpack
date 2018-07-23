import { Map } from 'immutable';
// import { createSelector } from 'reselect';
// import API from 'api/Temps';

const FETCH_REQUEST = 'Temp/FETCH_REQUEST';
const FETCH_SUCCESS = 'Temp/FETCH_SUCCESS';
const FETCH_FAIL = 'Temp/FETCH_FAIL';

const initialState = Map({
    data: Map(),
    status: Map()
});

function reducer(state = initialState, { type, payload, TempID }) {
    switch (type) {
        case FETCH_REQUEST:
            return state.setIn(['status', TempID], 'fetching');

        case FETCH_SUCCESS:
            return state.setIn(['data', TempID], Map(payload))
                        .setIn(['status', TempID], 'complete');

        case FETCH_FAIL:
            return state.setIn(['status', TempID], 'error');

        default:
            return state;
    }
}

/* Actions */
// function fetchTemp(TempID) {
//     return (dispatch) => {
//         dispatch({ type: FETCH_REQUEST, TempID });

//         return API.fetchItem(TempID)
//             .then(data => {
//                 dispatch({ type: FETCH_SUCCESS, payload: data, TempID });

//                 return data;
//             })
//             .catch(error => {
//                 dispatch({ type: FETCH_FAIL, error: true, payload: error, TempID })

//                 return error;
//             });
//     }
// }

/* Selectors */
// const getData = (store, props = {}) => props.TempID && store.Temp.getIn(['data', props.TempID]);

// export const getTempStatus = (store, props = {}) => props.TempID && store.Temp.getIn(['status', props.TempID]);

// export const getTemp = createSelector(
//     [ getData ],
//     (data) => data ? data.toObject() : {}
// )

// export const actionCreators = { fetchTemp }
export default reducer;
