var save={
    install(vue,parames){
        vue.prototype.save=function (attr,val) {
            sessionStorage[attr]=JSON.stringify(val)
        }
        vue.prototype.del=function (attr,val) {
            sessionStorage.removeItem(attr)
        }
        vue.prototype.get=function (attr,attr1) {
            if(attr){
                return sessionStorage[attr]?JSON.parse(sessionStorage[attr])[attr1]:'';
            }else {
                return sessionStorage[attr]
            }
        }
    }
}