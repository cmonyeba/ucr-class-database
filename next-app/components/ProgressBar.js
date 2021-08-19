import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;


  const fillerStyles = {
    height: `${10 * completed}%`,
    backgroundColor: bgcolor,

  }


  return (
    <div className='flex flex-col'>
      <div className='relative h-44 w-10 m-1' >
        <div className='absolute bottom-0 w-full border-4 rounded-xl' style={fillerStyles} />
      </div>
      <h6 className='text-center font-bold '>{`${completed}`}</h6>
    </div>
  );
};

export default ProgressBar;
