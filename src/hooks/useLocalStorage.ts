


export default {
        getValue:(value:string)=>{
            const valueStorage = localStorage.getItem(value);
           if (valueStorage !== null) {
                try {
                    const valueParsed = JSON.parse(valueStorage);
                    return valueParsed;
                } catch (error) {
                    console.log(`a chave ${value} não foi encontrada`)
                    return null; 
                }
            }
        
            return null; 
        },
        setValue:(key:string,value:any)=>{
            localStorage.setItem(key,JSON.stringify(value))
        },
        clearStorage:()=>{
            localStorage.clear()
        }
    

}