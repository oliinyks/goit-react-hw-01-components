import {Profile} from './Profile';
import user from './user.json';

export const ProfileData = () => {
  return (
<Profile avatar = {user.avatar}
 username = {user.username}
  tag = {user.tag}
  location = {user.location}
  followers = {user.stats.followers} 
  views = {user.stats.views}
  likes = {user.stats.likes}/>
  );
};