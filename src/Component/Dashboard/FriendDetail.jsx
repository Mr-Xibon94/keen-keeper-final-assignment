import { Archive, BellRing, MessagesSquare, PhoneOutgoing, Trash, Video } from 'lucide-react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { ContactHistoryContext } from '../Context/ContactHistoryContext';
import { toast } from 'react-toastify';

const FriendDetail = () => {
    const {contact, setContact} = useContext(ContactHistoryContext);

    const myCardData = useLoaderData();
    console.log('here it is', myCardData);
    const callHandler = ()=> {
        
        const newCard ={
            ...myCardData, 
            contactType:"Call"
        }
         setContact([...contact, newCard])
         toast.success(`Calling to ${myCardData.name} is successful`);
         return
    }

    const textHandler = () => {
         const newCard ={
            ...myCardData, 
            contactType:"Text"
        }
         setContact([...contact, newCard])
         toast.success(`Text to ${myCardData.name} is successful`);
         return

    }

    const videHandler = () => {
        const newCard ={
            ...myCardData, 
            contactType:"Video"
        }
         setContact([...contact, newCard])
         toast.success(`Video meeting with ${myCardData.name} is successful`);
         return
    }




    return (
        <div className='w-[80%] m-auto my-10'>
            <div className='w-[80%] m-auto flex flex-col md:flex-row gap-10'>
                {/* left section  */}
                <div className='space-y-3.5 flex-1'>
                    {/* its my card  */}
                    <div className=' border border-gray-200 shadow p-10 text-center rounded-lg space-y-2'>
                        <div className='flex justify-center'>
                            <img className='w-20 h-20 rounded-full' src={myCardData.picture} alt="" />
                        </div>
                        <h1 className='font-medium text-xl'>{myCardData.name}</h1>

                        <p className={myCardData.status === 'Overdue' ? 'bg-red-400 inline-block px-2 py-1 rounded-full text-[14px] text-white' : myCardData.status === 'Almost due' ? 'bg-amber-400 inline-block px-2 py-1 rounded-full text-[14px] text-white' : 'bg-[#244D3F] inline-block px-2 py-1 rounded-full text-[14px] text-white'}>{myCardData.status}</p>

                        <div className='flex gap-3 justify-center lg:justify-around'>
                            {
                                myCardData.tags.map((tag) => (
                                    <p className='border px-1.5 rounded-full bg-green-200'>{tag}</p>
                                ))
                            }
                        </div>

                        <h2 className='text-xl text-gray-400'>"{myCardData.bio}"</h2>

                        <p className='text-gray-500'>Preferred: <br /> {myCardData.email}</p>


                    </div>
                    {/* 3 notification bar below card  */}
                    <div className='flex flex-col space-y-5'>
                        <div className='border border-gray-200 shadow py-2 round-[7px] bg-white text-center font-semibold flex justify-center'><button className='flex gap-2.5' ><BellRing />Snoze 2 Weeks</button></div>
                        <div className='border border-gray-200 shadow py-2 round-[7px] bg-white text-center font-semibold flex justify-center'><button className='flex gap-2.5'><Archive />Archive</button></div>
                        <div className='border border-gray-200 shadow py-2 round-[7px] bg-white text-center font-semibold text-red-500 flex justify-center '><button className='flex gap-2.5' ><Trash />Delete</button></div>
                        
                    </div>
                </div>
                {/* right section  */}
                <div className='flex-3 '>
                    {/* 3 cards */}
                    <div>
                        <div className='flex flex-col md:flex-wrap lg:flex-row space-y-5 justify-between mt-10 gap-6 py-10'>
                            <div className='space-y-5 h-full flex-1 flex flex-col justify-center p-6 rounded-2xl text-center border border-gray-200 shadow'>
                                <h1 className='text-2xl font-semibold'>{myCardData.days_since_contact}</h1>
                                <p>Days Since Contact</p>
                            </div>
                            <div className='space-y-5 h-full flex-1 flex flex-col justify-center p-6 rounded-2xl text-center border border-gray-200 shadow'>
                                <h1 className='text-2xl font-semibold'>{myCardData.goal}</h1>
                                <p>Goal(days)</p>
                            </div>
                            <div className='space-y-5 h-full flex-1 flex flex-col justify-center p-6 rounded-2xl text-center border border-gray-200 shadow'>
                                <h1 className='text-2xl font-semibold'>{myCardData.next_due_date}</h1>
                                <p>Next Due</p>
                            </div>
                        </div>
                    </div>
                    {/* middle part of right side  */}
                    <div className='flex flex-col space-y-5 md:flex-row justify-between p-8 border border-gray-200 rounded-tr-xl'>
                        <div className='space-y-5'>
                            <h1>Relationship Goal</h1>
                            <p>Connect every <span className='font-bold'>30 days</span></p>
                        </div>
                        <div>
                            <button className='px-2 py-1.5 rounded-[6px] bg-gray-300'>Edit</button>
                        </div>
                    </div>

                    {/* call/text/video section  */}
                    <div className='mt-5'>
                        <h1 className='mb-2.5 font-medium'>Quick Check-In</h1>
                        <div className='flex flex-col md:flex-row justify-between gap-5'>
                            <div onClick={callHandler} className='flex-1 text-center bg-gray-100 rounded-xl  py-5'>
                                <span className='flex justify-center '><PhoneOutgoing /></span>
                                <h1>Call</h1>
                            </div>
                            <div onClick={textHandler} className='flex-1 text-center bg-gray-100 rounded-xl  py-5'>
                                <span className='flex justify-center '><MessagesSquare /></span>
                                <h1>Text</h1>
                            </div>
                            <div onClick={videHandler} className='flex-1 text-center bg-gray-100 rounded-xl  py-5'>
                                <span className='flex justify-center '><Video /></span>
                                <h1>Video</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetail;