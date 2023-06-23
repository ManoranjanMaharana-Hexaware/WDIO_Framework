/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/


const pageObjects = {
    pageURL: "https://www.lv.com/",
    cookiesAccesptButton: $('#onetrust-accept-btn-handler'),
    bannerHeaderText: $('.headerBanner__category'),
    bannerBodyText: $('.headerBanner__body__headline'),
    links: [
        {
            linkText: "Car Insurance",
            tagType: $('//*[@id="40C80C71BCA548DD9229A9F1565CAC53-9BA4CCD08AD042998909E5B3C41E98E4/car-insurance"]/h3')
        },
        {
            linkText: "Life Insurance",
            tagType: $('//*[@id="8BE101ED75F741B2B9250A0566E5C6AC-9BA4CCD08AD042998909E5B3C41E98E4/life-insurance"]/h3')
        },
        {
            linkText: "Home Insurance",
            tagType: $('/html/body/div[1]/div[7]/div/section/div[1]/div/div/div[1]/div/a/h3')
        },
        {
            linkText: "Multi Cover Insurance",
            tagType: $('/html/body/div[1]/div[7]/div/section/div[1]/div/div/div[2]/div/a/h3')
        },
        { 
            linkText: "Pensions & Retirement",
            tagType: $('/html/body/div[1]/div[7]/div/section/div[1]/div/div/div[3]/div/a/h3')
        },
        { 
            linkText: "I'm a Financial Adviser",
            tagType: $('/html/body/div[1]/div[7]/div/section/div[1]/div/div/div[4]/div/a/h3')
        }
    ]
}


class LVHome {

    /* Opens lv.com of the page */

    getURL(){return pageObjects.pageURL}







    getComponent(componentName){
        return pageObjects[componentName]
    }



    async open () {
        await browser.maximizeWindow()
        return browser.url(pageObjects.pageURL)
    }

    /* Accepts cookies */
    async clickButton(buttonName){
        switch(buttonName){
            case "Accept Cookies":
                if(pageObjects.cookiesAccesptButton.isExisting())
                    pageObjects.cookiesAccesptButton.click()
            default:

        }
    }

    /* Validates banner header text */
    async validateBannerHeader(bannerHeaderText){
        await expect(pageObjects.bannerHeaderText).toHaveText(bannerHeaderText)
        console.log(bannerHeaderText + " --> Available")
    }

    /* Validates banner body text */
    async validateBannerBody(bannerBodyText){
        await expect(pageObjects.bannerBodyText).toHaveText(bannerBodyText)
        console.log("Contains the right box....")
    }

    /* Validates Link texts */
    async validateLinks(linkText){

        let linkTag = ""
        let linkList = pageObjects.links
        for(let i=0; i<linkList.length; i++){
            if(linkList[i].linkText == linkText){
                linkTag = linkList[i].tagType
                break
            }
        }

         
        if(linkTag !== ""){
            console.log(linkText + " ---->>>> " + await linkTag.getText())
            console.log("Contains the '"+linkText+"'....")
        }
        else{
            console.log("Doesnot Contains the '"+linkText+"'!!!!")
        }
        await expect(await linkTag).toHaveText(linkText)
    }

}

export default new LVHome();