const state = {
    indexOfDataToEdit: null,
    data: [
        {
            title: 'Building App in React & Flux',
            length: '5:08',
            category: 'Javascript',
            author: 'corey-house'
        },
        {
            title: 'Clean Code: Writing Code for Humans',
            length: '3:18',
            category: 'software Arch',
            author: 'corey-house'
        },
        {
            title: 'Architecting Applications for the Real World',
            length: '2:52',
            category: 'arch',
            author: 'corey-house'
        },
        {
            title: 'Becoming an Outlier: Reprogramming the Developer Mind',
            length: '2:13',
            category: 'Javascript',
            author: 'corey-house'
        }
    ]
}

const firstReducer = (iState=state, action) => {
    if(action.type === 'UPDATE_INDEX'){
        return ({
            ...iState,
            indexOfDataToEdit: action.payload
        })
    }
    if(action.type === 'UPDATE_DATA'){
        return ({
            ...iState,
            data: action.payload
        })
    }
    if(action.type === 'ADD_DATA'){
        let temp = iState.data;
        temp.push(action.payload);
        return ({
            ...iState,
            data: temp
        })
    }
    return iState;
}

export default firstReducer;