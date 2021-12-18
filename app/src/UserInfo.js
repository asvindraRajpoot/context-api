import { useContext } from 'react';
import { UserContext } from './UserContext';
export default function UserInfo() {
  let {data}=useContext(UserContext);
  return (
    <div className="user-info">
      <img
        className="user-avatar"
        src={data.avatarURL}
        width="50"
        height="50"
        alt="User Avatar"
      />
      <p>{data.name}</p>
    </div>
  );
}
