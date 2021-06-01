const initialState = {
    pageNumber: 0,
    contentLength: 0,
    contentItems: [],
    filteredItems: [],
    fetchingData: true,
    searchInput: '',
    title: ''
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEW-DATA":
            
            return {
                ...state, 
                fetchingData: action.contentItems.length === 20 ? true : false, 
                pageNumber: state.pageNumber + 1, 
                title: action.title,
                initialScroll: false,
                contentItems: [ ...state.contentItems, ...action.contentItems],
                filteredItems: [ ...state.contentItems, ...action.contentItems]
            }
        
        case "SEARCH":
            let searchData = JSON.parse(JSON.stringify(state.contentItems));
            const regexp = new RegExp(action.searchValue, 'i');
            let filteredData = searchData.filter(({name}) => regexp.test(name));
            
            return {
                ...state, 
                searchInput: action.searchValue,
                filteredItems: filteredData
            }

        default: 
            return state;
    }
}