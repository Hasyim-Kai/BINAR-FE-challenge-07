import CarDetailPage from "../../pages/CarDetailPage"
import { FETCH_CARS_FAILURE, FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS, FETCH_CAR_DETAIL_SUCCESS } from "./carTypes"

const initialState: CarState = {
    loading: false,
    cars: [],
    carDetail: {
        capacity: `4 Orang`,
        transmission: `Manual`,
        manufacturDate: `Tahun 2020`
    },
    error: ''
}

const carReducer = (state: CarState = initialState, action: CarActionTypes) => {
    switch (action.type) {
        case FETCH_CARS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CAR_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                carDetail: { ...state.carDetail, ...action.payload },
                error: ''
            }
        case FETCH_CARS_SUCCESS:
            return {
                ...state,
                loading: false,
                cars: action.payload,
                error: ''
            }
        case FETCH_CARS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default: return state
    }
}

export default carReducer
