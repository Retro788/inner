import React from 'react';
import { Link } from '../general';
import { useNavigate } from 'react-router';

import forhire from '../../assets/pictures/forHireGif.gif';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact');
    };

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>Fernando San Gabriel</h1>
                <h2>Ingeniero en Software y Mecatrónica</h2>
            </div>
            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="about" text="ACERCA DE MI" />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text="EXPERIENCIA"
                />
                <Link
                    containerStyle={styles.link}
                    to="projects"
                    text="PROYECTOS"
                />
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text="CONTACTO"
                />
            </div>
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                {/* <img src={forhire} alt="" /> */}
            </div>
            <Link containerStyle={styles.blogLink} to="https://hop.io" text="Blog" />
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    image: {
        width: 800,
    },
    link: {
        padding: 16,
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
    blogLink: {
        marginTop: 32,
        textAlign: 'center',
        textDecoration: 'underline',
        cursor: 'pointer',
    },
};

export default Home;