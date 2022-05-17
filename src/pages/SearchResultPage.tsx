import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import CarCard from "../components/CarCard";
import SearchMenu from "../components/SearchMenu";
import { fetchCars } from "../redux/car/carAction";

export default function SearchResultPage() {
   const Cars = useSelector((state: RootStateOrAny) => state.car)
   const dispatch = useDispatch()
   useEffect(() => { dispatch(fetchCars()) }, [])

   const flexDisplay = `flex flex-wrap justify-around lg:w-9/12 mx-auto`;

   return <>
      <div className={`bg-backgroundGrey h-40`}></div>
      <SearchMenu />
      <div className={`${flexDisplay} mt-10`}>
         {Cars?.cars.map((car: any) => <CarCard id={car[`id`]} name={car[`name`]} category={car[`category`]} price={car[`price`]} image={car[`image`]} />)}
      </div>
   </>
}
