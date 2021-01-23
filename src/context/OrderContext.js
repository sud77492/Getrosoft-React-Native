import createDataContext from "./createDataContext";
import jsonServer from "../api/services";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    case "get_orders":
      return action.payload;
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "cancel_order":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_order":
      return [
        ...state,
        {
          productId: action.payload.productId,
          productName: action.payload.productName,
        },
      ];
    default:
      return state;
  }
};

/*const addBlogPost = (dispatch) => {
  return async (name, product, category, expiry, photo, callback) => {
    await jsonServer.post("/expires", {
      name,
      product,
      category,
      expiry,
      photo,
    });
    /*dispatch({ type: "add_blogpost", payload: { title, content } });*/
//   if (callback) {
//     callback();
//   }
// };
/*return async (title, content, callback) => {
    try {
      await axios.post("alskdjf", title, content);
      dispatch({ type: "add_blogpost", payload: { title, content } });
      callback();
    }catch(e){
        
    }
  };*/
//};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/products");
    console.log(response.data);
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const getOrders = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/orders");
    console.log(response.data);
    dispatch({ type: "get_orders", payload: response.data });
  };
};

const cancelOrder = (dispatch) => {
  return async (id) => {
    console.log(id);
    await jsonServer.delete(`/cancel_order/${id}`);
    dispatch({ type: "cancel_order", payload: id });
    navigate("Order");
  };
};

const addOrder = (dispatch) => async (productId, productName) => {
  console.log("kaise ho " + productId);
  console.log("kaise ho " + productName);
  // make a request to our api
  await jsonServer.post("/addOrder", {
    productId,
    productName,
  });
};

const editBlogPost = (dispatch) => {
  return async (
    id,
    name,
    product,
    category,
    expiry,
    notifications,
    callback
  ) => {
    await jsonServer.put(`/update_expire/${id}`, {
      name,
      product,
      category,
      expiry,
      notifications,
    });
    // console.log(name);
    // console.log(product);
    // console.log(expiry);
    // console.log(photo);

    dispatch({
      type: "edit_blogpost",
      payload: { id, name, product, category, expiry, notifications },
    });
    if (callback) {
      console.log("Edit Submitted");
      callback();
      navigate("Home");
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addOrder,
    cancelOrder,
    editBlogPost,
    getBlogPosts,
    getOrders,
  },
  []
);
