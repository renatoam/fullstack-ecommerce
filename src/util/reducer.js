export const exampleReducer = (state = '', action) => {
  if (action.type === 'EXAMPLE')
   return {
     ...state,
     esteite: action.payload
   }

   return state
}

export const incrReducer = (state = 0, action) => {
  if (action.type === 'ADD')
   return action.payload

   return state
}