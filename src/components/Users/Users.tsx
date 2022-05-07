import {FC, useEffect, useState} from "react";
import {IUser} from "../../interfaces";
import {userService} from "../../services";
import {User} from "../User/User";

const Users: FC = () => {
    let [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAll().then(value => value.data).then(users => setUsers(users))
    }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};