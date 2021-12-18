import { createAction, handleActions } from 'redux-actions'
import {db_host,fetchError,getData,postData} from '../constant'

export const getScanInfo = createAction('GET_SCAN_INFO', (accessKey,user_idx) =>  postData(`${db_host}proxy/inquiry/`,{body:JSON.stringify({
    accessKey,user_idx
})}))
//export const delScanInfo = createAction('DEL_SCAN_INFO')
export const scanInfoReducer = handleActions({
        GET_SCAN_INFO_PENDING: (state, action) => state,
        GET_SCAN_INFO_FULFILLED: (state, action) => action.payload,
        GET_SCAN_INFO_REJECTED: fetchError,
        //DEL_SCAN_INFO: (state, action) => ({}),
    },
    {}
)


export const getProdInfo = createAction('GET_PROD_INFO', (accessKey) =>  postData(`${db_host}scan/getScanProductInfo`,{body:JSON.stringify({
    accessKey
})}))
export const prodInfoReducer = handleActions({
    GET_PROD_INFO_PENDING: (state, action) => ({
        loading:true,
        ...state
    }),
    GET_PROD_INFO_FULFILLED: (state, action) => ({
        loading:false,
        ...action.payload[0]
    }),
    GET_PROD_INFO_REJECTED: fetchError,
},
{}
)


export const changeLangauge = createAction('CHANGE_LANGAUGE')

export const changeLangaugeReducer = handleActions(
  {
    CHANGE_LANGAUGE: (state,action) =>  action.payload
  },
  'ko-KR'
);