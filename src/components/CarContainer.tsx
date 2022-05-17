import { useEffect } from 'react'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { fetchCars } from '../redux/car/carAction'
import Loading from './Loading'

export default function CarContainer() {
    const Cars = useSelector((state: RootStateOrAny) => state.car)
    const dispatch = useDispatch()

    useEffect(() => { dispatch(fetchCars()) }, [])

    return <div>
        <h2 className='font-bold text-3xl'>Cars List</h2>
        <div>
            {Cars.loading ? <Loading /> : Cars.error ? <h2>{Cars.error}</h2> :
                Cars.cars.map((car: any) => <p key={car.id}>{car.name}</p>)}
        </div>
        <button className='p-3 bg-lime-500 hover:bg-lime-400 text-white rounded-lg' onClick={() => dispatch(fetchCars())}>Refresh</button>
    </div>
}