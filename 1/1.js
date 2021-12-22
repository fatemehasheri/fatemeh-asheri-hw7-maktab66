class NetWorkClass {
    constructor(className,classUnit,classCapacity,project) {
        if(project) {
            console.log(`{className:${className},classUnit:${classUnit},classCapacity:${classCapacity},project:${project}}`);
        }else {
            console.log(`{className:${className},classUnit:${classUnit},classCapacity:${classCapacity}}`);
        }
    }
}

class SoftEngineeringClass {
    constructor(className,classUnit,classCapacity,book) {
        if(book){
            console.log(`{className:${className},classUnit:${classUnit},classCapacity:${classCapacity},book:${book}}`);
        }else {
            console.log(`{className:${className},classUnit:${classUnit},classCapacity:${classCapacity}}`);
        }
    }
}

const netWork = new NetWorkClass("netWork",3,30,true);
const softEngineering = new SoftEngineeringClass("softEngineering",3,50,"math")

