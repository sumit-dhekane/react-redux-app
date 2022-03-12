function Counter(state={counter:0},action){

switch(action.type){  
   case  'INCREAMENT_COUNTER':
         
         return {
             ...state,
             counter:state.counter+1
         }
   case  'DECREAMENT_COUNTER':    
        
   return {
    ...state,
    counter:state.counter-1
   }
   case  'INCREAMENT_BY_TWICE':

   return{
       ...state,counter:state.counter+2
   }
    case 'INCREAMENT_BY_NUMBER':
         return{
         ...state,counter:state.counter+parseInt(action.value)

         }
   default: return state;      
  }


}
export default Counter;