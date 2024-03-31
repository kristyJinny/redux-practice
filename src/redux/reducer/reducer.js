let initialState = {
  count: 0,

}


function reducer(state=initialState, action) {
  // console.log("action은 무엇?", action);

  if(action.type === "INCREMENT") {
   return {...state, count: state.count + 1};
      // 그 상태값을 유지(...),
  }
  if(action.type === "DESCREMENT") {
    return {...state, count: state.count - 1};
  }

  // switch(action.type){
  //   case "INCREMENT" : 
  //   return {...state, count: state.count + 1};
  //   default:
  //     return {...state}
  // }

  return {...state};
}

export default reducer;