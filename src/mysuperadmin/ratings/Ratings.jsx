import React, { useState, useEffect } from "react";
import Axios from 'axios';
import './ratings.css';
import Profile from '../../assets/profile1.jpg';


function App() {
    const[newApproval] = useState('Approve');
    const[newDisapproval] = useState('Disapprove');
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
      Axios.get('http://localhost:3001/readReview').then((response) => {
        setReviewList(response.data);
      });
    }, [reviewList]);

    const updateApproval = (id) => {
      Axios.put("http://localhost:3001/updateReview", {
        id: id, 
        newApproval: newApproval,
      });
    };

    const updateDisapproval = (id) => {
      Axios.put("http://localhost:3001/updateReviewDis", {
        id: id, 
        newDisapproval: newDisapproval,
      });
    };

  return (
    <div className='ratings_content'>
      <div className="textBox">
      <h2>Ratings & Reviews<br></br></h2>
      </div>
    <div className='ratings_body'>
      
    <div class="wrapper_ratings_content">

    {reviewList.map((val, key) => {
      return (
                <div key={key}>
                  <div class="box_ratings_content">
      <i class="fas fa-quote-left quote"></i><i onClick={() => updateDisapproval(val._id)} class="fa-solid fa-thumbs-down thumbsdown" id='thumbsdown'></i><i onClick={() => updateApproval(val._id)} class="fa-solid fa-thumbs-up thumbsup" id="thumbsup"></i>
      <p>{val.message}</p>
      <div class="content_ratings_content">
        <div class="info">
          <div class="name">{val.name}</div>
          <div class="job">Designer | Developer</div>
          <div class="name">{val.approval}</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="image">
          <img src={Profile} alt=""/>
        </div>
      </div>
    </div>
              </div>
              );
            })}
    
      
     
  </div>
    </div>
    </div>

   
  )
}

export default App;