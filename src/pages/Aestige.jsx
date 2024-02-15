import AboutProjectLayout from "./AboutProjectLayout"
import "./Aestige.css"
import "./PagesMediaQuries.css"
import "./forAllPages.css"
import useGoBack from './page-components/useGoBack';

const Aestige = () => {

  const goBack = useGoBack(); // Use the custom hook to get the goBack function

  return (
    <div>
        <button className="go-back-btn" onClick={goBack}> <img className="x-ic-size" src="/images/x-icon.svg" alt="" /></button>
        <div className="proj-body"> 
<AboutProjectLayout projectTitle={"Aestige"}
 projectSubTitle={"Freelance Project for a Aesthetics business."}
 
  aboutText={"I connected with a business owner seeking to elevate their brand from just an Instagram page to a professionally tailored website. Through collaborative efforts, we engaged in a series of discussions and design iterations, persistently refining the website until it aligned perfectly with the client's vision."}
  projecturl="https://aestige.com/" 
  extraText="Ever since this site went live, it has consistently attracted close to 1000 visitors each month, representing a remarkable tenfold increase compared to their Instagram traffic. This surge in visitors has led to a significant uptick in bookings and consultations. My personal goal is to further elevate site traffic to 3-5k visitors monthly. To achieve this, I plan to establish a Google Business account and implement comprehensive website enhancements."
 ></AboutProjectLayout>
 <div className="aestige-img-grid-ctn">
<img className='aestige-img a-img1' src="\images\aestige\aestige.png" alt="" />
<img className='aestige-img a-img2' src="\images\aestige\aestigeimg2.png" alt="" />
<img className='aestige-img a-img3' src="\images\aestige\aestigeimg3.png" alt="" />
<img className='aestige-img a-img4' src="\images\aestige\aestigeimg4.png" alt="" />
<img className='aestige-img a-img5' src="\images\aestige\aestigeimg5.png" alt="" />

 </div>
 </div>
    </div>
  )
}

export default Aestige