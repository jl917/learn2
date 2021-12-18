import React from 'react';
import { connect } from 'react-redux';
import './imgarea.styl';

let type;

const Imgarea = ({ prodInfo, params }) => {
  if (params.scanResult == '3') {
    type = 'type3';
  }
  if (params.scanResult == '4') {
    type = 'type4';
  }
  if (params.scanResult == '5' || params.scanResult == '6') {
    type = 'type5';
  }
  if (params.scanResult == '7' && params.accessKeyType == '1') {
    type = 'type7';
  }
  if (params.scanResult == '7' && params.accessKeyType == '0') {
    type = 'type8';
  }

  return (
    <div className="img_area">
      <img src={prodInfo.pro_img} alt="" />
      <div className={`img_mask ${type}`} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  scanInfo: state.scanInfo,
  prodInfo: state.prodInfo,
});

export default connect(mapStateToProps)(Imgarea);
