import { COUT } from '../constants/type'

const INITIAL_STATE = {
   status: 'cout',
   num: 0
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUT:
      return {
        ...state,
        num: state.num + 1
      }
    default:
      return state
  }
}