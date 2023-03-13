export const getFilter = store => store.filter;

export const getFilteredContacts = store => {
    const {filter, contacts} = store;
    if(!filter) {
        return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({name, number}) => {
        return (name.toLowerCase().includes(normalizedFilter) || number.includes(filter))
    })

    return result;
}