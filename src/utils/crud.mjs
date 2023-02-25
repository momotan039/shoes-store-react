const api="https://627a44364a5ef80e2c16e872.mockapi.io/shoes"
export let SHOES=[]

export async function getShoes(){
    const res=await fetch(api)
    if(!res.ok)
    {
        alert(res.statusText)
        return []
    }
    SHOES=await res.json()
    return SHOES
}

export async function DeleteShoe(id){
 
    const res=await fetch(api+'/'+id,{
        method:'Delete'
    })

    if(!res.ok)
    {
        alert(res.statusText)
        return 
    }

    SHOES=await res.json()
    return SHOES
}



export async function postShoe(game){
    const res=await fetch(api,{
        method:'POST',
        headers: {'content-type':'application/json'},
        body:JSON.stringify(game)
    })

    if(!res.ok)
    {
        alert(res.statusText)
        return 
    }

    SHOES=await res.json()
    return SHOES
}

export async function putShoe(game){
  
    const res=await fetch(api+'/'+game.id,{
        method:'PUT',
        headers: {'content-type':'application/json'},
        body:JSON.stringify(game)
    })

    if(!res.ok)
    {
        alert(res.statusText)
        return 
    }

    SHOES=await res.json()
    return SHOES
}
