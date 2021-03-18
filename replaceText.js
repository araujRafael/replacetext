
function cleanTextToConvert(){

    this.textClient = document.querySelector("#inputText").value;
    
    this.cleanQuote = this.textClient.replace("'","")

    this.normalize = cleanQuote.normalize('NFD').replace( /[\u0021-\u0040,\u005B-\u0060,\u007B-\u02B8,\u0300-\u036f]/g ,'');

     return this.normalizeSplited = normalize.split(' ')

}

function convertHashTag(){  
    
    if(this.textClient == ''){

        return ''

    }else{

    this.firstHash = normalizeSplited

    this.HashInputed = firstHash.unshift("#")
    
    this.replacedToHash = firstHash.join(" #")

    this.phraseLenght = replacedToHash.length
    
    return this.showMe = replacedToHash.substr(2,phraseLenght)

    }
    

}

function tagBtn() {   

    document.querySelector("#textConverted").innerHTML = cleanTextToConvert()
    
}


function hashTagBtn (){

    cleanTextToConvert()

    document.querySelector("#textConverted").innerHTML = convertHashTag()

    console.log(this.textClient);
    console.log(cleanTextToConvert())
    console.log(convertHashTag());

}

