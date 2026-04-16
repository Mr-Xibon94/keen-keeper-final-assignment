import React from 'react';

const FriendList = ({ friend }) => {
    return (
        <div>
            <div>
                
                <div className=' border border-gray-200 shadow p-10 text-center rounded-lg space-y-2'>
                        <div className='flex justify-center'>
                        <img className='w-20 h-20 rounded-full' src={friend.picture} alt="" />
                    </div>
                    <h1 className='font-medium text-xl'>{friend.name}</h1>
                    <p className='text-gray-500'>{friend.days_since_contact}d ago</p>
                    <div className='flex gap-3 justify-center lg:justify-around'>
                        {
                            friend.tags.map((tag)=>(
                            <p className='border px-1.5 rounded-full bg-green-200'>{tag}</p>
                        ))
                        }
                    </div>
                    <p className={friend.status==='Overdue'?'bg-red-400 inline-block px-2 py-1 rounded-full text-[14px] text-white': friend.status==='Almost due'?'bg-amber-400 inline-block px-2 py-1 rounded-full text-[14px] text-white':'bg-[#244D3F] inline-block px-2 py-1 rounded-full text-[14px] text-white'}>{friend.status}</p>

                </div>
            </div>
        </div>
    );
};

export default FriendList;