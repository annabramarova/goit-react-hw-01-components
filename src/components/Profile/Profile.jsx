import PropTypes from 'prop-types';
import css from './Profile.module.css';


export const Profile = ({avatar, username, location, tag, stats}) => (
    <div className="css.profile">
        <div className="css.description">
            <img
                src={avatar}
                alt="User avatar"
                className="css.avatar"
            />
            <p className="css.name">{username}</p>
            <p className="css.tag">{tag}</p>
            <p className="css.location">{location}</p>
        </div>

        <ul className="css.stats">
            <li>
                <span className="css.label">Followers</span>
                <span className="css.quantity">1000</span>
            </li>
            <li>
                <span className="css.label">Views</span>
                <span className="css.quantity">2000</span>
            </li>
            <li>
                <span className="css.label">Likes</span>
                <span className="css.quantity">3000</span>
            </li>
        </ul>
    </div>);

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired

}