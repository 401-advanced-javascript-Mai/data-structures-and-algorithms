# data-structures-and-algorithms
## Insertion sort 
is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.

## Pseudocode  
```
InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```
## Trace
Sample Array: [8,4,23,42,16,15] ;


## pass 1 : 
intial array 
[8,4,23,42,16,15]
i = 1 , temp = 8 
return array 
[4,8,23,42,16,15]
In the first pass through of the insertion sort, we select the first unsorted element in index[1] and compare it with elemnt in the right , so swap the other element to the right to correct position and shift the unsorted element.

## pass 2 : 
intial array 
[4,8,23,42,16,15]
i = 2 , temp = 23 
return array
the same as previous
[4,8,23,42,16,15]
In the second pass through the array evaluates we selected the item in the index(2) and compare it with what in the right so it sorted 

### pass 3:
intial array 
[4,8,23,42,16,15]
i =3 , temp = 42
return array
the same as the intial
[4,8,23,42,16,15]
In the third  pass through the array evaluates we selected the item in the index(3) and compare it with what in the right so it sorted.


### pass 4:
intial array 
[4,8,23,42,16,15]
i =4 , temp = 16
return array
the same as the intial
[4,8,16,23,42,15]
In the third  pass through the array evaluates we selected the item in the index(4) and compare it with what in the right so it sorted 

### pass 5:
intial array 
[4,8,16,23,42,15]
i =5 , temp = 15
return array
the same as the intial
[4,8,15,16,23,42]
In the third  pass through the array evaluates we selected the item in the index(5) and compare it with what in the right so it sorted 


## Efficency
Time: O(n^2)
Space: O(1)

