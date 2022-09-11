import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import css from "components/Friends/Friends.module.css";


export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {
                friends.map(friend => (
                    <li key={friend.id} className={css.friendListItem}>
                        <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                ))
            }
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
)}