// var pass = prompt('Enter the Password to open the encoder')

// if (pass == 19038) { 

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
            document.querySelector('.output').textContent = 'Nothing to decode or incode!'
        } else {
            document.querySelector('.output').textContent = process(input)
        }
    }
    
    function reload () {
        document.querySelector('.user-text').value = ''
        document.querySelector('.output').textContent = ''
    }
    
    document.querySelector('.enter').addEventListener('click', getOutput)
    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            getOutput()
        }
    })
    
    document.querySelector('.svg-icon').addEventListener('click', reload)
    
    // } else {
    //     document.querySelector('.output-text').textContent = 'You have entered wrong password, This encoder will not work. Refresh the page to enter the Password again'
    // }