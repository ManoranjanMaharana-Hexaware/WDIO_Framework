/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/


const pageObjects = {
    pageURL: "https://www.lv.com/life",
    buttons:[
        { varName: "Accept Cookies", tagType: $('#onetrust-accept-btn-handler') }
    ],
    texts: [
        { varName: "Header Paragraph",tagType: $('//*[@id="headerBanner"]/div/div[2]/div/div/h2') },
        { varName: "Banner Body",tagType: $('.headerBanner__body__headline') }
    ],
    links: [
        { varName: "Car Insurance", tagType: $('//*[@id="40C80C71BCA548DD9229A9F1565CAC53-9BA4CCD08AD042998909E5B3C41E98E4/car-insurance"]/h3') },
        { varName: "Life Insurance", tagType: $('//*[@id="8BE101ED75F741B2B9250A0566E5C6AC-9BA4CCD08AD042998909E5B3C41E98E4/life-insurance"]/h3') },
        { varName: "Home Insurance", tagType: $('/html/body/div[1]/div[7]/div/section/div[1]/div/div/div[1]/div/a/h3') },
        { varName: "Multi Cover Insurance", tagType: $('/html/body/div[1]/div[7]/div/section/div[1]/div/div/div[2]/div/a/h3') },
        { varName: "Pensions & Retirement", tagType: $('/html/body/div[1]/div[7]/div/section/div[1]/div/div/div[3]/div/a/h3') },
        { varName: "I'm a Financial Adviser", tagType: $('/html/body/div[1]/div[7]/div/section/div[1]/div/div/div[4]/div/a/h3') }
    ]
}


class LVLife {

    // Fetch this web page URL
    getURL(){return pageObjects.pageURL}

    // Get the buttons tagType
    getButton(buttonName){
        return this.fetchPageObjectData(buttonName, "buttons")
    }

    // Get the text tagType
    getTextFromComponent(whereIsTheText){
        return this.fetchPageObjectData(whereIsTheText, "texts")
    }

    // Get the link tagType
    getLinks(link){
        return this.fetchPageObjectData(link, "links")
    }


    // Fetch object details based on the type of object
    fetchPageObjectData(displayedText, objectType){
        let linkTag = ""
        let obj = pageObjects[objectType]
        for(let i=0; i<obj.length; i++){
            if(obj[i].varName == displayedText){
                linkTag = obj[i].tagType
                break
            }
        }
        return linkTag
    }

}

export default new LVLife();