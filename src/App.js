import 'swiper/swiper.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NavRoutes from './config/Routes';

function App() {
    return (  
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props}/>
                    <NavRoutes/> 
                    <Footer/>
                </>
            )}/>
        </BrowserRouter>

    );
}

export default App;