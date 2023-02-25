import AdminDashboard from "../components/admin/dashboard/AdminDashboard"

export const rootRefs={
    reCallData:undefined,
    currentUser:undefined,
    logOut:undefined
}

export const  Users=[
    {
        name:'Mohammed',
        isAdmin:true
    },
    {
        name:'Tiam',
        isAdmin:false
    }
]

export function isLogginUser(){
    const user=JSON.parse(localStorage.getItem('user'))
    return user
}
