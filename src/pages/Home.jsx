/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components'; 
import '../assets/styles/style.css';



import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img src="./a.ico" alt="logo" className='w-10 h-10 object-contain'/>
                    </motion.header>

                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headContainerAnimation}>
                            <h1 className='head-text text-black'>
                                Design <br/> your own <br  className='xl:block hidden'/>
                                    Funk!.
                            </h1>
                        </motion.div> 
                        <motion.div className='flex flex-col gap-5' {...headContentAnimation}>
                            <p className='max-w-md font-normal text-black-600 text-base'>
                                Create your unique and exclusive T-shirt with our brand new customization tool. 
                                <strong> UNLEASH YOUR IMAGINATION!</strong>
                                {" "} and define your own style.
                            </p>
                            <CustomButton 
                                type="filled"
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-6 py-4 font-bold text-sm"
                                style={{ marginTop: '100px' }}
                            />
                        </motion.div>

                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home;
