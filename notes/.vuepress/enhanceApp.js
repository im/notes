import MD5 from 'crypto-js/md5'
const hashMap = {
    'c6638f528df929698ade4cb86dc19b04': true,
    'e6272e71eecac9505731fb3b0faf2176': true,
    'b6c191fff6b83348baa79d20d297ae40': true
}

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData,
    isServer
}) => {
    router.addRoute({
        name: 'login',
        path: '/login',
        component: () => import('./login.vue')
    })

    if (!isServer) {
        Vue.nextTick(() => {
            const isLogin = () => {
                const cipher = storageGet('cipher') || ''
                const hash = MD5(cipher).toString()
                return hashMap[hash]
            }

            const storageGet = (name) => {
                const data = window.localStorage.getItem(name)
                if (data) {
                    return JSON.parse(data)
                } else {
                    return null
                }
            }
            router.beforeEach(({ name }, from, next) => {
                if (!isLogin()) {
                    if (name === 'login') {
                        return next()
                    }
                    return next({
                        name: 'login'
                    })
                } else {
                    if (name === 'login') {
                        return next({
                            path: "/index.html"
                        })
                    }
                }
                next()
            })
        })
    }
}
