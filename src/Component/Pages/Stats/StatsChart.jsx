import { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { ContactHistoryContext } from '../../Context/ContactHistoryContext';

const StatsChart = () => {

    const { contact } = useContext(ContactHistoryContext);

    const callContact = contact.filter(item => item.contactType === 'Call');
    const textContact = contact.filter(item => item.contactType === 'Text');
    const videContact = contact.filter(item => item.contactType === 'Video');


    const data = [
        { name: 'Call', value: callContact.length, fill: '#244D3F' },
        { name: 'Text', value: textContact.length, fill: '#912cee' },
        { name: 'Video', value: videContact.length, fill: '#52a447' },
        //   { name: 'Group D', value: 200, fill: '#FF8042' },
    ];
    return (
        <div className='w-[80%] m-auto mb-10'>
            <div>
                <h1 className='text-6xl font-bold p-6 my-10'>Friendship Analystics</h1>
            </div>
            {contact.length !== 0 && (
                 <div className='shadow bg-gray-50 p-5 rounded'>
                <h1 className='text-2xl font-semibold'>By Interaction Type</h1>
                <div className='flex justify-center my-10'>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />

                    <Legend />
                    <Tooltip />
                </PieChart>
            </div>
            </div>
            )}
        </div>
    );
};

export default StatsChart;