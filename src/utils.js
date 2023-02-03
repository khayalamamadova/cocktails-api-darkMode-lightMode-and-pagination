const paginate = (drinks) => {
    // console.log(drinks);
    const itemsPerPage = 6;
    const pages = Math.round(drinks.length / itemsPerPage);

    const newDrinks = Array.from({length:pages},(_,index)=>{
        const start = index * itemsPerPage
        return drinks.slice(start,start + itemsPerPage)
    })
    return newDrinks

}
export default paginate;