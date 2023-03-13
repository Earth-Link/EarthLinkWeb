import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className='aboutusdiv'>
      <Link className="returncontianer" to='/'>
        <button className='return'>Return to Login/SignUp</button>
      </Link>
      <div className='aboutustxt'>
        <p>
          Welcome to Earth Link, a non-profit organization founded by four
          dedicated engineers who share a common goal of creating a sustainable
          future for our planet. Our mission is to spread awareness about the
          importance of reducing our carbon footprint and inspire people to take
          smart eco-friendly actions.
        </p>
        <p>
          We believe that every individual has the power to make a positive
          impact on the environment. By coming together as a community, we can
          work towards a better and cleaner future for ourselves and future
          generations. At Earth Link, we provide a platform for like-minded
          individuals to connect, share ideas, and take action.
        </p>
        <p>
          Our team of engineers is committed to creating innovative solutions to
          tackle environmental challenges. We aim to educate people about the
          benefits of sustainable living and provide resources to help them make
          eco-friendly choices in their daily lives.
        </p>
        <p>
          Our vision is a world where people and nature coexist in harmony,
          where we prioritize the health of our planet and work towards a
          sustainable future. We believe that by working together, we can make a
          difference and create a better world for ourselves and future
          generations.
        </p>
        <p>
          Join us at Earth Link and be a part of the movement towards a greener,
          cleaner planet. Together, we can make a difference.
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
