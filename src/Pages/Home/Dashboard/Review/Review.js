import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@mui/material';

const Review = () => {
    const [review, setReview] = useState([]);
    const reviewInfo = {}
    const [reviewSystem, setReviewSystem] = useState(reviewInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const myReview = { ...reviewSystem };
        myReview[field] = value;
        setReviewSystem(myReview);
        e.target.name = '';
        e.target.value = '';
    }
    const handleOnSubmit = (e) => {
        const proced = window.confirm("are you sure to give me some reviw?"); {
            console.log(reviewSystem)
            const myProducts = {
                ...reviewSystem

            }
            console.log(myProducts)
            fetch('http://localhost:5000/review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(myProducts)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {

                        // setIsSuccess(true);
                    }
                });
        }
        e.target.name = '';
        e.target.value = '';
        e.preventDefault();
    }
    return (
        <div>

            <h1>please some review there</h1>
            <form onSubmit={handleOnSubmit}>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    name="coment"
                    onBlur={handleOnBlur}
                    placeholder="enter your comment"
                    style={{ width: 200 }}
                    maxlength="300"
                />
                <br />
                <input
                    type="number"
                    name="rating"
                    min="0" max="5"
                    onBlur={handleOnBlur}
                    step="any"
                ></input>
                <br />
                <Button type="submit" >
                    give your review
                </Button>
            </form>
        </div>
    );
};

export default Review;