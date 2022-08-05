/**
 * @name DevClasses
 * @version 0.0.1
 * @description With this plugin you can display the classes of objects you click on.
 * @author CODEALI#1093
 */



 module.exports = class Example{

    load(){
        BdApi.setData("DevClasses", "Enabled", false)
    }

    start(){
        document.addEventListener("click", this.link)
        if(BdApi.loadData("DevClasses", "Enabled") == true){
            BdApi.alert("DevClasses", "Currently Enabled!")
        }else{
            BdApi.alert("DevClasses", "Currently Disabled!")
        }
        let keysPressed = {};
        document.addEventListener('keydown', (event) => {
        keysPressed[event.key] = true;
        if (keysPressed['Control'] && event.key === '.') {
            if(BdApi.loadData("DevClasses", "Enabled") == true){
                BdApi.setData("DevClasses", "Enabled", false)
                BdApi.showToast("DevClasses: Disabled!")
            }else{
                BdApi.setData("DevClasses", "Enabled", true)
                BdApi.showToast("DevClasses: Enabled!")
            }
        }
        });
        document.addEventListener('keyup', (event) => {
        delete keysPressed[event.key];
        });
    }

    stop(){
        document.removeEventListener("click", this.link)
    }

    link(event) {
        if(BdApi.loadData("DevClasses", "Enabled") == true){
            let elementClass = event.target.className;
            if (elementClass !== '') {
                BdApi.showToast("You Clicked: "+elementClass);
            }
        }
    }
}