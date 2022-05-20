import React from 'react';
import { useState } from 'react';
import { Icon } from 'Icons';
import { Range, getTrackBackground } from "react-range";
import {useAudio} from 'react-use';
import { secondsToTime } from 'utils';


function Player() {
    const STEP = 0.1;
    const MIN = 0;
    const [audio, state, controls, ref] = useAudio({
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
 
      });

  return (
    <div className='flex justify-between items-center h-full px-4'>
        <div className='min-w-[11.25rem] w-[30%]'>
           
         sol

        </div>

        <div className='max-w-[45.125rem] w-[40%] flex flex-col items-center'>
            <div className='flex items-center gap-x-2'>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="shuffle"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon size={16} name="playerPrev"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]' onClick={controls.play}>
                <Icon size={16} name="play"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon size={16} name="playerNext"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon size={16} name="repeat"/>
                </button>
            </div>
            <div className='w-full flex items-center gap-x-2'>
                {audio}
                <div className='text-[0.688rem] text-white text-opacity-70' >
            {secondsToTime(state?.time)}
        </div>
                    <Range
          values={[state?.time]}
          step={STEP}
          min={MIN}
          max={state?.duration || 1}
          onChange={(values) => controls.seek(values[0])}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className="w-full h-7 flex group"
              style={props.style}
            >
              <div
                ref={props.ref}
                className="h-1 w-full rounded-md self-center"
                style={{
               
                  background: getTrackBackground({
                    values: [state?.time],
                    colors: ["#1db954", "#535353"],
                    min: MIN,
                    max: state?.duration || 1
                  }),
                 
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              className={`h-3 w-3 rounded-full bg-white ${! isDragged ? 'opacity-0' : ''} group-hover:opacity-100`}
              style={{
                ...props.style,
               
                boxShadow: "0 2px 4px 0 rgba(0 0 0 / 50%)"
              }}
            >
              
            </div>
          )}
        />
        <div className='text-[0.688rem] text-white text-opacity-70' >
            {secondsToTime(state?.duration)}
        </div>
            </div>
        </div>

        <div className='min-w-[11.25rem] w-[30%] flex justify-end'>
            sağ
        </div>

     </div>
  )
}

export default Player