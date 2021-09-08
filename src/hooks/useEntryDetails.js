import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions';
import { v4 as uuidv4 } from 'uuid'
import { closeEditModal } from '../actions/modals.actions';

function useEntryDetails(desc = "", val = "", isExp = true) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0);
    const [isExpense, setIsExpense] = useState(true);

    const dispatch = useDispatch()

    useEffect(() => {
        setDescription(desc);
        setValue(val);
        setIsExpense(isExp);
    }, [desc, val, isExp])

    function addEntry(params) {
        dispatch(addEntryRedux({
            id: uuidv4(),
            description,
            value,
            isExpense,
        }))

        setDescription('');
        setValue('');
        setIsExpense(true)
    }

    function updateEntry(id){
        dispatch(
            updateEntryRedux(
                id,
                {
                    id,
                    description,
                    value,
                    isExpense
                }
            )
        );
        dispatch(closeEditModal());
    }

    return {
        description, setDescription, value, setValue, isExpense, setIsExpense, addEntry, updateEntry
    }
}

export default useEntryDetails
