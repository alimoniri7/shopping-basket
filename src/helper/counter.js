export const counter = (basket , data) =>{
    
    let index = basket.space.findIndex(item => item.id === Number(data.id))

    if(index===-1){
        return false
    }else{
        return basket.space[index].count
    }
}