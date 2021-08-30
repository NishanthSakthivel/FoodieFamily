import React from 'react';
import Footer from '../components/Footer'
/* import footer from '../components/footer'
 */
const Card = (props) => {
    return (
      <div className="container wrapper_card">\
      
        {props.children}
      </div>
    );
};

export default Card;