import React from 'react';
import axios from 'axios';

export default class Recent extends React.Component {
  //declares empty state
  state = {
    reviews: []
  }

  //invoked once component is mounted
  componentDidMount() {
    //get request from api
    axios.get(`http://127.0.0.1:8000/`)
      .then(res => {
        //sets the data of the results to a const variable reviews
        const reviews = res.data;
        //prints out data to see
        console.log(reviews);
        //sets the varibale to the empty state delcared above
        this.setState({ reviews });
      })
      .catch(error => {
        console.log(error);
      });
  }

  //renders the html
  render() {
    return (
        <section className="py-16">
            {/*refers to this class state of reviews and maps it out*/}
            {this.state.reviews.map(review =>   <div key={review.review_id} className="bg-white lg:container lg:mx-auto mx-16 my-10">
                                                    {/*border*/}
                                                    <div className="rounded">
                                                        <div className="p-8">
                                                          <div className="text-gray-900 font-bold text-xl mb-2">{review.class_name}</div>
                                                          <p className="text-gray-700 text-base">{review.review}</p>
                                                          </div>
                                                          <div className="flex items-center">
                                                          <div className="text-sm pb-8 pl-8">
                                                              <p className="text-gray-900 leading-none">{review.professor} </p>
                                                              <p className="text-gray-600">{review.quarter}</p>
                                                          </div>
                                                        </div>
                                                    </div>
                                                </div>
            )}
        </section>
 
    )
  }
}


