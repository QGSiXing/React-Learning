import {COUT} from '@/constants/type'
export const changeNum = (num) => {
    return async dispatch => {
      dispatch({type:COUT,num})
    }
}