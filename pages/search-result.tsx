import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import NextHead from "../components/NextHead";
import SearchMenu from "../components/SearchMenu";
import { fetchCars } from "../redux/car/carAction";

export default function SearchResultPage() {
   const Cars = useSelector((state: any) => state.car)
   const dispatch = useDispatch()
   useEffect(() => { dispatch(fetchCars() as any) }, [])

   const flexDisplay = `flex flex-wrap justify-around lg:w-9/12 mx-auto`;

   const mainComponent = <>
      <NextHead title='Search Result' />
      <Navbar />

      <div className={`bg-backgroundGrey h-32`}></div>
      <SearchMenu />
      <div className={`${flexDisplay} mt-10`}>
         {Cars?.cars.map((car: any) => <CarCard id={car[`id`]} name={car[`name`]} category={car[`category`]} price={car[`price`]} image={car[`image`]} />)}
      </div>

      <Footer />
   </>

   return Cars.loading ? <Loading /> : Cars.error ? <h2>{Cars.error}</h2> : mainComponent;
}
