var mrPeng = {
    name:'彭于晏',
    age:18,
    health:100,
    srx:"boy",
    drink: function(){
        console.log('I am drking');
        mrPeng.health++
    },
    smoke:function(){
        console.log('I am somking');
        this.health--
    }
}

// console.log(mrPeng.name);
// mrPeng.like='章若楠'//增
// var abc='like'
// mrPeng.abc='liuyifei'
// mrPeng['abc']='cy'//改
// delete mrPeng.srx//删
mrPeng.smoke()
mrPeng.smoke()
mrPeng.drink()
console.log(mrPeng)