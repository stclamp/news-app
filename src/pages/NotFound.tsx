import { Link } from 'react-router-dom';
import Container from '@/components/container/Container';

import notFound from '@/assets/images/not_found.png';
import '@/assets/styles/_global.scss';

const NotFound = () => (
  <Container>
    <img src={notFound} alt="404" className="not-found-image" />
    <Link to="/" className="not-found-link">
      Go back
    </Link>
  </Container>
);
export default NotFound;
