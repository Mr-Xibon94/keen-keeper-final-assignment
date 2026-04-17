import { MessagesSquare, PhoneOutgoing, TimerIcon, Video } from 'lucide-react';
import { useContext } from 'react';
import { ContactHistoryContext } from '../../Context/ContactHistoryContext';


const History = ({ myContact }) => {

    const { contact } = useContext(ContactHistoryContext)
    console.log('contact typeeeeeee', contact.length);

    const today = new Date().toLocaleDateString('en-us', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    return (
        <div >
            {contact.length !== 0 && (
                <div className='flex gap-5 p-6 shadow bg-white mb-2.5 rounded-xl'>
                    <div className='flex items-center'>
                        {myContact.contactType === 'Call' ? <PhoneOutgoing /> : myContact.contactType === 'Text' ? <MessagesSquare /> : <Video />}
                    </div>

                    <div>
                        <h1><span className='text-xl font-semibold'>{myContact.contactType}</span> with <span className='font-medium'>{myContact.name}</span> </h1>
                        <p>{today}</p>
                    </div>
                </div>
            )}

            

        </div>
    );
};

export default History;