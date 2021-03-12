const axios = require('axios');

export const getBookData = (book) => ({
  type: 'GET_BOOK',
  payload: book,
});

export const getBook = (value) => {
  return async (dispatch, getstate) => {
    dispatch(getBookData(null))
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=1`)
      const {authors, description, title, pageCount, imageLinks} = response.data.items[0].volumeInfo

      const book = {
        isbn: value,
        name: title,
        pages: pageCount,
        author: authors[0],
        img: imageLinks.smallThumbnail,
        description: description,
      }

      dispatch(getBookData(book))
   
    } catch (error) {
      console.log(error)
    }
  }
}


export const saveBook = (data) => {
  return {
    type: 'SAVE_BOOK',
    payload: data,
  };
};

export const showSearchBook = (data) => {
  return {
    type: 'SEARCH_BOOK',
    payload: data,
  };
};


export const searchBookAction = (value) => {
  return async (dispatch, getState) => {
    const { books } = getState().BooksReducer

    var condition = new RegExp(value);

    if (value.length <= 0) {
      dispatch(showSearchBook(null))
    } else {
      var result = books.filter(function (el) {
        return condition.test(el.name);
      });
      dispatch(showSearchBook(result)) 
    }
   
  }
}