
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => ({
  locales: state.locales
})

const wrapPage = (Component,props,dispatchs) => {
  return withRouter(
    connect(mapStateToProps)(
      connect(props,dispatchs)(Component)
    )
  )
}

export default wrapPage;
