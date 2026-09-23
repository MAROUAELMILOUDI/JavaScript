function sélectionSort(arr){
    for(i=0; i<arr.length; i++){
        let min = i
         for(j=i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min=j
                
            }
    
        }
        temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    return arr
}
let unsortedarr=[5,3,8,7,1]
console.log(unsortedarr);

let sortedarr = sélectionSort(unsortedarr)

console.log(sortedarr);