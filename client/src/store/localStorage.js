export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('token')
        // console.log('------- serializedState: ', serializedState);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.log('Catch en loadState: ', err);
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const token = JSON.stringify(state.userToken);
        localStorage.setItem('token', token);
        // console.log('grabo el token: ', token);
    } catch (err) {
        console.log('Catch en saveState: ', err);
    }
}