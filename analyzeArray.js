function analyze(array){
    average=()=>{
        let sum = 0;
        array.forEach(element => {
            sum += element;
        });
        return sum/array.length;
    }

    min=()=>{
        let min = array[0];
        array.forEach(element=>{
            if (element < min) {
                min = element;
            }
        })
        return min;
    }

    max=()=>{
        let max = array[0];
        array.forEach(element=>{
            if (element > max) {
                max = element;
            }
        })
        return max;
    }

    lengthOfArray =()=>{
        return array.length
    }
    


    return{
        average,
        min,
        max,
        lengthOfArray,
    }
}


module.exports = analyze;