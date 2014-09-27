({
    block : 'page',
    title : 'Yeoman BEM',
    favicon : 'favicon.ico',
    head : [{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1.0' }}],
    styles : [{ elem : 'css', url : 'assets/application.min.css' }],
    scripts : [{ elem : 'js', url : 'assets/application.min.js' }],
    content : [
        {
            elem : 'header',
            tag : 'header',
            content : [

            ]
        },
        {
            elem : 'content',
            tag : 'main',
            content : [
                {
                    block : 'auth',
                    title : 'Вход в интернет-банк',
                    content : [
                        {
                            block : 'control-group',
                            content : [
                                {
                                    block : 'input',
                                    mods : { theme : 'normal', size : 'xl' },
                                    placeholder : 'Логин'
                                }
                            ]
                        },
                        {
                            block : 'control-group',
                            content : [
                                {
                                    block : 'input',
                                    mods : { theme : 'normal', size : 'xl', type : 'password' },
                                    placeholder : 'Пароль'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem : 'footer',
            tag : 'footer',
            content : [

            ]
        }
    ]
})
