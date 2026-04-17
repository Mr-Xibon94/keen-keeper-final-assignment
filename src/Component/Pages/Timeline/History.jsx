import { MessagesSquare, PhoneOutgoing, Video } from 'lucide-react';


const History = ({myContact}) => {
    console.log('contact typeeeeeee', myContact);

    const today = new Date().toLocaleDateString('en-us', {
        month:'short',
        day: 'numeric',
        year: 'numeric'
    });
    return (
        <div className='flex gap-5 p-6 shadow bg-white mb-2.5 rounded-xl'>
            <div className='flex items-center'>
                {myContact.contactType === 'Call'? <PhoneOutgoing/>:myContact.contactType === 'Text'?<MessagesSquare/>:<Video/>}
            </div>

            <div>
                <h1><span className='text-xl font-semibold'>{myContact.contactType}</span> with <span className='font-medium'>{myContact.name}</span> </h1>
                <p>{today}</p>
            </div>
        </div>
    );
};

export default History;