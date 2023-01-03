import react, { useEffect, useState } from 'react'
import Flickity from 'react-flickity-component'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from '../../../images/honda.jpg'
import './Review.css'
import { Rating } from '@mui/material';
import ShowMoreText from "react-show-more-text";

const Review = () => {
  const [review, setReview] = useState([])
  useEffect(() => {
    const url = `http://localhost:5000/review`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setReview(data);
        console.log(data);
      })
  }, [])
  const flickityOptions = {
    initialIndex: 1
  }

  return (
    <div className='mb-5 mt-5 review-slider'>
      <h1 className='text-center mt-5 mb-5'>People opnion for this site</h1>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >

        {
          review.map((item, index) => <div className='review-system' key={index}>
            <div className='card-sec'>
              <Card style={{ 'width': '250px', 'height': '350px' }}>
                <div className='card-top-img' >
                  <img alt='loading...' src={pic} />
                </div>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Rating
                    name="half-rating"
                    defaultValue={item.rating}
                    precision={0.5}
                    readOnly
                  />
                  <h1 className='text-center'>Coments</h1>
                  <Card.Text>
                    <div className='scrolling-div'>
                      <ShowMoreText
                        /* Default options */
                        className='showMore'
                        lines={5}
                        more="Show more"
                        less="...Show less"
                        expanded={false}
                        width={0}
                      >
                        {item.coment}
                      </ShowMoreText>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>)
        }

      </Flickity>
    </div>
  );
};

export default Review;