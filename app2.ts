import axios from "axios";
import {IUser} from "./interfaces";
import {userService} from "./services";
import {MyEnum} from "./enums";

const getAllUsers = async () => {
    let {data: users} = await userService.getAll();
    for (const user of users) {
        console.log(user.name)
    }

}

getAllUsers()

console.log(MyEnum.ADD);