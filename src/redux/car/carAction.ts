import { BUY_CAR, DELETE_CAR, FETCH_CAR_DETAIL_SUCCESS } from "./carTypes"
import { Dispatch } from 'redux'
import { FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS, FETCH_CARS_FAILURE } from './carTypes'

export const fetchCars = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchCarsRequest())
    const response = await fetch('https://rent-cars-api.herokuapp.com/admin/car')
    const data: [] = await response.json();
    // response.data is the Cars
    dispatch(fetchCarsSuccess(data));
  } catch (error) {
    // error.message is the error message
    // ✅ TypeScript knows error is Error
    if (error instanceof Error) dispatch(fetchCarsFailure(error.message))
  }
}

export const fetchCarDetail = (id: string = `2`) => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchCarsRequest())
    const response = await fetch(`https://rent-cars-api.herokuapp.com/admin/car/${id}`)
    const data = await response.json();
    dispatch(fetchCarDetailSuccess(data));
  } catch (error) {
    if (error instanceof Error) dispatch(fetchCarsFailure(error.message))
  }
}

export const fetchCarsRequest = () => {
  return {
    type: FETCH_CARS_REQUEST
  }
}

export const fetchCarDetailSuccess = (car: {}) => {
  return {
    type: FETCH_CAR_DETAIL_SUCCESS,
    payload: car
  }
}
export const fetchCarsSuccess = (cars: []) => {
  return {
    type: FETCH_CARS_SUCCESS,
    payload: cars
  }
}

export const fetchCarsFailure = (error: string) => {
  return {
    type: FETCH_CARS_FAILURE,
    payload: error
  }
}