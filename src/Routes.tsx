import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CarDetailPage from "./pages/CarDetailPage";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";
import SearchResultPage from "./pages/SearchResultPage";

export default function AppRoutes() {
   return <BrowserRouter >
      <Navbar />
      <main>
         <Routes>
            <Route index element={<SearchPage />} />
            <Route path="search-result" element={<SearchResultPage />} />
            <Route path="car-rent-detail/:id" element={<CarDetailPage />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </main>
      <Footer />
   </BrowserRouter >
}