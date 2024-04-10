import { useContext } from 'react';
import { SelectionContext, SelectionContextDefaults } from '@/context/SelectionContext';


const useSelectionContext = () => {

    const { setSelectionState } = useContext(SelectionContext);
   
    const setActiveCollection = (activeCollectionId: string) => {
        setSelectionState((prevState) => ({
            ...prevState,
            activeCollectionId,
        }));
    }

    return { setActiveCollection }

};

export default useSelectionContext;