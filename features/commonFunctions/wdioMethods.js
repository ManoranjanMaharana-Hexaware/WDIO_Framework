class WDIOMethods {

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