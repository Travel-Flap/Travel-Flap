
import { Card, Button } from "react-bootstrap";

export const ImageTexCards = () => {
  return (
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
  );
}

// export default GridExample;