import Carousel from 'react-bootstrap/Carousel';

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
// import Navbar from "../Nav";
// import { Navbar } from "../Navbar/Navbar";
import "./Corousel.css";
// import BackgroundImage from "./TopCorouselImage.jpg";
export const ControlledCarousel = () => {
  return (
    <div id='main-section'>
      {/* This is for the Navbar */}
      <div className="NavbarSection">
      <div className="logo">
        {/* Navbar Image logo Link [img][/img]
        data:image/png;base64,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
         */}  
        <h3 className="logo-text"><img src="https://i.imgur.com/aPC4hbS.jpg" alt="travelflap logo" /> 
          Travel Flap 
        </h3>
      </div>
      <input id="checkbox" type="checkbox" />
      <div id="bar">
        <label htmlFor="checkbox">
          <AiOutlineMenu className="bars" />
        </label>
      </div>
      <ul className="nav-ul">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>OFFERS</li>
        <li>NEWS</li>
        <li> CONTACT</li>

        <li id="searchBar"><AiOutlineSearch/></li>
      </ul>
    </div>

      {/* This is for the Carousel */}
      <div className='carousel-main' data-interval="false">
        {/* <Services /> */}
        <Carousel className='my-carousel' data-interval="false" slide={true}>
          <Carousel.Item>
            <img width={100} height={700}
              className="d-block w-100"
              src="https://i.imgur.com/JXeBLSy.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Discover</h1>
              <h2 className='bottomheading'>the world</h2>
              <div className="carouselbtn">Explore...</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img width={100} height={700}
              className="d-block w-100"
              src="https://i.imgur.com/JXeBLSy.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1>Discover</h1>
              <h2 className='bottomheading'>the world</h2>
              <div className="carouselbtn">Explore...</div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img width={100} height={700}
              className="d-block w-100"
              src="https://i.imgur.com/JXeBLSy.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1>Discover</h1>
              <h2 className='bottomheading'>the world</h2>
              <div className="carouselbtn">Explore...</div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* <Carousel.Item>
          <img width={100} height={700}
            className="d-block w-100"
            src="https://i.imgur.com/JXeBLSy.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Discover</h3>
            <h2 className='bottomheading'>the world</h2>
          </Carousel.Caption>
        </Carousel.Item> */}
          {/* <Services /> */}
        </Carousel>
        {/* <Services /> */}
      </div>

      <div className='services'>
      <div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAiCAYAAABWQVnHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAddJREFUeNrslr8vQ1EUx/ueNn5GylBpKEGIySARi1EiFiwWkyYSkTQG/4DFxCCYGCpdbYjB2MEiEomQlA6VCCHS0FSEqj7fk3xfcl23rcHYm3xy7zv3nPPOvbfve2s5juNR2+dO6BDdKKjy/G5ZMOYL3x67Bq/BaRikwbKSpAB6QAT4VWdTghsQAuPAos1RAt/LJRBnG9RpCaqVcckEfeAI65zQ9iaI7h7UqnbbkCCnO7G1miowJfAopZf1tYvsQc5gf2af+bEHWFsTj8tisOxLI+027V+gkzHtmLty7VYu2iYbEzS8Ma9s8htPRW9pL4Pj4EApVSpaB49gH8yDNXAu1QEfkAoXpQIpew7Htq0d2wl/VBEm8sMno/kk3E0MGMqrAQ2gi8/dWrAcq7fYMf65VRJUElQS/HOCJ8PcB3ilJkhLqZPQhjtRLVeyRvB9P/D7zzO4g7dRhD6z8Emir+ftJIoUEEXKMrCUJjpFpP5FltAPrqmFg2CSkxuglzfVgIgQtVPGq/SZsbGWFB0TGJ+CPU42Y5wEIuEXFNIYns/QL7l3hFvilggr1riiaN+uUmqBVUbhIy+bpv3Scv9gYCKKLsyJBbxpUxPRFnRS3RBPbQo+8W8BBgBRDoqlmPKLAQAAAABJRU5ErkJggg==" alt="" />
        <p>HOTELS</p>
      </div>
      <div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAATCAYAAAAao7T0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAArBJREFUeNrElktIlFEUx52vb2YwezBMWFFT2UsTQdpUmxa1EHoxi6KVCEb0wBZBCW5atAiLwDZFIWREFBHVokUvMSICQSgILGkRFb3ADKdpMGe0qf+J/5XD4ZvBBqULPw733Md37rnnnvOFcl2Ly1TbDZJgJhgGC8AMNf4FeGC+0mXBVxAH5Uo/xLFFIAR+gY/gMegGgzIp3PxhYoFPKRY9BUvLpr/tpbwBmsGIG/B48n4akuQp9nM8zr5DPPDc6NZz7jajfwDGjS4GcuANbyE1dilRo405B+YCUd6hfhZlJOBknumHjSw0T1qGe57gN8URAzAo7haIF/rA64CNomYzd0LdIv9gjDvkGpAGC9l/ohf0mEVpykGjz4Mxo/tGOWz02QBjUpTf1f6bQS28s0MC+DeoAit5aumv4OR14JPSixdmm7n1nFsL3it9jPpVypg5lEvUHi8ZW8dCeNop3t//bm/FMxW8s8sqHsZJ1MTIKPtRc3U5xozLSeKZo6Aa7DMfHWVKcbci7AINTtkLuqb4pElexcVikyTpIV7EoK0u6cWmwe0VAS/PtkYYsgdyOfjpF5no8Smmp9DAcl5lhv0E2MhvjXgFFrWzlsgTfAZWl/hxXdeuMfX/YHKV+teOa5JYOy4H902ukHYWtICbEuGglc8vwmCbbMuo3COloQGcZ/45zERbp3OUr4LNRXkLS8Qhjp0Bn1ltH03SEDF6A+Omg4Y0gSscfwjuyqNBzLyD3P43vSPPSPGbZzbbxI9P5ACwrIRryqssHzHZ23p5yGe29bgwzP+QThbOPD0khhwEVwvUnGLGJHjN18FO6jsppeIPMLbyfsBr2QLuMYCzTHDi0gslBvEr0AZO0hvOW6clboJ+rnS7D9aCI6AS3FInKbWdAi/AAXpfEuFtO+mPAAMAl1Sjj46bwD0AAAAASUVORK5CYII=" alt="" />
        <p>CAR RENTALS</p>
      </div>
      <div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAUCAYAAAAOTSQ2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAv9JREFUeNq8lntozWEYx3+7uCwbiyRtI2w0U3OXfySlJtcyYpOINSXlkpTLNvdCioYQo4jmVi4jaStRLrn8Rc0ik41oM5cxM/N56nvW6df5nXN2sr316fm973kv3/d53+d5T1Rra6sTqDSXpPTBnIZE+AMpMFg/34Yt8MgJUbosfedEWqK8xEngKsxBVRvgIfSFUWorh/XwNBJxzD8IMxUmQAK8hTLGVIQUpwmyMDfhJQxX81AogoWq34ICeByOOObMxmyGTI9ln0B2dBjetYVnQrq81xsqIUciL0CWjrgMRntsMhqWQZ3GmLDzMA36yXMZsBHG2EbD8ZzvcwZcg3pNUuvXLV2eyFH9BmyT4DhYDTvAnNEMW6EYrzZ4rFmFGdIecY48eFUCU6HO1T1Dxztf9bswSd+fTDCCioOslYs5ABaMm9orzso8KIUP8tiXAMNG6E7OhRrYgKgzXseNyYPtCjYr+fQ/Fok4R4tehPcKkq8ewwewSLXHvPGYtVCo4/5rm4AjjPlhfWIjTEGXYJyi0yJrCgTKGdUBRCVh1sEaNX22I4QTiGrx7xvrGphm6YVOlWEItMT8S3fvOoyHpiAnMExe8qWfVzruK0GTMAMzlUxz1f4A9mvRn64xi2CnHRk0KklfViJuCbDGRAVJlur3TCSiykO+EL9PJtsTtVj1sxADC/z6HIXjuluHIV7tlhr2Brlvlvl3wVjVbaMFiHoW9vOFOBNyDqoYmKYjSJSH8hV5vtKoozkUwKO+kqtITVXdNraHuasielsRs4TvEsthTDLbdVdGYlbAa1vEY56usFye6qW2fQbzfYz04Y/W+3dKRzYLMYWuPs8lLpCwRGX7JnmzmyIxQXc4YmFt4iRwpS52EQLzQoxLViav12WvVSKNUyB9d/5Dcee5nn65x10GwmS9ENPV9kKeK3U6oLS9EHgrCvMNeuh/mz3Q3aE/JLnGVei5qei0P5sItAjbDXP8vGoR+gbuwx3ZmnAX6JB/wgiNsefE4211OkPcPwEGAB8kDyxkzrO4AAAAAElFTkSuQmCC" alt="" />
        <p>FLIGHTS</p>
      </div>
      <div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAfCAYAAABplKSyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+JJREFUeNq0l31MlVUcx+9NkqGujYq5NhBraa2oLSsRV5bZLDfnBGNhwQI36w/H2lSmgP0hRa2VscqtWUt8AyvUFaQWNe0VFuBSKJShli+NhU6TXuUG9Pm1L+x0uZf7cC+d7bPz3POc5znf53d+L+f6BwYGfNG0QGWKl2kz4WW4F7pgM6yzG1cWnBmaFOeLrU2FNLgdkuB7qIfTkAfb4A/YAvkSNazFKmIa1OnaTOrX9XcSVwnLNJYLF0K95IoYRXwCv8sC9q5kKJKAnx0Bgx/c/3+IsDYfboWH4Sf5wFVwlzPHLNQHS2WxanwqaSxFNEAj7IcpGvsVzgbNmyu/eFdiuhGS8a/CMYiOfO39UXgE2j2+4j3IhpRYLVEgAdvhFo8C4uE2+FG/62OJjusV92vhRWd8EvwW5plNkKlwDugDvogLYean6G6CkySUjSOIWO34VRVcC1dDjiMiOcg3/BLwEO+uHxoM9glE9DkOexHuVmhly5Qn4EttRTGMh0uQ6CxkbRW8ZA4IL8Crliih13wHEbtHEmEPfQxPQ4e+MLhlKUnZwuc0thdmwTVOtrR2Xu/4HO7XR3QjImNYiLL4dHhd5kphkmW3B/TQCn7bFzYr630AfzsCfLo2i62UgGegRWnc8sh98Kes0TMsbbP4cro3NfYpvKMi00Z3o+bkamvmMd4fooBthSdgA7wCz8EEbdnjkABfwwx4/z8ieFmmBGzh5QURouEyVPDMIvpTQfe/glZ4G17TWIt6C0n7oDuVURvdB/29m5PNye6ROXdZrAdHBYuOZ6xX1+2DWwZ/RQhjs2KnileVeyO4lGdJ6WIohEOwkcWusxBjsvnBHH4XyVEDcrQH4cMIIrocK4ZtQ9HBIokKJ8sRCxVS1hYhpI77g2Fk6flbeBaOeUhq9lyFHDasJXxOvbccUQ3pcEDRUYuA5xUNj/FwzShOVp4KpXvzrJKRCbiZxeZp4cNQIsGHR5na49X3eBVxXGGWhIAOx1I1Sj6tjHeOUsRk9T+MNCnO2aM2lWW3NUEp9ybS74iiyKWpb456r2jrLeGw/zOirLQ5zpkzOhFYYJ9Oy3uiFJGnmuKLxRI+nR1TsUZZ0Hi6UnSD8scR2AmP6v4C9cWRFvB0vENAqWqBHV4+UpqfptudqpQJ8oE4pfdxOnEtC2Pl0Z22eaBcGXUNHFQJz9VZYjrMhjtUIc1Cn0lMQsxJJEwKfgtRSaoFgRDzmrSFC+WYdWMigu1IpfsGyhDwpEfR5pA3SEyJpzwRodUOWgNBhTK7l2Yb/wuU61DbFZUIFk1WUbM/NG9EEaY9OlcuseocasI/AgwAab8x/ype8iYAAAAASUVORK5CYII=" alt="" />
        <p>TRIPS</p>
      </div>
      <div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAUCAYAAADlep81AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoBJREFUeNq0lk1IVUEUx+/1K1+GVlBhGW5qUxDUQkIigshdCLVokRVCUCBBq8hcJJEfLaJFERT0gdnGoJXLaCcFRUULF0ERhRS56ZWpqfX6HfhfGKd73/c78OPgmXHmP3POnPvCTCYTJNnivc3mauEqbIQ1GpqDabgM75P+v7b7c1Co1eQxpw7ORBqjveRHswkqxqrymLMgf0XijL2KzQdltnwELXre7Ld8utyCwhw1dAPXCS0KTcuvc24vrYP5hwthCk5RSxMlC0LMKtxPWIIRbbBWG5t/ByuhHqphU8wyO2ESQdvLkbJO+dVwH5phBczCHngETYp9g10xdME2DtdeDkFH4ZdIeakw+5trcW7moV7haNEp4zS2+W2dzuw5zMB35xCWnh9OUVerT/lmxb9bL/MtfIU7CB0rpA8dk5iX8Am26oa2yH+RgHpnLIoFSmODs96kDmRzd0AHjBVyQx9xGzhFSrcVbTQj3+CkLVsstlOzpm3Yx9hgzhtisr2aVjin0Kwz3AM33Q2x03DLi12ES86a9iKPq/gtzX9gQJ+lqHXM6VBpP2VR3VyXP6CaCVVLfuyZYh3623jliLG0flAaI1uSH4i5oJPhwt2WVhWsXeUbPfNm1YjfiZu8mAlojJnXqHUm1FTb1beqtE+gm7J9n8I+OEgax2v0jTok5akKfKPa2OhFQvO9JjEnTExUQxfgiBR3w3qdMFPKJ0l9ajyLmCHcWTjPnJFlr4zBfhVjisF57/dQ0Zb0e4h1e3H2yoaZ0/tfpybYr2qfCipsiOmSmAe+mGV9iIn7cU+cYgsroCfUr87HiDmcszEiqk9PuK7EGkoSY2u+RkxP0qR/AgwA4kbPzKfE8BsAAAAASUVORK5CYII=" alt="" />
        <p>CRUISES</p>
      </div>
      <div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAy9JREFUeNq8l0tsTVEUhntpkxKlEc+oCPWKNh4Rb6MWNTAV0oiqR0zadGBSpIpSTBAiYtJ6RBoMJIKgNSCEqBioR1WpBGlD00Y8Si+9vtX8V3Zvbntue/Xu5Ms6Z51z9n/22muvs48vEAjEBZu/fHxcNC0h931YP/3OwNwAE3gKWdzbNCCunxvCgzGPYRDshJlQjT+p38VphRIey2hLsamQAttjIZ4F3xD+ral5K/+KWIi/hCFh/K/iYyC+D3KY4zPY/VAmf0m/j5ww12M2wXobLSyBVfhrYxF2ewEb7Vqdzuf8mh3ERFzto2xT0BFL8aGyw4KOcAlnmbkAkiAgemo2gD9gS+h5b94m3qlE1skp2BxFNfuAyWVOqyIW5yGruc8UGiuBpxUBn+ipBTR6K5slUEl/xbzAXk9xbkzEvoFfMBxaYQTU9baYIHiB/nZzvAfr5/yA13xV2mqAkRJ+B59gYB+XlYkfhlJeINVLfClk89BP7EWYYHUXOqJY19swNv9nHXeDbF2XOefmCt5yGYerLWGgKpo1RV+ZmB+wmONjGsgkXS7H12zWXWpW9p4o2aJtGfYJ1XF+yLVs2Xu+9rKUzmxl9IH/uZOhr6OYAnw+JxoW0TR8L9wKN70XIxoX4b0m1ujOhmxbaHndEWGHt6Eogjm36UyHk457jmyzK24JsY4HJnr0uUt2SwSF57rsIce3Ab4T8q//xDkpwNarNmd201ln4dBm4LNID7dZhPMcLrdPKH23O6V7NhwJV9utNN5VQliBuQNftDwynB1JkSJlW6MavfB9MBHbHi/SvTlW7Ryd47JdKp4vZN9uH/w8mAuJGuEtha8mZKD52qGkaRCW6pfhIMKNTp9jlHgn8Of1JO6VS2tUMC5F+tNAn1ayfVxL7vaT6tGmwSNnQ9AC8xT27jJ+lJ5Jdqpbr8UtWR6C7bun6oNjfyAPYHQY0cmajkJFyYpKQ1/FF+rtLaFey2c5UavO/cGlh3CC89w52Ipwm+dOpofWKjtLWR4Uj9Pc+xWdDt1bDVcRbYl4G+Xxx3ETKmCKwl4MV5SAnn+p0YhbW6kwBrdG5bAx2k/fXwEGAJUOBO3xFs2MAAAAAElFTkSuQmCC" alt="" />
        <p>ACTIVITIES</p>
      </div>
     
    </div>




      {/* <Services /> */}
    </div>

  );
}



