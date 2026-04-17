import React, { useEffect, useState } from 'react';

import FriendList from './FriendList';
import { DotLoader } from 'react-spinners';

const Dashboard = () => {

    const [myFriends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/FriendData.json');
            const data =await res.json();

            setTimeout(() => {
                setFriends(data);
                setLoading(false)
            },1000)
        };
        fetchData();
    }, [])

    console.log('here is my data', myFriends);

    return (
        <div className='w-full mt-15 mb-10'>
            <div className='w-[80%] m-auto'>
                <div className='w-11/12 m-auto'>
                    {/* it is my text part of dash board  */}
                    <div className='text-center space-y-5 '>
                        <h1 className='text-4xl font-bold'>Friends to keep close in your life</h1>
                        <p className='text-gray-400'>
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                            relationships that matter most.
                        </p>
                        <button className='border py-1.5 px-2 rounded-[5px] text-white bg-[#244D3F]'>+ Add a Friend</button>
                    </div>

                    {/* it is card section of my dashboard  */}
                    <div className='flex flex-col md:flex-wrap lg:flex-row space-y-5 justify-between mt-10 gap-6 border-b-1 border-gray-200 py-10'>
                        <div className='space-y-5 h-full flex-1 flex flex-col justify-center p-6 rounded-2xl text-center border border-gray-200 shadow'>
                            <h1 className='text-2xl font-semibold'>07</h1>
                            <p>Total Friends</p>
                        </div>
                        <div className='space-y-5 h-full flex-1 flex flex-col justify-center p-6 rounded-2xl text-center border border-gray-200 shadow'>
                            <h1 className='text-2xl font-semibold'>02</h1>
                            <p>On Track</p>
                        </div>
                        <div className='space-y-5 h-full flex-1 flex flex-col justify-center p-6 rounded-2xl text-center border border-gray-200 shadow'>
                            <h1 className='text-2xl font-semibold'>03</h1>
                            <p>Need Attention</p>
                        </div>
                        <div className='space-y-5 h-full flex-1 flex flex-col justify-center p-6 rounded-2xl text-center border border-gray-200 shadow'>
                            <h1 className='text-2xl font-semibold'>02</h1>
                            <p>Interactions This Month</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='m-5 text-2xl font-semibold'>Your Friends</h1>
                        {loading ? (
                            <div className=' flex justify-center'><DotLoader color="#244D3F" /></div>
                        ) :
                            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr] gap-6'>


                                {
                                    myFriends.map((friend) => (

                                        <div>
                                            <FriendList key={friend.id} friend={friend}>

                                            </FriendList>
                                        </div>


                                    ))
                                }

                            </div>
                        }
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Dashboard;