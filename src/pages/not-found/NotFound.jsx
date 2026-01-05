import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh', textAlign: 'center' }}>
            <h1>404 - Page Not Found</h1>
            <Link to="/" style={{ color: '#667eea', marginTop: '1rem' }}>Go Back Home</Link>
        </div>
    );
};

export default NotFound;




