import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Job <span>tracking</span>app</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt quaerat maxime dolorum labore omnis sed expedita repellat ipsa
                        tempora? Facere?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos magni minima facere inventore cupiditate molestiae aspernatur assumenda voluptatibus doloremque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vero nemo voluptatum saepe consequuntur nesciunt. Enim incidunt impedit, veritatis dolore facere repudiandae nemo, consequatur qui illo libero nulla voluptas ipsum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptates!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, nobis?
                    </p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt='job hunt' className="img main-img" />
            </div>
        </Wrapper>
    )
}
export default Landing;