const SEPERATER = ' '

class DepthNodeBoss extends DepthNode
{
    constructor(str) {

        super()

        this.active = true
        if(str=="") this.active=false;
        else{
            let commands = str.split(SEPERATER);
            let arr = null
            let depths = null
            let value = null

            for (let i=0;i<commands.length;i++){
                arr=commands[i].split("=")
                if(arr.length!=2)throw "you have specified a trial depth wrong:"+commands[i]+". Must be of the format 10=random or 10.1=random or *.1=random or 10.*=random."
                depths = arr[0].split(",")
                value  = arr[1]
                this.init(depths, value)
            }
        }
    }

    retrieve(str){
        if(active)	return this.__retrieve(str.split(" "));
        else return DepthNode.UNKNOWN;
    }

    IsWildCard(str)
    {
        if(active)	return this.__isWildCard(str.split(" "));
        return true;
    }

}