import React from 'react';
import Button from '../utils/Button';

const HomePromotion = (props) => {
  const propmotion = {
    img: '/images/featured/featured_home_3.jpg',
    lineOne: 'Up to 40% off',
    lineTwo: 'Second hand guitars',
    linkTitle: 'Shop Now',
    linkTo: '/shop'
  }

  const renderPromotion = () => (
    propmotion ?
      <div
        className="home_promotion_img"
        style={{
          background: `url(${propmotion.img})`
        }}
      >
        <div className="tag title">{propmotion.lineOne}</div>
        <div className="tag low_title">{propmotion.lineTwo}</div>
        <div>
          <Button
            type="default"
            title={propmotion.linkTitle}
            linkTo={propmotion.linkTo}
            addStyles={{
              margin: '10px 0 0 0'
            }}
          />
        </div>
      </div>
    : null
  )

  return(
    <div className="home_promotion">
      {renderPromotion()}
    </div>
  );
}

export default HomePromotion;
