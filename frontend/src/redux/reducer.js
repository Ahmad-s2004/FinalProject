// // reducers

// const cart = []

// const cartReducer = (state = cart, action) => {
//     // console.log("________", action.data);
//     // let product = action.data;
//     switch (action.type) {
//         case "ADD_TO_CART":
//             // checking if product already exists
//             let existingPro = state.find(x => x.id === action.data.id);
//             // if product exists in cart then increase quantity by 1
//             if (existingPro) {
//                 let product = action.data;
//                 return state.map(x => x.id === product.id ? { ...x, qty: product.qty + 1 } : x)
//             } else {
//                 let product = action.data
//                 return [
//                     // if product does not exist, set quantity to 1

//                     ...state, {
//                         ...product,
//                         qty: 1
//                     }
//                 ]
//             }


//         case "DEL_CART":
//             let product = action.data;
//             // if product alrady exists in cart then we need to filter our that product
//             let exist2 = state.find(x => x.id === product.id)
//             // if a product exists in cart, we need to filter it out, this will delete the product from the cart entirely, and the same will also be deleted from the cart / ui 
//             if (exist2.qty === 1) {
//                 return state.filter(x => x.qty !== exist2.qty)
//             } else
//             // if a product has quantity greater than one, then we need to decrease the quantity by one
//             {
//                 state.map(x => x.id === product.id ? { ...x, qty: product.qty - 1 } : x)
//             }


//         default:
//             return state
//     }
// }

// export default cartReducer