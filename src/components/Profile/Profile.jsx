import PropTypes from 'prop-types'
import css from 'components/Profile/Profile.module.css'

export const Profile = (user) => {
    const { username, tag, location, avatar, stats } = user;
    
    return <div className={css.profile}>
  <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span className={css.statsLabel}>Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.statsLabel}>Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.statsLabel}>Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
} 

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}


