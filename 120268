getAccess()
function checkAccess () {
    let access = sessionStorage.getItem('access')
    return access
}
console.log(checkAccess())

function getAccess () {
    if (checkAccess()) {
        access()
    } else {
        var password = prompt('Enter the Password to access the encoder')
        if (password == 190118) {
            sessionStorage.setItem('access', true)
            access()
        } else {
            getAccess()
        }
    }    
}


    
function access () {
    reload()
    var mainCpt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var mainSml = mainCpt.toLowerCase()
    
    
    var revCpt = "ECBFADJLIGMHKNUQPWTSOZRXYV" //ECBFADJLIGMHKNUQPWTSOZRXYV
    var revSml = revCpt.toLowerCase()
    
    
    
    function process (text) {
        var processedStr, processedText, index
        processedText = ''
        for (let items of text) {
            if (mainCpt.includes(items)) {
                index = mainCpt.indexOf(items)
                processedStr = revCpt[index]
            } else if (mainSml.includes(items)) {
                index = mainSml.indexOf(items)
                processedStr = revSml[index]
            } else {
                processedStr = items
            }
            processedText += processedStr
        }
        return processedText
    }
    
    
    function getOutput () {
        var input = document.querySelector('.user-text').value
    
        if (input === '') {
            document.querySelector('.output').value = 'Nothing to decode or encode!'
        } else {
            document.querySelector('.output').value = process(input)
        }
        
        var copyText = document.querySelector('.output')
        copyText.select()
        document.execCommand('copy')
    }
    
    function reload () {
        document.querySelector('.user-text').value = ''
        document.querySelector('.output').value = ''
    }
    
    document.querySelector('.enter').addEventListener('click', getOutput)
    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault()
            getOutput()
        }
    })
    
    document.querySelector('.svg-icon').addEventListener('click', reload)

}
