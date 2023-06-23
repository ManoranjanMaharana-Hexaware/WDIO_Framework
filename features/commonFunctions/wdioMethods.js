class WDIOMethods {

    async open (url) {
        await browser.maximizeWindow()
        return browser.url(url)
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

export default new WDIOMethods();