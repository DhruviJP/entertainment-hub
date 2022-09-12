import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiFireZone } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { GiTv } from "react-icons/gi";
import { HiSearch } from "react-icons/hi";
import { GiFilmProjector } from "react-icons/gi";

const styles = ({
    Navbar: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
    },
});

function MainNav() {
    return (
        <>
            <Navbar style={styles.Navbar}>
                <Container>
                    <Nav className="m-auto">
                        <NavLink to="/" className='text-center mx-3'
                            style={{ color: 'white' }}
                        ><GiFireZone /> <span className='d-block'>Trending</span></NavLink>
                        <NavLink to="movies" className='text-center mx-3'
                            style={{ color: 'white' }}><GiFilmProjector /><span className='d-block'>Movies</span></NavLink>
                        <NavLink to="series" className='text-center mx-3'
                            style={{ color: 'white' }}><GiTv /><span className='d-block'>TV Series</span></NavLink>
                        <NavLink to="search" className='text-center mx-3'
                            style={{ color: 'white' }}><HiSearch /><span className='d-block'>Search</span></NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MainNav;