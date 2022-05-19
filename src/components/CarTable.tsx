const CarTable = () => {
    const sortButton = <button><img src="./images/icons/fi_sort.svg" alt="Sort" /></button>;
    const tableItem = `px-5 py-2`;
    const tableArrowNavBtn = `bg-white p-3 pt-1 border-2 border-primaryGrey rounded-sm text-2xl text-gray-500`;
    const tableNumberNavBtn = `bg-white py-3 px-4 border-2 border-primaryGrey rounded-sm text-gray-500`;
    const dataCount = [1,2,3,4,5,6,7,8,9,10];

    return <>
        <p className="mb-5 border-l-4 border-darkblue pl-2"><b>List Car</b></p>

        <div className="relative overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-primaryGrey">
                    <tr>
                        <th scope="col" className={`${tableItem} w-12`}>No</th>
                        <th scope="col" className={tableItem}>Name {sortButton}</th>
                        <th scope="col" className={tableItem}>Category {sortButton}</th>
                        <th scope="col" className={tableItem}>Price {sortButton}</th>
                        <th scope="col" className={tableItem}>Start Rent {sortButton}</th>
                        <th scope="col" className={tableItem}>Finish Rent {sortButton}</th>
                        <th scope="col" className={tableItem}>Created at {sortButton}</th>
                        <th scope="col" className={tableItem}>Updated at {sortButton}</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {dataCount.map(data => <tr className="border-b">
                        <td className={tableItem}>{data}</td>
                        <td className={tableItem}>Name</td>
                        <td className={tableItem}>Category</td>
                        <td className={tableItem}>Price</td>
                        <td className={tableItem}>Start Rent</td>
                        <td className={tableItem}>Finish Rent</td>
                        <td className={tableItem}>Created at</td>
                        <td className={tableItem}>Updated at</td>
                    </tr>)}
                </tbody>
            </table>
        </div>

        {/* <!-- TABLE PAGINATION --> */}
        <div className="flex  gap-5 my-5">
            <div>
                <span>Limit<br /></span>
                <select className="mt-2 p-2.5 border border-gray-300">
                    <option value="1">10</option>
                    <option value="2">20</option>
                    <option value="3">30</option>
                </select>
            </div>

            <div>
                <span>Jump To Page<br /></span>
                <div className="mt-2">
                    <select className="py-2.5 pl-2 pr-14 text-left border border-gray-300">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <button className="bg-darkblue text-white p-2.5" type="button">Go</button>
                </div>
            </div>

            <nav className="ml-auto mt-5">
                <button className={tableArrowNavBtn}><b>&laquo;</b></button>
                <button className={tableNumberNavBtn}>1</button>
                <button className={tableNumberNavBtn}>2</button>
                <button className={tableNumberNavBtn}>3</button>
                <button className={tableNumberNavBtn}>...</button>
                <button className={tableNumberNavBtn}>9</button>
                <button className={tableArrowNavBtn}><b>&raquo;</b></button>
            </nav>
        </div>
    </>
}

export default CarTable