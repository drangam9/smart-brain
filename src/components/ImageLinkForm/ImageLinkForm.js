import React from 'react';
import './ImageLinkForm.css';

export default function ImageLinkForm({ onInputChange, onButtonSubmit }) {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-2'>
                    <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
                    <button className='w-30 ml3 grow f4 link ph3 pv2 dib white bg-blue br3' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>

    );
}