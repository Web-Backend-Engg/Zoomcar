const initialData = {
    cars : [],
    desc: {},
    car: {}

};

export const carsReducer = (state=initialData , action)=>{

     switch(action.type)
     {
         case 'GET_ALL_CARS' : {
             return{
                 ...state,
                 cars : action.payload
             }
         }

         case 'GET_CAR' : {
            return{
                ...state,
                car: action.payload
            }
         }

         case 'GET_PROMPT' : {
            return{
                ...state,
                desc : action.payload
            }
        }
         
         default:return state
     }

}

