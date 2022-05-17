type CarState = {
   loading: boolean,
   cars: [],
   carDetail: {},
   error: string
}

interface CarActionTypes {
   type: string,
   payload: any
}