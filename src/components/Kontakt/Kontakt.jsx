import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import EmbededMap from './EmbededMap';

const Kontakt = () => {
  return (

    <div className='py-[150px]'>
      
      {/* ==== Banner Section ==== */}
      <div className='w-full h-[1008px] bg-[url("/assets/bg-Kontakt-page.jpg")] bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#6c6c6c]'>
        <div className='container mx-auto px-[1%] lg:px-[85px]'>
          <div className='py-3'>
            <p className='text-white text-lg uppercase pt-8 my-8 font-semibold tracking-widest'>Wir sind gerne für Sie da</p>
            <h2 className='text-white text-5xl uppercase tracking-widest mb-10'>Kontaktieren Sie uns</h2>
          </div>
          <div className='text-[#424242] py-4'>
            <div className=' bg-white uppercase py-[60px] px-[65px] flex flex-col lg:flex-row gap-4 justify-between items-center'>
              <div className='w-full lg:w-2/4 space-y-3'>
                <img className='block py-6' src="/assets/quote.svg" alt="/assets/quote.svg" />
                <p className='text-2xl pe-[20px] pb-[40px] tracking-widest leading-relaxed border-b-2'>Für Angelegenheiten, die eine <br /> direkte Abstimmung mit unserem<br /> Management erfordern.</p>
                <h3 className='pt-[12px] text-[30px] font-bold'>+ 41 79 329 44 44</h3>
                <p className='text-[16px] tracking-wide pb-[24px]'>Führung und Management</p>
              </div>
              <img className='w-[300px] h-[300px] ' src="/assets/Picture1.jpg" alt="/assets/Picture1.jpg" />
            </div>
          </div>
        </div>
      </div>

      {/* ==== Contact & Map Section ==== */}
      <div className='container mx-auto px-[1%] lg:px-[85px]'>
        <div className='flex flex-col lg:flex-row gap-8 justify-between'>
          <div className='w-full lg:w-1/2 border-2'>
            <div className='px-[30px] py-[50px]'>
              <h3 className='text-[30px] mb-[25px]'>Kontaktiern Sie uns</h3>
              <div>
                <ul>
                  <li className='flex justify-start gap-3 items-center mb-[15px]'>
                    <FaPaperPlane className='size-6 pe-2' />
                    <p className='text-[16px] tracking-wide'>Handel & Büro :</p>
                    <Link className='text-[16px]' to="to:+41793294444">+ 41 79 329 44 44</Link>
                  </li>
                  <li className='flex justify-start gap-3 items-center mb-[15px]'>
                    <FaEnvelope className='size-6 pe-2' />
                    <p className='text-[16px] tracking-wide'>E-mail: </p>
                    <Link className='text-[16px]' to="mailto:info@hammerstein1870.group">info@hammerstein1870.group</Link>
                  </li>
                  <li className='flex justify-start gap-3 items-center mb-[15px]'>
                    <FaMapMarkerAlt className='size-6 pe-2' />
                    <p className='text-[16px] tracking-wide'> Address: Gewerbestrasse 5, <br />  6330 Cham </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 border-2'>
            <EmbededMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;