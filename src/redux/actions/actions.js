export const searchAction = (value) => {
    return { "type": "SEARCH", "searchValue": value };
};

export const fetchListAction = (list, title) => {
    return {
        type: "NEW-DATA",
        contentItems: list,
        title: title
      };
};