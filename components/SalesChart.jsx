'use client'

// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Line, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
    { month: 'Jan', value: 6000 },
    { month: 'Feb', value: 16000 },
    { month: 'Mar', value: 4000 },
    { month: 'Apr', value: 38000 },
    { month: 'May', value: 8000 },
    { month: 'Jun', value: 45000 },
    { month: 'Jul', value: 9500 },
    { month: 'Aug', value: 23000 },
    { month: 'Sep', value: 32000 },
    { month: 'Oct', value: 7000 },
    { month: 'Nov', value: 30000 },
    { month: 'Dec', value: 26000 },
];
 
 

const SalesChart = () => {
    return (
        <div className="flex-shrink-0 border bg-white border-[#EDF2F7] rounded-[14px] p-5">
            <div className="flex items-center justify-between mb-5">
                <p className="PJS-semibold text-lg leading-6 font-semibold text-[#26282C]">Sales Trends</p>
                <div className="flex items-center">
                    <label htmlFor="filter" className='text-sm leading-5 text-[#3A3F51] font-medium mr-[10px]'>Short by : </label>
                    <div className="items-center flex w-24 border border-[#E1DFDF] bg-white rounded-[20px] py-[6px] px-3 ">
                        <select name="filter" id="filter" className='appearance-none dark:bg-white w-full row-start-1 col-start-1 outline-none text-[#3A3F51] font-normal text-[12px]'>
                            <option value="weekly">Weekly</option>
                        </select>
                        <svg className="pointer-events-none row-start-1 col-start-1" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z" fill="black" />
                        </svg>
                    </div>

                </div>
            </div>
            <div className="mt-3">
                {/* <BarChart
                    width={820}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="4 1 2" vertical={false}/>
                    <XAxis dataKey="month" />
                    <YAxis ticks={yTicks} />
                    <Tooltip /> 
                    <Bar dataKey="value" fill="" barSize={30} shape={<TriangleBar />}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                         
                    </Bar>
                </BarChart> */}
            </div>
        </div>
    );
}

export default SalesChart;

