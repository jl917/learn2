// constant 
const ADD_AGE:string = "ADD_AGE";
// action
export const add = () => ({
  type:ADD_AGE
})
// reducer
export const ageReducer = (state=4,action:any):number => {
  if(action.type === ADD_AGE){
    return state + 1
  }
  return state
}