export const getCatWiseData = (data=[]) =>{
    let total = []
  data.length && data.forEach(value=> 
    total.push(...Object.values(value))
    )
return total;
}