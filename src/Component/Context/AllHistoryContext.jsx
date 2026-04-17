import { useState } from 'react';
import { ContactHistoryContext } from './ContactHistoryContext';

const AllHistoryContext = ({ children }) => {

    const [contact, setContact] = useState([])
    const data = {
        contact, 
        setContact,
    }
    return (
        <ContactHistoryContext.Provider value={data}>
            {children}
        </ContactHistoryContext.Provider>
    );
};

export default AllHistoryContext;