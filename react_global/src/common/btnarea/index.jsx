import React,{useState} from 'react';
import wrapPage from '../../page/wrapPage';
import {getLangauge} from '../a'
import intl from "react-intl-universal";


import './btnarea.styl';

const Btnarea = ({locales}) => {
  const [intlDone,setIntlDone] = useState(false)
  getLangauge('./btnarea',locales,setIntlDone)
  
  return <div className="pr_bottom_btn">
    <button type="button" className="c01" onClick={() => alert('준비중입니다.')}>{intl.get('btn_area')}</button>
    
  </div>
}
  

export default wrapPage(Btnarea);
