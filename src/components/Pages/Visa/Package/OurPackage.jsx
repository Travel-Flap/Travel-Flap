import React from 'react';
import "./OurPackage.css";
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';

export const OurPackage = () => {

   const sliderRef = useRef(null);
   useEffect(() => {
       console.log(sliderRef);
   }, []);

    return (
        <>
            <div className="famousdestinationsheadingcontainer" >
                <h2 className="famousdestinationsheading">Our Packages</h2>
                
                <div className='selectcountry' style={{marginTop:"-0.2%"}}>
                        
                            <select className="form-select ourpackagesdropdown" aria-label="Default select example" style={{border:"3px solid #3380f2",marginTop:"6%",width:"68%",fontSize:"12.5px",fontWeight:"700"}}>
                                <option value>Select Country</option>
                                <option value="1">India </option>
                                <option value="2">UAE </option>
                                <option value="3">Pakistan </option>
                                <option value="4">France </option>
                                <option value="5">Spain </option>
                                <option value="6">Turkey </option>
                                <option value="7">Italy </option>
                                <option value="8">Thailand </option>
                                <option value="9">Mexico </option>
                                <option value="10">Germany </option>
                                <option value="11">United Kingdom </option>
                                <option value="12">China </option>
                                <option value="13">Korea </option>
                            </select>
                        </div>

                <div className="famousdestinationssliderbuttons" >
                    
                    <div className="famousdestinationsbuttons">
                        <div style={{ display: "flex" }}>
                            <FaAngleLeft size={"2.5em"}
                            onClick={() => sliderRef.current.slickPrev()}
                            />
                            
                            <FaAngleRight size={"2.5em"}
                               onClick={() => sliderRef.current.slickNext()}
                           />
                        </div>
                    </div>

                </div>
            </div>
            <div className='data'>
            {/* <div className="famousdestinationsheading">Top Demanded Visas</div> */}
               <div className="famousdestinationscardmaindiv">
                
             <Slider
                    arrows={false}
                      autoplay={true}
                    speed={1000}
                    autoplaySpeed={2000}
                    // dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={5}
                    slidesToScroll={2}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true
                            }
                        },
                        {
                            breakpoint: 950,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                infinite: true
                            }
                        },
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                infinite: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                initialSlide: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]}
                    customPaging={(i) => (
                        <div
                            style={{
                                // position: "absolute",
                                width: "100%",
                                top: "-10px",
                                opacity: 0,
                            }}
                        >
                            {i}
                        </div>
                    )}
                >

                     


                <div className='packagecountrydetails'>
                   <h2>India</h2>
                   <img className='packageflagimage' src='data:image/png;base64,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' />
                   <h4>Asia</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Dubai</h2>
                   <img className='packageflagimage' src='https://cdn-icons-png.flaticon.com/512/323/323301.png' />
                   <h4>Asia</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Italy</h2>
                   <img className='packageflagimage' src='https://www.clipartmax.com/png/small/309-3090268_download-italian-flag-circle-png-clipart-flag-of-italy-italy-flag-icon.png' />
                   <h4>Europe</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>France</h2>
                   <img className='packageflagimage' src='data:image/png;base64,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' />
                   <h4>Europe</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Mauritius</h2>
                   <img className='packageflagimage' src='https://cdn-icons-png.flaticon.com/512/197/197616.png?w=360' />
                   <h4>Africa</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>India</h2>
                   <img className='packageflagimage' src='data:image/png;base64,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' />
                   <h4>Asia</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Dubai</h2>
                   <img className='packageflagimage' src='https://cdn-icons-png.flaticon.com/512/323/323301.png' />
                   <h4>Asia</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Italy</h2>
                   <img className='packageflagimage' src='https://www.clipartmax.com/png/small/309-3090268_download-italian-flag-circle-png-clipart-flag-of-italy-italy-flag-icon.png' />
                   <h4>Europe</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>France</h2>
                   <img className='packageflagimage' src='data:image/png;base64,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' />
                   <h4>Europe</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Mauritius</h2>
                   <img className='packageflagimage' src='https://cdn-icons-png.flaticon.com/512/197/197616.png?w=360' />
                   <h4>Africa</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>India</h2>
                   <img className='packageflagimage' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAADUCAMAAACs0e/bAAABIFBMVEX29vb+/v4QhwX+mDP///8AgAD+liz4s22lz6IAAIb29vUAAIMAfgAAhAAAAHf6+PoAAH4AAHQAAHsAAGn9lCcAAGX39/+SksD2/fX6/vr3lzPh4fL8/P/29v/a2uwAAHC+vt/x/PD78ub2nUP1un/s7PqYmL7Z2eXJyel/f7FoaKhhYaPFxdxpq2SXx5NBlTvf8t368eL43b/4yZn50ar4zqT77Nj1tnb1pVX3wY2vr84uLo5RUZx+frlERJWios4eHoFUVJc2No6Li77V1fJ3d7dWVpWhob6vr9cdHYXIx9jN6MtTnk5aolU0kC263Lb65Mv2ql4mJYx1dapJSZrCw+mys8oTE4RBQZiKisGamsWDg63B4b57tnYnih+Bt35e9SKdAAANN0lEQVR4nO2dC1vaSBfHzdsBTQJJIAhiuAQwGiAqiqUuVwHZotaqxRVr1f3+32LPJFpp126tmWQmffk/PojBR/LzzLnNTMjCwlxzzTXXXHPNNddvLYH2Cfit3xJYEIrFnZ2dRgMeikUBM8q0z8kDpYuN3b362uJ+qVRafRA83V9cq+/tNorCQob2GRIS2HO3/m6/FE4kEmHQmxnhn/Hh0v67+q5j60BLaOyt7Ycx55v/FKYO76/tNR6JheD58s7uWunNT0m/YX5TWtvdoX3evy5Z2NlbXAWLvRT1K3Iisbq4tyMEKX4JRcz6y6hPyEBcXAhGbpKF8zUXrF+J184xrUPMJjecVaa4dwEuSECJ8IVtYpZVrJfcGvZJ4USpzjIwUVgHeLVeZDRqFeuuXTYYwHZMeVsi4rL/VqL0lqEhbUdNYXffI1gbeH+XodgsLDQWyQ/jWYUTiw3alF8l1Fc9hbWBV+uMGPjcy3H8pMT+OW1SULr+xnPTOgq/qadp0zYufDGto8RFQ6ZZUAq73nvtrMKru0+FtP+0a94G5Gd4E3/Qsq684+dAflTiYsfnIsv5/8rnJZ9N6yhcOqcwjee3287wru76T/v25XNQxJV46zftHxTcdobX34CVXqNKC7xrPvIW31GmBd53vsxE21mePi3m9amiZILWsa8ftLT99lG++C/lmDwrP+JznRla4K17DJvZo1dcPKPwnre457QBv1P43Mt+oUGnK/ixwqWGd+m3uM8YLfDu23PQXiAzk4JmZacjL2jlPQZpgdejcNVYpU32A3ky486g4zp6cF+yYqia+l5eVFe7jNoWK0x8NqfIWsadVbhEeDgzPJSxSA/nc4ZtixUmulwmXLCOe5EmVGvgv8JmgTErksVGsUSb5qfC0YqU/7Idpxwl/iDVCu7QRnmZCO2UFdYYj1OOwoRm6hq0QV4qMq3Cu0AYF8z7jgRtIyC0b0iYV2ByCuN5JdbcG3eH1ab+Ga26C8441LE0jf4zuZ9mZ7rx+14uG0GB1em4H8lt5SwsBsi4YN5Fd6VGgLKQrbC7XFS3L9sLjtwFK2FtMWByVzijwMkNLfdViAuKiOAGR3PcF0r26IxsJ/Pob3Ovn8Px4mxs1Ewyk/GMmR1cANSanXZLjMfFVrvT1LwgZgUXWIetuCKKvC1RVKTWUCMOzAYtQrm+pGBMno9LUtx+witSP0camAVcZFQl4BNjrY6S1zVNzyudVgwfkaoGWV76uAiNAU1UxEvDQLkrBI/NHDx24RD8C8ZEDUwdF6EKDF6p25Oa6BjH5I0NHJ+PUVPqdfErFZK8r6QldgYoew1OOx1nce7ZyCEOHR/DQw4zo2xzCi48yJLjfV3mJfb2KNvCA7mKjpMAmVx/xF23fzxGFTygWwR5qeKizEDk46Oujjgg5VAFIK8sZD8BZg7p3VGcFwcZYrx0casKL33GBYVDWYbMM4bglCvDD9YVwsVHR+LB+qTekSYu6sV55TOycDBCbYhTVymEbm4QSl1BtGrjo/DiZ4WP90jxUsRFmgSRqIyy69i8+gRKqwNABeQDA6EJNjdaz6IyxDJJI8T7GlpC7RBqi/z0k46QMYFQj1qHCAHWcAj/BoQOB3CImwC3/mnKi21CuK8JzWTeGZkSL5n2QM51IRGZUw71U6jTQak+4qYwxLNdzR7Quv2LZN6VHu61KPahhsJE1hS+t4Yo1UKVCmql0HAARgdkTGsYfVHsBhwXWXE+bqLcumZ7bl5D5rJmLhv9vrFsassW0lQde6+2nkMmBHCLDC813JGIXRJlUthBUU+1UHdg5Jv9fjNvDLrIUnsIu3UKIjY4uTgKNC5KKrx40MT2yw0w8FDVc+q4Xe50yu2xmtPVIYYd5PB4Hn8SeSVJhJcWrgXlQ8Yu/yHXqmUDjVS9PNDbNzdtfVDW1Q4yyurNwy9kSI3m10w2E3hbDqVwoNpIOjPe2rU6zI7Uw5bZHY+7ZutQHWWH6rXmvJrcwMEqFWjrtkWlh4zml3JTw33fOB/Tx7HDSgpUOYyN9Vh+jDtBrVn+0jRQTyGUemnhgute47bPaLZj3S+6YXTUjlmpTONxpVIxy2rHMPQv3Vi/iQNZ9hqcN8C4KAmtu3ps51Xoa6v55Wnq8KY6wjNWvDKq3hympsv5ajNrT0iiY5Xn40RiFSVcAyKV/rRclTHLl9Kf0DLYivf+lC7LZubpdR36BCLzVpRwoT1QkknD0HKm3mz2UuXhWP+rozi4SucvfTwsp3rNpm7mNMOQIW3FibQJFHGNjeOr9+vlSaV/2ZoetSc35Ufc8s2kfTRtXfYrk/L6+6vjDYMQLqVE5ODOLL4mrd6kP3rEHfUnPSs58zIpXGq+C24acxoegBm382prbJav7WUE8bpsjltqvj02nKUTuzMOsu/iRISbdpu1qx50mprZPjAnl4ooKpcj8+DS1JqdA7VrEzsTAbQSEZFq7hqXGch4X6muW4BkdJcnh3mz8rkCX2b+cLLcxUcP16uV9/AEyozrAOddDpVFcWRY1oP/ptSWqavjybg/hq/JWNWtlppyVj7xb41EsRxoXD0uHjnruNATHRzoCLqCcczs9npdMzbuQLOrHxzk0IN3H/FxPdC4RgzSq93eofIUCg5TnRj51GQ0HI4mqbwxgv4X6dOyM7kDCTlGZnWMFi7u2ZUuGM5qN+ExtzxEo7gmva9W30uaNEHDZTAtal4CNeoqxCbnKOFyqBnHZaS83sSj1VB7SFuGBj/X78ODvqyhnmrgycjmumyXkM1g43KZKS8ODQu3+CgrwXCutFFPQtUqknqoXYGhHMOLQyhjGUORnxJaOKGGi9cQJHtDAsoMYMhqYM1KB41GqFMBa8Mrlr04ZGddYusI9HAzR7x4iXdgoAqUV6gK7fzUwtPq1hTa/Soc0iq4xBheivwRGeOiVy0jkHhnnIskXoxPIOliJ9UgbBkShxdNOAnaXDyljgxIvaO4yEtkshDlJbGKwkNpZdkuWsWjd+IsiU3w2MbLfihrQUHFK5XfYEkMD2fbcDhY5fBSdspyFjwtXE+t5+wFTx16iSMyk64c7fVdu9PRb8CwXzBzBcK0DvgZezkbDmk3mJZM62eLKi6HDjFvvIo3Y0Ac+YI3K+CFzi94SXBjA1XjeDfKIeXNCuQ2gOJlQOhvDbsV1KzHvRmW87OB+19ii3/cqzeBEnt/GM9HUCHGUtokh/ejPGw0Sh6j3ERLxaDOPCI3kl+9r4rgGaBsFffuilJFGkoaeBuZkYSnVSWOZwCqBLfdMLCNDFdNTQzGK62h2cobyaQBve+wZR+CSpnoLkEGcPEce8oGFqGgOBoMjvATvN0qniKWgB70SlzCm9XBWccDSXnY3mvPzinSYJwkveH11dvVyZ6Gs3u7V/kUl+IgKf6p0vNi//Zrab3YnG/vgtQskJb0aHc+S7jcw9UIHl598Wrc/7MLa+a47MsFbgAveXTzyTfCUuDk5oJWbjMSCpQim24Gs3wb+V+gFDlx9TFOKx9pA/ySoh9X3NAuyFsh2gi/otCW7OpidLkWqNEcqrn8SDLuLkqb4eWK3rnKuti8JwEyr8tAhZX+EBjzRj+4vxFGgHJR5JbAhwmmtwNi3ug2ibucyGcBMW/kjMgnRa4Ew3ujH9yVGI8KiPcS8VwsLgjmjX5wm3NtCQtCIHIv5FxSH2kbgNLKfUH1JLnAfKMQKhC8l4u8xPhwjizJAsGPV2c8GdnlI0FcxhvBiNvG73txWwzzRrbIxakHMTycSdVTTxIEucZsdHY9h/GcmI3OOCqTx11IbzJp39CmN3e3lAssdr7RbZIFxje8LGYj4jlohpe9Tp9QT/+8mMu+OON6eCPP9B1T4Sp05/FNeFdOGQpX0dOVBW9vssxSePYuKD8KqqvCR0Z4ox+9psWSa/dM8EbvvUtB7PFiWn9uBs8Cr1+2dXhp+2/0o1+2dXjpxufotn+2tXkLpxTrjdAHP2LyN7wrd9Tqycjdis+0wJumVT9HttKyp6XU8+LOQhQcOBo6Iz4P9zJBgPbdgUMf/Q1S3/AW/HbgyJ3fQeob3vRSxMcBHY0spSnSLtgZ2DcDR3zOtv+SgDPSlj8Gjka2VnyspH4orvbBBwNHPtQoReTvJa8seZ2SoqEl/0uLH0qu3Xk5oqORO8pe+yTbnWTu5NQr4Gjk9MTFjVm8kZy+3fYCOBrZvqWcfZ6XvHJGHBhgzxhy2m9FGtiBZZV2AQ/pk80QoUI6FNo8YXIYz0pO17bu3Zs4GrnfqrEO60RpuXC7GXVDHI2ENm+dUcxAGfUzCbLM1ZZOQ68jBtbTsxpzmec/hEtpOV0427yP/Fq5FQ1F7u/OCmmWw9MzehjUXOFk6xQjv4A5ilFPt04KXMBYZ2UjL91tRyMY+lnqKAaNRLfvloKN+hhlAJlbqd0u/X26fQ9gka9XUdrP77dP/166rRXSQUb9l2SATq8UCrXaydnZGb7yFL6d1GqFwgoG/Y1IZyV/L9on5LmErw/fPJlrrrnmmmuuueYKtP4BFdM8oHkuYjUAAAAASUVORK5CYII=' />
                   <h4>Asia</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Dubai</h2>
                   <img className='packageflagimage' src='https://cdn-icons-png.flaticon.com/512/323/323301.png' />
                   <h4>Asia</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Italy</h2>
                   <img className='packageflagimage' src='https://www.clipartmax.com/png/small/309-3090268_download-italian-flag-circle-png-clipart-flag-of-italy-italy-flag-icon.png' />
                   <h4>Europe</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>France</h2>
                   <img className='packageflagimage' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAzFBMVEX+/v7sJzgBIpX////t7e3s7Oz39/fw8PD7+/v29vbz8/MAIJXz+P8AGoz/9PbiJzcAAIkAHZTsITMAFJIAAIf/+fvsIjQAF5PnCSQACY/qFCpaaqz96+4AAI3lEinR2e321dkAJpA3S57q8Pvh5vEAAH/aESfmWWX0trvrjZT74eTI0OjnanP5zdG7xOE/UqH2wsbjTlmDkMARLZLjN0Wst9jtl55NXaflYmyRnspzgrnphIyAjb9LXqWfq9LxqbAXMpTjQE7kMUAjPZpXC/tOAAAO9ElEQVR4nO2daXucOBKAhcUhcCfu6UzanXbiTGJPnPhOYuea7M5O9v//p9V9IWgQ0Aie5RPGRqrXkqpKhaQCAF8wi/GVQnyHEnyXQfKQPEsQeZiT24I8BOTXCX2nIA9z+U4CQysoBpItISWBUknkLk9cJeHbpJDvKJFCKagLW9yXSAMVNG82SK4swVdK7hC5i+nDmNwicpeTu4w+JHcJfakgd4V8JwmvIJCRC5ErJ3cFvVUPC3KXux6m5C51vRNKQUDpHjUU7fGp6R7WYRLxTkruWIdJgisIqD5cVPbhXPVhNRjoO6kaDEloBYF5s8nxqYYisMZ0XjmmU2tMOwtiqpgVREXyLailRCAlV04v8y617lo+1H9NBjm9I/9ZgNjvC3y1LaidRC1tAGijuuOsYP8/ZkSNOwgwbt6DDaiWaEDbjRtJwFRd7NdpFieT8EvI/wvVEzkQcY8FA7Ap8yC9bm4eYmkzcvmQl2QYH8N9x1a1JRnHs9m6SxQDZtbpwKZmnd5aD3PrIZIPc+MdUv+Oblh/pY7K/SUCvWnc2K/FjKtnG9CX7e7YYtqFCixpIH4J7/f9XdjoZgOwVXum5ZKYZ5rERfe+6MDzl8hkY1qbxSDIHYqleWAxCPWQvpTJd1JM1nOraVfhJRFh4/+hVl6APRNMextljgshD4n0uSnl84u8JAUwybpzOkoYxS/JzN6I/13nXUceuoSljpDunw3YZIvHuz8X3VoOPn138f65RYeIi7LPWJAtFDz/+eTV8ZPObEer7dEHq/FgHneIBQk9ie+4ViIPacEFeZjLh0wBZYVFdnWyfHZ4cNgDWxStt6fXNwYdbCAR+TX1t1P1sLF90yIvZneE8PZueXx4cNATG75Wm4t7a+BRN7lSohr71tIvMcSBt2+Xxwf06o2N0H206PCo24fPpZNd3S1/OzjonY223Y3RMdP2bG29boPs/ESR9cxG6K4vNTqImOJrMQ9oPFtioVxdksWn5bODg8HYMN3ph6d62yGXRC4x+fzNNcuNq2e5Sg54+/nF4cGgbFhnPtzrcCltHV0i0sfixDXvbh8LkmKcGd1xIDZMt7l+qehwvxzEL9HbDcLH42cH9jUEWxRtj97rTZe1jwVRv4S2Jh2KlC1RPSDhUTYuw+JkeVhCG4iNNN1TfdABIZHok4nsk1xMEZ9MZZCXRWTNu0L+OlcdA169KTfacGy46X4Z5qAscOGiaBELUmjfSyNtYDasML9ocHnvsSBR/+LrK0d/HJYtijbfVL/E8vfsl/ByX7v749Bs0fbhDw2uv1iQstjw8Xd3fxycDffLe9N9rvaVhS1u8HVZuv14qP1e0R+HZ8P9Uh90Ukxyxyi07930103mprJq+GNZTTY8W7T5SwmT9hMLkmgnr+rQhmeLNtdyyo87Xx9+CS8MfH1Ri7YHtmj77bmCy/pig+BtpYLcH1u0/ajgmGyW3mseC5KOFlzsRNsLmw4HwI7xFkvtmcspgva9TqLd7UTbD1u0vVBwZG5WGS+x/RJ7fIpKwdfdaHti08ccEHNNH7+E1wlPdqiRfbJF22tpClAHn4uj/ahX/ntmi7bSzmEUr1iQqvJ7I7T9sREPRbxS7IwFOZfoidcf6xytUdiizXsJl2eF7jSq1YfuWJAR9oGvXXPskdnWp3JWgJKSfdu5FlvUd/a52vMfjS1aPbxUQ661X8LfhE20//7ZotWFML5EUbjZ3H6Jqu5nMz2yd7Zo+0Gzcu61arnzkrXdNh1se2eLNvei4VAFhHNtqOiU8OxJc7R9s62PXkplmTWPBXH9D+G/Gg+2/bNh50ua8BZ+iajr37Xz7LHZos3fmq6sZIOmr8zfOH/WokeOwLaOLmXDJY419IUZC8qVQ4LV/3EbtP2zRSvZK5HLsSrbAKlIHlv1yDHYdN+rUSxI/HErHTkS2/pICzfv9kvEiIM/2ujIkdjIdKcFm/jLxi7yqGyRcpodsSCDDaay2e7aKZKx2FYX0sjZK0/Kc1P+h7ctFclYbMr1Qjv8EvHJBsL/NJ3ZjM22ejCXoVT7JeJPHpu7/yOzaXaglk10SQgbT0jHZ1s/aOsCa2JBwkn2abax2EwDbseCgIwFiT/5r0ezjca2/oc3HCyMnajsmYwF8TpufZptNDZNVSZ1tpv9/Nan2cZjW31U04EdbPCqvW0blS3acOcE5pWxIFHFSWuXZGS21bWo2JgHaMtqUlYBPGsYRw6HLToVoROkLQ4CatVWkfIavjf5aBMW21Z8IBA2AJjf33jgzsvdGptNmQGnXyKDW6/9NMmobEqbmHvXeSxIVtB6ThoCm5yjkr3XMhbEl/umotlA21BCEGzrI/GhWC24VjZAuMlXXj7J2GzR5kZok3IsKBFa0rtLjsumBU7KfgkvHrzx7ZLjsq1/aetOLDauWvy15MhsUlNabIDsTOJsnzwN9+hs0nwDucNKzk158X5TgADY8GSA1Y7KsSBWuq8vOT5b9E74lA6/hJbuNysNgk3MULFFc7P99LYAo7OJD+CwSMxYkCi9w3Abm03MvrFLyccbvfiOUzzcfvMfbmOzReqbjraNH2bCcnewbuOzmWuFJJuw3I/+1m18tu3fTjbhKPs7kyGw/WWxsXmA8Eq6qJLR2WQoDxixIF724qCDKhmdTc7hkHGOIS/7vPW30pDYolO+JAPZsSDgH3QNhW0r5qcOv8Tv801AbOKDTiFiQdqnKd/IZChsX4TXxfwSuhpPsHUyAQGwCSOQsrgyJRR68msXEzA+2+pCBfLEOYYy7Or1STEctvU/kk3FFLinDP3jQGGw/dIPDWRrZwTbosssIAA2ORPQzzEUbB0CCkGwnQq2TIsFsaK7uSUhsMlNA3YsCLN1QQuB7dIQQGfrNDP9P9vAbH8YAujjbT5sbLxpEaH5sGnfqETRM2JTfsls2C4r2WZjA/RYkGSbie02clqwoufjc5ViQTPylWlpBtsM5jhAsVmxoNnMTTmbHguaS0whZRqSh01Y2XOJBSEtp4X41DGTGJ4eC4L8bNrZxF6Nb1S87LnEzI19VL0EFUZnk1NTI6eFMN7z+EYFjHMMReGz+LYIc9e6oHl8E4aFa+3MPL7ly6UJJts81mCUc1qQws+OZ7B2Blk5LdIeFioEsuYJAHO9slyJPYO1asDyS8TKtTmsMbTZ5FLsOawNLe0RE1O46a/phY6cFuwXk1+LDUluDlaeue51BmvotQ0BNtv09z649ojx8qe+ZyVNHHvXefn+89Mg9hrRLfilnBa8/KnvEUNpKaeFsgLT3ttHy3HntOiiKUPYk8nCrlV716e9lxZoJ9RbOS1oDVPeA51W5LQQXzwmuHdd+JIwrcppIaqY8JkDlecF5d20yfhnRYDqM3XkaXFTPeOjhk2auKmezQJqclrIo5CmeaYOqM1pISqZ5llIqP4cQ17JJM+wUqdw1ZwX5Nlwo589FtefYyhqmeCZcSq5Q9XZ0VJVTu6sv0Y5LdhfTu2MRliwQyZ35bQAYIJna7Y4X3liZ6Ji8VuwTews22Y5LURNUzqDmIbGG+S0kKcZTujsaNAsp4WaDkznzG/6dpOcFiq6MJWz2jnbDr/EyGkxmTP2kZvNldNC5uuYSG4EmLXJaSEO/ZhETgtQlZjDmdNCHtg+jVwkoFV+U3U+dvg5ZIBQGE1zbSldGXrun51s0PSV9aSmoedsYmziNMZdOS2IWS8ymYw27FxbdcnCXDYg1hcxg6BzpAGR47pZTguZJ1MOuXBz2wHvHKAq40qoOQm92TQrF2ouSVCf39Rgg0a7JZmsNcwcoIpNKvranBZQz7uuqg0wdyuVuHne9VJ+U3WaXHA5dzvnXc/UKeeB5UruIae8doR7UDmum7DVjzdi1VNZdUi5yaE7j3pNTgvmsmh52vVEpwHllIdIelbqA2JhxoLsnBamDbBOAwfUt6yeFQzLtjq9h4YaKeddt+0bY3P7JfKEei3dxes3lepyULbtg+b5028XZd3QxueSbHouj8XXVxX9cki2zbenWtkN2arnAWp85kmSq3Lh96W7Xw7Htjr9YmgRIpHQGDXzAC2nhcoG4XioSQCv3P1yMLbtrxsNLa8S06bQc1owbGKl+f8C8JVebP2XJsPixDUXH4htvbnW+iMTk3uNSSLyrksKd04Lt+2ORXIxlGlCwMfjctMNw7Y9em8kCsuURF39Er0kzSDAs5PSqBuCDTfaSx3NkmgHm4yiqE8FgOSFEH1SzRs0F4U03e3nF4cDs623D/fQLNOQiKxuFXNNVyyI57RAPLMMdU5UXgjrIdJrWXxaPhuUbXX64amO5pKoUAuuU+thUxvANS4w+iU8Nzpmz2yrzfWl2R1dEtXZAPrSTtutjURzGcrVnaLrlW21ubixu2OFRB39Ej3inBn1wdu3y+Pe2Vabj/fQQuvK5vSV9ZUnanG6Rne3pFs5e2PDbWaSQaSxlSWq85XZZiqqBNNYzg7UDiuyMylmeyNi/tAYB/DqZIl1Zj9s6+3p9Y3VZkUDifBfkYfUObRzWlTOTYkXYGuZODfqxlrl55NXxz2wrbZHHy7LvXG3RM2/Ubltt2YpkwyZtcPF492fndneXbx/boKx7thAoo5+iVFSCswL/6POEeh2IbvJ8Py6uUT9sTk4urVauQTsWSRljdGczW+8iXdQ15aq42Rjp6VE+nijF8FmepJmg6BaiWpcoZVIi9K/VA8L9XAQMlR4SZTLd3bbN7DbmvTQF0sXJkv8JfL1SxxeQJb2jadlk/WSqD823OuLvgYeGyadJaJs7eYBNV63Nnw7XCiPe5PIOX9D1sSo0WxJy43hd9H/jFF6R4lcazCg/h3HNct1rnhIlNHzaj6yTkIrqAeJutlufVW3YktT1BoPxTI8lfQkUUe/xMlG+n2c8QS+9UTkW0taV1BHtkq/BLTzApwOTp6KsIWA0e9gkcUNC/KRiC3PYxFZ67bJw13vyCAv28yK6EMy4tOWBflI1LMNqCkIULMkRlXNcp6+JOrJdpNbGFpB82ZT5kF6pkl9LMj2TKEuUkAFxTVL9IydqLu/LodXUMe5aSPVPVZBw9juIAoayC8JoiCbzT/yYokUQEH6WmwWg3CUFGvr9rSSqNcdWyIFVBD4HwXaEVDHJYiGAAAAAElFTkSuQmCC' />
                   <h4>Europe</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Mauritius</h2>
                   <img className='packageflagimage' src='https://cdn-icons-png.flaticon.com/512/197/197616.png?w=360' />
                   <h4>Africa</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                
                
                </Slider >
             </div>
          </div>
        </>
    )
}
