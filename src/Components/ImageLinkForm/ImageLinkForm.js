import React from 'react';
import './pattern.css'


const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
  return (
    <div>
      <p className='f3'>
        {'This is a face detection API'}
      </p>
      <div className='form pa4 br3 shadow-5 w-80 center'>
        <input placeholder='Enter image URL' className='f4 pa2 w-40 center' type='text' onChange={onInputChange}/>
        <button className=' grow f4 link ph2 pv2 dib white bg-blue' onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;
