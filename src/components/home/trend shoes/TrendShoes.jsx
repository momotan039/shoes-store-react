import Shoe from '../../shoe/Shoe'
import './TrendShoes.css'
export default function TrendShoes({shoes}) {
    const getRandomShoes=(len)=>{
        const selectedShoes=[]
        while(len>0){
            const n=Math.floor(Math.random()*shoes.length)
            const shoe=shoes[n]
            if(!selectedShoes.includes(shoe))
            {
                selectedShoes.push(shoe)
                len--
            }
        }
        debugger
        return selectedShoes
    }

  return (
    <>
        <h1>Trend Shoes</h1>
        <div className="trend-shoes">
        {
            getRandomShoes(3).map((s,i)=>{
               return <Shoe key={i} data={s} />
            })
        }
    </div>
    </>
  )
}
