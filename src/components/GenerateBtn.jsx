import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import AppContext from '../context/AppContext'

function GenerateBtn() {
 const { user, setShowLogin, navigate } = useContext(AppContext);

 function handleClick(){
  if(user){
    return navigate('/result')
  }
  return setShowLogin(true)

}
  return (
    <motion.div
    initial={{ opacity:0.2, y:100}}
     transition={{ duration: 1}}
     whileInView={{ opacity: 1, y:0}}
     viewport={{once: true}}
     className='pb-16 text-center'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-center text-neutral-800 py-6 md:py-16'>Try now to see the Magic</h1>
      <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05}}
      whileTap={{scale: 0.95}}
      initial={{opacity:0}}
      animate={{opacity:1}}
       className='cursor-pointer inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 trans'>
        Generate Imgage
        <img src={assets.star_group} alt="" className='h-6' />
      </motion.button>
    </motion.div>
  )
}

export default GenerateBtn
