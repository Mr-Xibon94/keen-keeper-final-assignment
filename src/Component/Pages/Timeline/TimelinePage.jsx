import React, { useContext, useState } from 'react';
import { ContactHistoryContext } from '../../Context/ContactHistoryContext';
import { ChevronDown, Text, Timer } from 'lucide-react';
import History from './History';

const TimelinePage = () => {
    const { contact } = useContext(ContactHistoryContext);
    const [filterData, setFilterData] = useState("")

    let updatedContact = contact;

    const allHandler = (type) => {
        setFilterData(type);
        document.activeElement.blur();
    }



    if (filterData === "Call") {
        updatedContact = contact.filter(item => item.contactType === filterData)

    } else if (filterData === "Text") {
        updatedContact = contact.filter(item => item.contactType === filterData)

    } else if (filterData === "Video") {
        updatedContact = contact.filter(item => item.contactType === filterData)

    } else if (filterData === "All") {
        updatedContact = contact
    }

    console.log(contact, 'my context data')
    return (
        <div className='w-[80%] m-auto my-15'>

            <div className='w-[80%] m-auto'>
                <div className='py-10 pl-2.5 bg-gray-50 shadow mb-5 '>
                    <h1 className='text-3xl font-bold '>
                        Timeline
                    </h1>
                    <div>
                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1">{filterData || "All"}<ChevronDown /></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li onClick={() => allHandler('All')}><a>All</a></li>
                                <li onClick={() => allHandler('Call')}><a>Call</a></li>
                                <li onClick={() => allHandler('Text')}><a>Text</a></li>
                                <li onClick={() => allHandler('Video')}><a>Video</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='py-2.5 px-2.5'>
                    {
                        updatedContact.map((myContact) => (
                            <div>
                                <History key={myContact.id} myContact={myContact} filterData={filterData} setFilterData={setFilterData} updatedContact={updatedContact}></History>
                            </div>
                        ))
                    }
                </div>

                {contact.length == 0 && (
                    <div className='flex justify-center p-25  '>
                        <div className='text-center space-y-5'>
                            <div className='flex justify-center '> <Timer className='size-25' /></div>
                            <h1 className='text-2xl font-semibold'>No Timelines yet</h1>
                        <p className='text-gray-500'>Your timeline is empty. Start adding important timelines<br />to see them appear here.

                        </p>
                        </div>
                    </div>
                )}


            </div>

        </div>
    );
};

export default TimelinePage;