import AboutProjectLayout from "./AboutProjectLayout"
import "./Aestige.css"
import "./PagesMediaQuries.css"
const Aestige = () => {
  return (
    <div>
<AboutProjectLayout projectTitle={"Aestige"}
 projectSubTitle={"Freelance Project for a Aesthetics business."}
 
  aboutText={"I connected with a business owner seeking to elevate their brand from just an Instagram page to a professionally tailored website. Through collaborative efforts, we engaged in a series of discussions and design iterations, persistently refining the website until it aligned perfectly with the client's vision."}
  projecturl="https://aestige.com/" 
 ></AboutProjectLayout>
 <div className="aestige-img-grid-ctn">
<img className='aestige-img a-img1' src="\images\aestige\aestige.png" alt="" />
<img className='aestige-img a-img2' src="\images\aestige\aestigeimg2.png" alt="" />
<img className='aestige-img a-img3' src="\images\aestige\aestigeimg3.png" alt="" />
<img className='aestige-img a-img4' src="\images\aestige\aestigeimg4.png" alt="" />
<img className='aestige-img a-img5' src="\images\aestige\aestigeimg5.png" alt="" />

 </div>
    </div>
  )
}

export default Aestige