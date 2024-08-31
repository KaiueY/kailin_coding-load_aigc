
interface ApiResponse<T> {
    data :T
    status:number 
    message : string
}

function fetchData<T>(url:string):Promise<ApiResponse<T>>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            const mockData = {data:null,status:200,message:'success'}
            resolve(mockData as ApiResponse<T>)
        },1000)
        a
    })
}