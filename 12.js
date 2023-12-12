const maxProduct=arr=>{
    let max=-Infinity
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if((arr[i]-1)*(arr[j]-1)>max)max=(arr[i]-1)*(arr[j]-1)
        }
    }
    return max
}
