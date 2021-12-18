import React from 'react';
import './information.styl';

const Information = ({ params }) => {
  if (params.scanResult == '5' || params.scanResult == '6') {
    return (
      <p className="txt txt05">
      정식으로 인증된 QR코드가 아닙니다.
        <br />
      제휴 브랜드가 맞을 경우 아래 제품 정보를 확인하시고, 스캐너 스 앱을 설치하신 후 신고하기를 통해 신고 및 판매처 직원에게 문의해주세요.
      </p>
    );
  }
  if (params.scanResult == '4') {
    return (
      <p className="txt txt04">
      이 제품은 복제품으로 의심되는 제품입니다.
        <br />
      아래 제품 정보를 확인하시고, 스캐너스 앱을 설치하신 후 신고하기를 통해 신고 및 판매처 직원에게 문의해주세요.
      </p>
    );
  }
  if (params.scanResult == '3') {
    return (
      <p className="txt txt03">
      이 제품은 다른 구매자에 의해 등록된 제품입니다.
        <br />
      아래 제품 정보를 확인하시고, 스캐너스 앱을 설치하신 후 신고하기를 통해 신고 및 판매처 직원에게 문의해주세요.
      </p>
    );
  }
  if (params.scanResult == '7' && params.accessKeyType == '1') {
    return (
      <p className="txt txt07">
      이 제품은 정품입니다.
        <br />
      혹시 인증한 제품과 다를 경우, 스캐너스 앱을 설치하신 후 신고하기를 통해 신고 및 판매처 직원에게 문의해주세요.
      </p>
    );
  }
  if (params.scanResult == '7' && params.accessKeyType == '0') {
    return (
      <p className="txt txt07">
      정품 확인은 제품 구매 후 스크래치에 가려진 숫자를 입력하시면 확인하실 수 있습니다.
        <br />
      스캔한 제품과 정보가 다른 경우, 스캐너스 앱을 설치 하신 후 신고하기를 통해 신고 및 판매처 직원에게 문의해주세요.
      </p>
    );
  }
  return '';
};

export default Information;
