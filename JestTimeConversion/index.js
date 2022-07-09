function Time_Conversion(time){

    if(time<=1000){
        return `${time/1000} Second`  
    }
    if(time>1000&&time<6000){
        let temp=Math.floor(time/1000)
        return `${temp} Seconds`  
    }
    if(time>=60000&&time<3600000){
        let x=time/60000
        let temp=Math.floor(time/60000)
        let seconds=temp-x
        if(temp==1){
            if(seconds==0){
                return `${temp} minute`
            }
            return `${temp} minute ${seconds} seconds`  
        }
        else{
            if(seconds==0){
                return `${temp} minutes`
            }
            return `${temp} minutes ${seconds} seconds`  
        }
    }
    if(time>=3600000 ){
        if(time==3600000){
            return `1 hour`
        }
        let x=time/3600000
        let temp=Math.floor(time/3600000)
        let minutes=temp-x
        let y=Math.floor(minutes/60000)
        let seconds=minutes-y
        if(temp==1){
            if(seconds==0){
                return `${temp} hour`
            }
            return `${temp} minute ${minutes} minutes ${seconds} seconds`  
        }
        else{
            if(seconds==0){
                return `${temp} hours`
            }
            return `${temp} minutes ${minutes} minutes ${seconds} seconds`  
        }
    }
    
    
}

module.exports =Time_Conversion