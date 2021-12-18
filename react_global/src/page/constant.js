import React from 'react'
import intl from "react-intl-universal";

import 'isomorphic-fetch'

export const db_host = function(){

    if(MODE == 'local'){
        return 'http://192.168.0.57:4000/app/'
    }

    //MODE == 'development'
    if(location.host == "scanus_dev.blockodyssey.io"){
        return 'https://api.scanus.co.kr:4001/app/'
    }
    //MODE == 'production'
    if(location.host == "scanus.blockodyssey.io"){
        return 'https://api.scanus.co.kr/app/'
    }
    //MODE == 'demo'
    if(location.host == "scanus_demo.blockodyssey.io"){
    
        return 'https://api.scanus.co.kr:5001/app/'
    }
    return ''
}()

const responseJson = res => res.json()

export const getData = (url,query) => {

    let headers = {
        "Accept": "application/json",
        'Content-Type': "application/json; charset=UTF-8",
        'token': getToken()
    }

    return fetch(url, {
        method:'get',
        dataType: 'json',
        headers,
    })
    .then(responseJson)
}

export const postData = (url,{body=""}={}) => {
    let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'token': getToken()
    }
    return fetch(url, {
        method:'post',
        dataType: 'json',
        headers,
        body,
    })
    .then(responseJson)
}

export const fetchError = () => {
    alert('Network Error!')
}

const nonMemberIdxGenerator = () => {
    let now = new Date();
    let nonUserIdx = "";
    nonUserIdx = now.getFullYear().toString();
    nonUserIdx += (now.getMonth() + 1).toString();
    nonUserIdx += now.getDate().toString();
    nonUserIdx += now.getHours().toString();
    nonUserIdx += now.getMinutes().toString();
    nonUserIdx += now.getSeconds().toString();
    nonUserIdx += now.getMilliseconds().toString();
    nonUserIdx = 'N' + nonUserIdx.substr(2);
    return nonUserIdx;
}

export const getUserIdx = () => {
    let ls_user_idx = localStorage.getItem("user_idx")
    
    if(ls_user_idx){
        return ls_user_idx
    }else{
        let uid = nonMemberIdxGenerator()
        localStorage.setItem("user_idx",uid)
        return uid
    }
}

export const getToken = () => {
    let token = localStorage.getItem("token")
    if(token){
        return token
    }else{
        fetch(`${db_host}user/tokenConversion`, {
            method: 'post',
            headers: new Headers({
                'Accept': 'application/json',
                user_idx : getUserIdx(),
                
            }),
            mode: 'cors',
            body: JSON.stringify({})
        })
        .then(response => response.json())
        .then(response => {
            localStorage.setItem("token",response.token)
            return true;
        });
    }
}


export const getLangauge = (path,locales,setIntlDone) => {
  return import(`${path}/locales/${locales}.json`)
  .then(res => {
    intl.init({
      currentLocale: locales,
      locales: {
        [locales]: Object.assign(intl.options.locales[locales] ? intl.options.locales[locales] : {},res)
      }
    })
  })
  .then(()=>setIntlDone(true))
}