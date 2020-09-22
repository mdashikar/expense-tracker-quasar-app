const routes = [{
        path: '/',
        component: () =>
            import ('pages/Home.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('pages/Login.vue'),
    },
    {
        path: '/dashboard',
        meta: { authRequired: true },
        name: 'dashboard',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '/dashboard',
                component: () =>
                    import ('pages/Dashboard.vue')
            },
            {
                path: '/settings',
                component: () =>
                    import ('pages/Settings.vue')
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes