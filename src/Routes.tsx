import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddNewCar from "./pages/AddNewCar";
import CarDetailPage from "./pages/CarDetailPage";
import CarList from "./pages/CarList";
import AdminDashboard from "./pages/AdminDashboard";
import HomePage from "./pages/HomePage";
import InvoicePage from "./pages/InvoicePage";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";
import SearchResultPage from "./pages/SearchResultPage";

export default function AppRoutes() {
   return <BrowserRouter >
      <Navbar />
      <main>
         <Routes>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="search-result" element={<SearchResultPage />} />
            <Route path="car-rent-detail">
               <Route path=":id" element={<CarDetailPage />} />
               <Route path=":id/invoice" element={<InvoicePage />} />
            </Route>
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="admin-cars">
               <Route index element={<CarList />} />
               <Route path=":isAddCarSuccess" element={<CarList />} />
            </Route>
            <Route path="admin-cars/addCar" element={<AddNewCar />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </main>
      <Footer />
   </BrowserRouter >
}