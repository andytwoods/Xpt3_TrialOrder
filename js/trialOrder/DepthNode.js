const UNKNOWN = 'unknown'
const WILDCARD = '*'


class DepthNode
{
    constructor() {
        this.value = null
        this.children = {}
    }

    static get UNKNOWN(){return UNKNOWN}
    static get WILDCARD(){return WILDCARD}

    init(depths,value){
        if(depths.length==0 || value==''){
            throw "devel err";
        }

        let depth = depths.shift()

        if(children[depth]==null) children[depth] = new DepthNode()

        if (depths.length == 0) {
            children[depth].value = clean(value.toUpperCase())
        }

        if(depths.length>0)	children[depth].init(depths,value)

    }


    __retrieve(depths){

    if(depths.length==0){
        if(value != null)	return value
        else return UNKNOWN
    }

    let depth = depths.shift()

    if(children[depth] !=null)return children[depth].__retrieve(depths)

    if(depths.length==0 && children[WILDCARD]!=null)return children[WILDCARD].value

    if (children[WILDCARD] != null)	return children[WILDCARD].__retrieve(depths)

    return UNKNOWN
}

    __isWildCard(depths) {
    if(depths.length==0){
        return false;
    }

    let depth = depths.shift()

    if(children[depth]!=null)return children[depth].__isWildCard(depths)

    if(depths.length==0 && children[WILDCARD] !=null)return true

    if(children[WILDCARD]!=null)return children[WILDCARD].__isWildCard(depths)

    return false;
}


    kill(){
    for (let child in children){
        child.kill();
        child=null;
    }
    children = null;
}

     clean(value) {
        if(Type.getClassFields(OrderType).indexOf(value)!=-1) return value;
        else {

            let split = value.split(",");

            for (let str in split) {

                if(parseInt(str) == null)throw "you have specified an unknown type of trial ordering (you must numerically specify prespecified trial orderings, seperated by commas): "+value;
            }
            throw "not implemented below";
            return OrderType.PREDETERMINED+value;
        }
        throw "you have specified an unknown type of trial ordering: "+value;
        return '';
    }

    __combinedKinderCount() {
    let i=0;

    for(let childKey in this.children){
        let child = this.children[childKey]
        i+=child.__combinedKinderCount();
    }


    return i+this.__kinderCount();
}

    __kinderCount() {
        let i = 0;
        for (let child in this.children) {
            i++;
        }
        return i;
    }
}