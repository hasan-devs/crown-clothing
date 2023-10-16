import {createContext,useEffect,useState} from 'react';
import SHOP_DATA from '../shop-data.js';
import { addCollectionAndDocument, getCategoriesAndDocuments } from '../utils/firebase/firebase.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap : () => null
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap,setCategoriesMap] = useState({});

    // This is just for one time. Usually done from the backend.
    useEffect(()=>{
        (async ()=>{
            const categoriesMap = await getCategoriesAndDocuments();
            console.log(categoriesMap);
            setCategoriesMap(categoriesMap);
        })();
        
    },[]);

    const value = {categoriesMap,setCategoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
}