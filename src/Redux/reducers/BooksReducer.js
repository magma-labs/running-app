
const initialState = {
  books: [
    {
      isbn: "21212121221",
      name: "Harry potter",
      img: "https://images-na.ssl-images-amazon.com/images/I/71sH3vxziLL.jpg",
      author: "Leyaim Jimenez",
      pages: 400,
    },
    {
      isbn: "090909090909",
      name: "It",
      img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/It_cover.jpg/220px-It_cover.jpg",
      author: "Juan Juan",
      pages: 400,
    },
    {
      isbn: '373832083020',
      name: "Nisemonogatari",
      img:
        "https://i.pinimg.com/736x/ad/0d/97/ad0d975d062652636685830915c171bd.jpg",
      author: "Nion Oasis",
      pages: 410,
    },
  ],
  dataBook: null,
  searchBook: null
}

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_BOOK': {
      return {
        ...state,
        books: [...state.books, action.payload],
      }
    }
    case 'GET_BOOK': {
      return {
        ...state,
        dataBook: action.payload,
      }
    }
    case 'SEARCH_BOOK': {
      return {
        ...state,
        searchBook: action.payload,
      }
    }
    default: {
      return state;
    }
  }
};

export default BooksReducer;