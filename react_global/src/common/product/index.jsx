import React from 'react';
import { connect } from 'react-redux';
import './product.styl';

const Product = ({ prodInfo, params }) => (
  <div>
    {
      params.scanResult == '3'
        ? (
          <div className="productInfo">
            <ul className="info">
              <li>
                <em>등록일시</em>
                {prodInfo.reg_dt}
              </li>
              <li>
                <em>구매등록자</em>
                {prodInfo.user_id}
              </li>
              <li>
                <em>구매처</em>
                {prodInfo.sido}
              </li>
            </ul>
          </div>
        )
        : ''
    }
    {
        (params.scanResult == '3' || params.scanResult == '4')
          ? (
            <div className="productInfo">
              <ul className="info">
                <li>
                  <em>브랜드</em>
                  {prodInfo.br_nm}
                </li>
                <li>
                  <em>제품명</em>
                  {prodInfo.pro_nm}
                </li>
              </ul>
            </div>
          )
          : ''
    }
    {
        params.scanResult == '7'
          ? (
            <div className="productInfo">
              <h2>
                {prodInfo.pro_nm}
                <span>{prodInfo.br_nm}</span>
              </h2>
              <div>
                <div className="txt_contents" style={{ marginBottom: '30px' }} dangerouslySetInnerHTML={{ __html: prodInfo.pro_dc }} />
                {
                  prodInfo.pro_url
                    ? (
                      <div className="btn_area">
                        <div className="btn"><a href={prodInfo.pro_url} target="_blank" rel="noopener noreferrer">제품상세</a></div>
                      </div>
                    )
                    : ''
                }
              </div>
            </div>
          )
          : ''
    }
  </div>
);

const mapStateToProps = (state) => ({
  scanInfo: state.scanInfo,
  prodInfo: state.prodInfo,
});

export default connect(mapStateToProps)(Product);
