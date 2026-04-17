import React, { useContext } from 'react';
import { ContactHistoryContext } from '../../Context/ContactHistoryContext';
import { Text } from 'lucide-react';
import History from './History';

const TimelinePage = () => {
    const { contact } = useContext(ContactHistoryContext);
    

    console.log(contact, 'my context data')
    return (
        <div className='w-[80%] m-auto my-15'>

            <div className='w-[80%] m-auto'>
                <div className='py-10 pl-2.5 bg-gray-50 shadow mb-5 '>
                    <h1 className='text-3xl font-bold '>
                        Timeline
                    </h1>
                </div>
                <div className='py-2.5 px-2.5'>
                    {
                        contact.map((myContact) => (
                            <div>
                                <History key={myContact.id} myContact = {myContact} ></History>
                            </div>
                        ))
                    }
                </div>


            </div>

        </div>
    );
};

export default TimelinePage;