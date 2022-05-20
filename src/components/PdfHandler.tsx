import InvoiceStepBar from "../components/InvoiceStepBar";
import GreenButton from "./GreenButton";
// @ts-ignore
import { pdfjs, Document, Page } from 'react-pdf';
import { Link } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

export default function PdfHandler() {
    const downloadBtnStyle = `border border-darkblue px-3 py-1.5 rounded text-darkblue font-bold flex gap-3 items-center hover:shadow-lg transition-all duration-300`
    const pdfName = `invoice-template.pdf`;

    function onDocumentLoadSuccess() {
        console.log(`Success PDF`)
    }

    return <div className="border-2 rounded-xl p-7 my-12 max-w-3xl mx-auto">
        <div className="flex justify-between">
            <div>
                <h1 className="font-bold text-xl mb-4">Invoice</h1>
                <p className="text-gray-400">*no invoice</p>
            </div>
            <Link to={`/${pdfName}`} target="_blank" download>
                <button className={downloadBtnStyle}>
                    <img className="w-5" src="/images/icons/fi_download.svg" alt="download" />
                    Unduh
                </button>
            </Link>
        </div>

        {/* PDF */}
        <section className="border-2 rounded-lg mx-auto w-fit mt-8 shadow-lg overflow-hidden">
            <Document className='mx-auto' file={`/${pdfName}`} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={1} width={570} />
            </Document>
        </section>
    </div>
}