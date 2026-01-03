import axios from "axios";

export const postUserInfo = async (user) => {
       const userInfo = {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
       };

       const res = await axios.post('https://future-box-server-pi.vercel.app/setUserData',userInfo);
       return res.data
    }