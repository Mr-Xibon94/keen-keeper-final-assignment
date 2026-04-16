import React from 'react';
import { useLoaderData } from 'react-router';
import FriendList from './FriendList';

const Dashboard = () => {

    const friends = useLoaderData();
    console.log('here is my data', friends);

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
                    <div className='flex justify-between mt-10 border-b-1 border-gray-200 py-10'>
                        <div className='space-y-5 py-8 px-15 rounded-2xl text-center border border-gray-200 shadow'>
                            <h1 className='text-2xl font-semibold'>100</h1>
                            <p>Total Friends</p>
                        </div>
                        <div className='space-y-5 py-8 px-15 rounded-2xl text-center border border-gray-200 shadow'>
                            <h1 className='text-2xl font-semibold'>10</h1>
                            <p>Total Friends</p>
                        </div>
                        <div className='space-y-5 py-8 px-15 rounded-2xl text-center border border-gray-200 shadow'>
                            <h1 className='text-2xl font-semibold'>10</h1>
                            <p>Total Friends</p>
                        </div>
                        <div className='space-y-5 py-8 px-15 rounded-2xl text-center border border-gray-200 shadow'>
                            <h1 className='text-2xl font-semibold'>10</h1>
                            <p>Total Friends</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='m-5 text-2xl font-semibold'>Your Friends</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center '>

                            {
                                friends.map((friend) => (

                                    <FriendList key={friend.id} friend={friend}>

                                    </FriendList>


                                ))
                            }
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Dashboard;