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
    // return await new Promise((res,rej)=>{
    //     setTimeout(() => {
    //         const g=GAMES.find(f=>f.id===game.id)
    //         if(!g)
    //         {
    //             rej('not found game')
    //             return
    //         }
    //         g.price=game.price
    //         g.backGround=game.backGround
    //         g.title=game.title
    //         g.type=game.type
    //         g.year=game.year
    //         res(GAMES)
    //     }, 2000);
    // })
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
