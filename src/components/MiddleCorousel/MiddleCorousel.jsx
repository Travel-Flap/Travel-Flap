import Card from 'react-bootstrap/Card';
import { ControlledCarousel } from '../TopCorousel/Corousel';

export const MiddleCorousel = () => {
  return (
    <Card className="bg-dark text-white">
        {/* src="https://i.imgur.com/RemdYqk.png" */}
      <Card.Img className='backgroundimage' src="https://i.imgur.com/0G1gp92.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <ControlledCarousel />
      </Card.ImgOverlay>
    </Card>
  );
}

// export default ImgOverlayExample;