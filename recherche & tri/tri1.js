function bubbleSort(arr){
    for(i=0; i<arr.length; i++){
        for(j=0; j<(arr.length-i-1); j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log(arr)
}
let arr=[10,4,7,12,9]
bubbleSort(arr)