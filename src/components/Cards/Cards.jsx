import React from 'react';
import { Card, Button } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import './Cards.css';


export const DataCards = () => {
    return (
        <>
        {/* <button className="btn btn-danger">Danger Button</button> */}

        <h2 className='top-heading text-center text-success '>We have the best tours</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
         <div className="container">
            <div className="row">
            <div className="col-md-4">
                    <Card className="bg-dark text-white">
                        <Card className="bg-dark text-white">
                            <Card.Img src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>

                                <Button variant="primary" size="lg">
                                    Large button
                                </Button>{' '}
                            </Card.ImgOverlay>
                        </Card>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className="bg-dark text-white">
                        <Card className="bg-dark text-white">
                            <Card.Img src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>

                                <Button variant="primary" size="lg">
                                    Large button
                                </Button>{' '}
                            </Card.ImgOverlay>
                        </Card>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className="bg-dark text-white">
                        <Card className="bg-dark text-white">
                            <Card.Img src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>

                                <Button variant="primary" size="lg">
                                    Large button
                                </Button>{' '}
                            </Card.ImgOverlay>
                        </Card>
                    </Card>
                </div>
            
            </div>
        </div> 
        
        </>
    );
}

// export default DataCards;