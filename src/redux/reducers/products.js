const INITIAL_STATE = [
  {
    id:1,
    title: "The Organic Cotton Clothes",
    cotegory: "dress",
    price: 1234,
    size: 46
  },
  {
    id:2,
    title: "The Organic Cotton Clothes",
    cotegory: "dress",
    price: 1234,
    size: 46
  },
  {
    id:3,
    title: "Silk Clothes",
    cotegory: "dress",
    price: 1234,
    size: 46
  },
  {
    id:4,
    title: "Jeans",
    cotegory: "dress",
    price: 834,
    size: 40
  },
  {
    id:5,
    title: "The skirt",
    cotegory: "dress",
    price: 1004,
    size: 36
  },
  {
    id:6,
    title: "The skirt",
    cotegory: "dress",
    price: 1004,
    size: 36
  },
  {
    id:7,
    title: "The skirt",
    cotegory: "dress",
    price: 1004,
    size: 36
  },
  {
    id:8,
    title: "The skirt",
    cotegory: "dress",
    price: 1004,
    size: 36
  },
  {
    id:9,
    title: "The skirt",
    cotegory: "dress",
    price: 1004,
    size: 36
  },
  {
    id:10,
    title: "The skirt",
    cotegory: "dress",
    price: 1004,
    size: 36
  },
  {
    id:11,
    title: "The skirt",
    cotegory: "dress",
    price: 1004,
    size: 36
  },
  {
    id:12,
    title: "The skirt",
    cotegory: "dress",
    price: 1004,
    size: 36
  }
  
];

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case action.type:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default products