import AdminDashboard from "../components/admin/dashboard/AdminDashboard"

export const rootRefs={
    reCallData:undefined,
    currentUser:undefined,
    logOut:undefined,
}

export const POPUP={
    setShow:undefined,
    setMessage:undefined,
    setShowIcon:undefined,
    setShowComplete:undefined,
    clickedComplete:false,
    show:async function (option){
        this.option=option
        this.setShow(true)
        this.setMessage(option.message)
        this.setShowIcon(option.showIcon)
        this.setShowComplete(option.showComplete)
    },
    complete:function(){
        POPUP.setShow(false)
        POPUP.clickedComplete=true
        debugger
        POPUP.option.onComplete()
    }
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


export const isALLFilled=(formData)=>{
    if(!formData.name)
    return false
    if(!formData.price)
    return false
    if(!formData.description)
    return false
    if(!formData.image)
    return false
    return true
  }



export function isLogginUser(){
    const user=JSON.parse(localStorage.getItem('user'))
    return user
}

export function saveUserinLocalStoarge(user){
    localStorage.setItem('user',JSON.stringify(user))
}

