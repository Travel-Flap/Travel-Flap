import './NewsLetter.css';
// import newsletter from "images/travelFlapLogo.jpg";
export const Newsletter = () => {
  return (
    <>
    
    <div className='newsLetterMainBox'>
      <div className='newsLetterOuter'>
        <div className="section1">
           <div className='newsHeading'>
             <div className='newslogo'>
               <img src="https://cdn.pixabay.com/photo/2014/11/14/03/38/news-530220__340.jpg"/>
             </div>
             <div className='updateText'><h1>Stay Updated</h1><p>Subscribe to receive all travel news.</p></div>
           </div>
           <div className='newsInputs'>
             <input className='inputdata' type="text" placeholder="Your Name"/>
             <input className='inputdata' type="text" placeholder='Your Email'/>
             <button className='newsSubscribeButton'>Subscribe</button>
           </div>
        </div>
      </div>

      <div className='downloadLinks'>
          <div className='section2'>
            <div className='downloadText'>
             <h2>Download <br/> Our Mobile App</h2>
            </div>
            <div className='downloadButtons'>
               <div className='googleButtons'>
                <div className='googelPlaybutton'>
                  <img src='https://texttofloss.com/wp-content/uploads/2021/01/Google-Play-Store-Button.png'/>
                </div>
                <div className='appStoreButton'>
                  <img src='https://texttofloss.com/wp-content/uploads/2021/01/App-Store-Button-transparent.png'/>
                </div>
               </div>
            </div>
            <div className='scanner'>
              <div className='scanbar'>
                <div className='scanimage'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png'/>
                </div>
                <div className='scannerText'>
                Scan the QR Code to download Our Mobile App
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default Newsletter;