import {UserProfile} from './user-profile.model';

export class UserService{
    private userdetail : UserProfile;


    


    setUserProfile(user : UserProfile){
        this.userdetail=user;
    }

    getUserProfile(){
        return this.userdetail;
    }
}