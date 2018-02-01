const initialState = {
    likedItems:[]
 }
 
 const SNAKE_CASE = "SNAKE_CASE";
 

 
 function reducer( state = initialState, action ) { 
     switch( action.type ){
      //  case UPDATE_LOAN_TYPE:
      //    return Object.assign( {}, state, { loanType: action.payload } );
 
      //  case UPDATE_PROPERTY_TYPE:
      //    return Object.assign( {}, state, { propertyType: action.payload } );
 
      //  case UPDATE_CITY:
      //    return Object.assign( {}, state, { city: action.payload } );
        
      //  case `${SNAKE_CASE}_PENDING`:
      //    return Object.assign({}, state, { isLoading: true });
   
      //  case `${SNAKE_CASE}_FULFILLED`:
      //    return Object.assign({}, state, {
      //      isLoading: false,
      //      user: action.payload,
      //      isAuthenticated: true
      //    });
   
      //  case `${SNAKE_CASE}_REJECTED`:
      //    return Object.assign({}, state, {
      //      isLoading: false,
      //      didError: true
      //    });

      
       default: return state;
     }
 } 
 
//  export function register(google_id) {
//     return {
//       type: SNAKE_CASE,
//       payload: axios
//         .post("/api/register", { google_id })
//         .then(response => response.data[0])
//         .catch(console.log)
//     };
//   }

//  export function updateLoanType( loanType ){
//    return {
//      type: UPDATE_LOAN_TYPE,
//      payload: loanType
//    };
//  }
 
//  export function updatePropertyType( property ) {
//    return {
//      type: UPDATE_PROPERTY_TYPE,
//      payload: property
//    };
//  }
 
//  export function updateCity( city ) {
//    return {
//      type: UPDATE_CITY,
//      payload: city
//    };
//  }
 
 export default reducer; 