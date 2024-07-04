function StorageBase(){

}
StorageBase.prototype.getItem = function(key){
    return localStorage.getItem(key);
}
StorageBase.prototype.setItem = function(key,value){
    return localStorage.setItem(key,value);         
}
const Storage = (function(){
    let instance = null;
    return {
        getInstance(){
            if(!instance){
                instance = new StorageBase();
            }
            return instance;
        }
    } 
})();