import { React } from 'react';
import { useSelector } from 'react-redux';

export const Createtable = (WrappedComponent, type) => {
    const data = useSelector(state => state[type][type]);
    const fields = useSelector(state => state[type].fields);
    return(
        <WrappedComponent data={data} fields={fields}/>
    )
}
