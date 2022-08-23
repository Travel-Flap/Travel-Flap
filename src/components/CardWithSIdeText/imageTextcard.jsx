

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import Image1 from "../Images/CardImage1";

import { Button } from "react-bootstrap"

export const ImageTexCards = () => {
  const theme = useTheme();

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-5'>
                <Card sx={{ display: 'flex' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://i.imgur.com/UFhBGVs.jpg"
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <h1>Lets start</h1>
                        <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                        <Button variant="light">Read More</Button>
                    </Box>
                </Card>
            {/* <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Lets start</h1>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://i.imgur.com/UFhBGVs.jpg"
        alt="Live from space album cover"
      />
            </Card> */}
            </div>

            <div className='col-md-5'>
                <Card sx={{ display: 'flex' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://i.imgur.com/M8VuC9e.jpg\"
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <h1>Lets start</h1>
                        <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                        <Button variant="light">Read More</Button>
                    </Box>
                </Card>
            </div>

            <div className='col-md-5'>
                <Card sx={{ display: 'flex' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://i.imgur.com/qsY14mH.jpg"
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <h1>Lets start</h1>
                        <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                        <Button variant="light">Read More</Button>
                    </Box>
                </Card>
            </div>

<br />
            <div className='col-md-5'>
                <Card sx={{ display: 'flex' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="https://i.imgur.com/ncFb2I4.png"
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <h1>Lets start</h1>
                        <p>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
                        <Button variant="light">Read More</Button>
                    </Box>
                </Card>
            </div>
            
        </div>
        
    </div>
    
  );
}

// import { Card, Button } from "react-bootstrap";

// export const ImageTexCards = () => {
//   return (
//     <div className="container">
//     <div className="row">
//     <div className="col-md-4">
//             <Card className="bg-dark text-white">
//                 <Card className="bg-dark text-white">
//                     <Card.Img src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/" alt="Card image" />
//                     <Card.ImgOverlay>
//                         <Card.Title>Card title</Card.Title>
//                         <Card.Text>
//                             This is a wider card with supporting text below as a natural lead-in
//                             to additional content. This content is a little bit longer.
//                         </Card.Text>
//                         <Card.Text>Last updated 3 mins ago</Card.Text>

//                         <Button variant="primary" size="lg">
//                             Large button
//                         </Button>{' '}
//                     </Card.ImgOverlay>
//                 </Card>
//             </Card>
//         </div>

//         <div className="col-md-4">
//             <Card className="bg-dark text-white">
//                 <Card className="bg-dark text-white">
//                     <Card.Img src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/" alt="Card image" />
//                     <Card.ImgOverlay>
//                         <Card.Title>Card title</Card.Title>
//                         <Card.Text>
//                             This is a wider card with supporting text below as a natural lead-in
//                             to additional content. This content is a little bit longer.
//                         </Card.Text>
//                         <Card.Text>Last updated 3 mins ago</Card.Text>

//                         <Button variant="primary" size="lg">
//                             Large button
//                         </Button>{' '}
//                     </Card.ImgOverlay>
//                 </Card>
//             </Card>
//         </div>

//         <div className="col-md-4">
//             <Card className="bg-dark text-white">
//                 <Card className="bg-dark text-white">
//                     <Card.Img src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/" alt="Card image" />
//                     <Card.ImgOverlay>
//                         <Card.Title>Card title</Card.Title>
//                         <Card.Text>
//                             This is a wider card with supporting text below as a natural lead-in
//                             to additional content. This content is a little bit longer.
//                         </Card.Text>
//                         <Card.Text>Last updated 3 mins ago</Card.Text>

//                         <Button variant="primary" size="lg">
//                             Large button
//                         </Button>{' '}
//                     </Card.ImgOverlay>
//                 </Card>
//             </Card>
//         </div>
    
//     </div>
// </div> 
//   );
// }

// export default GridExample;