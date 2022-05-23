import InvoiceStepBar from "../components/InvoiceStepBar";
import PdfHandler from "../components/PdfHandler";

export default function InvoicePage() {
    return <>
    <InvoiceStepBar/>
        
        <div className="text-center w-fit my-12 mx-auto">
            <img className="mx-auto" src="/images/icons/green_success.svg" alt="Success" />
            <h1 className="font-bold text-xl my-5">Pembayaran Berhasil!</h1>
            <p className="text-gray-500">Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </div>

    <PdfHandler/>

    </>
}