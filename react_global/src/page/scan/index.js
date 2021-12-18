import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import intl from "react-intl-universal";

import Loading from '../../common/loading'
import Btnarea from '../../common/btnarea'


import { changeLangauge } from './redux'
import {getUserIdx,getLangauge} from '../constant'

import wrapPage from '../wrapPage';


const Scan = (props) => {
  const InnerPage = ({locales,changeLangauge}) => {
    console.log(locales)
    const [intlDone,setIntlDone] = useState(false)
    getLangauge('./scan',locales,setIntlDone)
    return <div >
      
      <div>
        <button onClick={() => changeLangauge('zh-CN')}>중국어</button><br /><br /> <br /><br />
        <button onClick={() => changeLangauge('ko-KR')}>한국어</button>
      </div>
      <br /><br /> <br /><br />
      <div key={locales+'213'}>{intl.get('SIMPLE')}</div>
      <Btnarea key={locales} />
    </div>
  }

  return <InnerPage key={props.locales} {...props} /> 
}

const mapStateToProps = state => ({
  props: state.testProp
})
const mapDispatchToProps = (dispatch) => ({
  changeLangauge: locales => {
    dispatch(changeLangauge(locales))
  },
})

export default wrapPage(Scan,mapStateToProps,mapDispatchToProps)
