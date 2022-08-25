export const shorter = (text , step) => {
    let temp = text.split(' ')
    let newText

    for(let i=0 ; i<step ; i++){
        newText += temp[i] +' '
    }

    newText+='...'



    return newText
}