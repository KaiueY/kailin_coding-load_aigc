import type { MemberEntity } from "../types/member";
import Axios,{AxiosResponse} from 'axios'


const githubURL = 'http://api.github.com'
const githubMembersUrl = `${githubURL}/orgs/lemoncode/members`

export const getMembersCollection = ():Promise<MemberEntity[]> =>{
    const promise = new Promise<MemberEntity[]>((resolve,reject) =>{
        try {
            Axios.get(githubMembersUrl).then(response =>{
                resolve(mapMemberListApiToModel(response))
            })
        } catch (ex) {
            reject(ex)
        }
    })

    return promise
}

const mapMemberListApiToModel = ({data}:AxiosResponse<any[]>):MemberEntity[] =>{
    return data.map(githubMember=>({
       
            id:githubMember.id,
            login:githubMember.login,
            avatar_url:githubMember.avatar_url
        
    }))
}