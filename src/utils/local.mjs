import AdminDashboard from "../components/admin/dashboard/AdminDashboard"

export const rootRefs={
    reCallData:undefined,
    currentUser:undefined,
    logOut:undefined
}

export const  Users=[
    {
        name:'Mohammed',
        isAdmin:true,
        inCart:[]
    },
    {
        name:'Tiam',
        isAdmin:false,
        inCart:[]
    }
]

export function isLogginUser(){
    const user=JSON.parse(localStorage.getItem('user'))
    return user
}

export function saveUserinLocalStoarge(user){
    localStorage.setItem('user',JSON.stringify(user))
}

