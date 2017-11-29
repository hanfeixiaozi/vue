var router = new VueRouter({
    linkActiveClass:'active',
    routes:[
        {path:'/',component:home,
            children:[
                {path:'',component:homecon}
                ]
        },
        {path:'/info',component:info,
            children:[
                {path:'',component:list},
                {path:'/con/:id',component:con},

            ]
        },
        {path:'/login',component:login},
        {path:'/doc',component:doc,
            children:[
                {path:'',components:{left:leftD,right:rightD}}
            ]
        }

        ]

})