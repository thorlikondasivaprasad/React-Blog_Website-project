import {Link } from 'react-router-dom';

const NotFound = () => {
    return (

        <div className="NotFound">
        <h2>Sorry..👎</h2>
        <p>That page is not Available or found </p>
        <br />

        <Link to='/'>Back to Home Page...🏡</Link>
        </div>
    );
}
 
export default NotFound;