import {useEffect} from 'react'
import type { MemberEntity } from '../types/member'
import {useMemberCollection} from '../hooks/member'

const MemberEntity = () =>{
    // hooks思想 组件纯UI
    const {memberCollection,loadMoemberCollection} = useMemberCollection()
    
    useEffect(()=>{
            loadMoemberCollection()
        },[])


    return (
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>id</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {
                    memberCollection.map((member:MemberEntity)=>(
                        <tr key={member.id}>
                            <td>{member.avatar_url}</td>
                            <td>{member.login }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default MemberEntity