main = function () {
    var PS = new ParseString({ a: 'awef', b: ['awefeea'], c: ['233rw'] }, true);
    var selector = 'e';
    var count = PS.charCount(selector);
    var most = PS.mostOccurChar();
    var least = PS.leastOccurChar();

    console.log('Most Occured Char: ' + most);
    console.log('Least Occured Char: ' + least);
    console.log('There were ' + count +' instances for char: ' + selector);
}

function ParseString(parseElement, caseSensitive) {
    this.caseSensitive = typeof caseSensitive === undefined ? false : true;
    this.parseElement = typeof parseElement === undefined ? "" : parseElement;

    //Recursion Function
    this.stringParser = function (parseElement) {

        //STRING
        if ((typeof parseElement).localeCompare("string") == 0) {
            if (this.caseSensitive && parseElement.length > 0) {
                return parseElement.toLowerCase();
            }
            return parseElement;
        }
        //OBJECT
        else if ((typeof parseElement).localeCompare("object") == 0) {
            var parseString = "";
            //Object is Array
            if (Object.prototype.toString.call(parseElement) === '[object Array]') {
                var i;
                for (i = 0; i < parseElement.length; i++) {
                    //Recursion
                    parseString += this.stringParser(parseElement[i]);
                }
            }
            //Object is Object
            else {
                for (var property in parseElement) {
                    if (parseElement.hasOwnProperty(property)) {
                        //Recursion
                        parseString += this.stringParser(parseElement[property]);
                    }
                }
            }
            return parseString;
        }
        else {
            //OTHER *DATATYPE
            return this.stringParser(parseElement.toString());
        }
    }

    //Global scope for stringified version of parseElement.
    this.parsedString;

    //Initalizes maxChar and leastChar
    this.charExtremes = function () {
        this.parsedString = this.parsedString.length == undefined ? this.stringParser(this.parseElement) : this.parsedString;
        if (this.parsedString.length === 1) {
            return this.parsedString;
        }
        var charArr = this.parsedString.split('').sort();
        console.log(charArr);
        var i;
        var maxCount = 0; var maxChar = '';
        var minCount = this.parsedString.length; var minChar = '';
        var tempCount = 0; var tempChar = this.parsedString.charAt(0);

        for (i = 0; i < this.parsedString.length; i++) {
            if (this.parsedString.charAt(i) === tempChar) {
                //console.log(this.parsedString.charAt(i) + ' ' + tempChar);
                tempCount++;
            }
            else {
                if (tempCount > maxCount) {
                    maxCount = tempCount;
                    maxChar = tempChar;
                }
                if (tempCount <= minCount) {
                    minCount = tempCount;
                    minChar = tempChar;
                }
                tempChar = this.parsedString.charAt(i);
                tempCount = 0;
                i--;
            }
        }
        this.maxChar = maxChar;
        this.minChar = minChar;
    }

    //Returns the count of a given char.
    ParseString.prototype.charCount = function (char) {
        this.parsedString = this.parsedString == undefined ? this.stringParser(this.parseElement) : this.parsedString;
        var count = 0; var i;
        for (i = 0; i < this.parsedString.length; i++) {
            if (this.parsedString.charAt(i) === char) {
                count++;
            }
        }
        return count;
    }

    //Returns the last instance of the most occured char.
    this.maxChar;
    ParseString.prototype.mostOccurChar = function () {
        if (this.maxChar == undefined) {
            this.charExtremes();
            return this.maxChar;
        }
        return this.maxChar;
    }
    //Returns the last instance of the least occured char.
    this.minChar;
    ParseString.prototype.leastOccurChar = function () {
        if (this.maxChar == undefined) {
            this.charExtremes();
            return this.minChar;
        }
        return this.minChar;
    }
}