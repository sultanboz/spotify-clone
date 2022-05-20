
import { Icon } from 'Icons';
import {useAudio} from 'react-use';
import { secondsToTime } from 'utils';
import CustomRange from 'components/CustomRange';


function Player() {

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

                <button className='w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]'
                 onClick={ controls[state?.playing ? 'pause' : 'play']}>
                <Icon size={16} name={state?.playing ? 'pause' : 'play'}/>
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
        <CustomRange
        step={0.1}
        min={0}
        max={state?.duration || 1}
        value={state?.time}
        onChange={}
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