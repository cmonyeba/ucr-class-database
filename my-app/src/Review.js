import React from 'react'
import axios from 'axios';

export default class Reivew extends React.Component {
  
  state = {
    classname: '',
    reviews: [{ "millis": "1000", 
    "stamp": "1273010254", 
    "datetime": "2010/5/4 21:57:34", 
    "light": "333", 
    "temp": "78.32", 
    "vcc": "3.54" }, ]
  }
  
   //update state of classname 
  onChangeHandler = (e) => {
    this.setState({ classname: e.target.value });
    //check if working it is one behind the classname value
    console.log(this.state.classname)
  }   

  onClickHandler() {
    //whenever button is clicked click will print
    console.log('click')
    //get request with the classname attached
    axios.get(`http://127.0.0.1:8000/review/${this.state.classname}`)
      .then(res => {
        const reviews = res.data;
        //prints out data to see
        console.log(reviews);
        //sets the varibale to the empty state delcared above
        this.setState({ reviews });
      })
      //if there is an error print error
      .catch(error => {
        console.log(error);
      });
  }

 
  render() {
    return (
        <section className="py-16 "> 
             <h1>Look for you classes</h1>
             {/*updates classname state on change*/}
             <div class="flex items-center border-b border-teal-500 py-2 w-sm">
                <input className="appearance-none bg-blue-100 border-none w-full h-lg text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        placeholder='ECON003'
                        value={this.state.classname}
                        onChange={(e) => this.onChangeHandler(e)}
                />
            </div>
            {/*make sure to passthrough the fucntion to onClick and not call it*/}
            <button className='bg-red-100'
                    onClick={() => {this.onClickHandler()}}>
                Search
            </button>
            {this.state.reviews.map(review =>   <div key={review.review_id} className="lg:container lg:mx-auto mx-16 my-10">
                                                    {/*border*/}
                                                    <div className="border-bold border-4 border-gray-600">
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


