const orderTypesDict = {
    'PREDETERMINED' : "PREDETERMINED",
    'RANDOM' : "RANDOM",
    'REVERSED' : "REVERSED",
    'FIXED' : "FIXED",
    'DEFAULT_DEPTH_ORDER' : 'FIXED'
}

class OrderType{
    static exists(what){
        return(orderTypesDict.hasOwnProperty(what))
    }

    static get PREDETERMINED() {return orderTypesDict.PREDETERMINED}
    static get RANDOM() {return orderTypesDict.RANDOM}
    static get REVERSED() {return orderTypesDict.REVERSED}
    static get FIXED() {return orderTypesDict.FIXED}
    static get DEFAULT_DEPTH_ORDER() {return orderTypesDict.DEFAULT_DEPTH_ORDER}
}