const debounce = (callFn, delay) => {
    let timerId
    // let args = arguments
    return function(args){
        if(timerId){
            clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
            callFn.call(this, args)
        }, delay)
    }

}

export {
    debounce
}