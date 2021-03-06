import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SerachBar from '../../ui/searchbar/SerachBar'
import TopBusiness from '../../ui/business/TopBusiness'
import BusinessLocation from '../../ui/business/BusinessLocation'
import { BusinessLocationApi, BusinessTopsApi } from '../../../api/ServerApi'

class BusinessContainer extends Component {

  componentDidMount () {
    this.props.BusinessLocationApi()
    this.props.BusinessTopsApi()
  }

  render () {
    return (
      <div className={'turing--content--business'}>
        {/*Search bar*/}
        <SerachBar/>

        {/*Business Content*/}
        <div className={'container turing--container-content'}>
          <div className={'container'}>
            <TopBusiness tops={this.props.tops}/>

            {/* Business Location*/}
            <BusinessLocation business={this.props.businesslocation}/>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateProps = (state) => {
  return state
}

const matchDispatchProps = (dispatch) => {
  return bindActionCreators({
    BusinessLocationApi: BusinessLocationApi,
    BusinessTopsApi: BusinessTopsApi
  }, dispatch)
}

export default connect(mapStateProps, matchDispatchProps)(BusinessContainer)