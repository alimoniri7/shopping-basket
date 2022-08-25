export const shorter = (text) => {
    let temp = text.split(' ')
    let newText = temp[0] + ' ' + temp[1]
    return newText
}