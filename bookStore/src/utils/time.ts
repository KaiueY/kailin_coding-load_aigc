import { showToast } from "vant";

export const getTime = (username:string) =>{
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    showToast(`欢迎回来${username}`)
    return ` ${year}年${month}月${day}日\n${hours}:${minutes}`;
}