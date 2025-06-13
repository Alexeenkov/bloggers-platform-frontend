import {createRouter, createWebHistory} from "vue-router";
import PageBlogs from "@/pages/PageBlogs.vue";
import PagePosts from "@/pages/PagePosts.vue";
import PageBlog from "@/pages/PageBlog.vue";
import PagePost from "@/pages/PagePost.vue";

export const router = createRouter({
    routes: [
        {
            path: '/bloggers-platform-frontend/',
            component: null,
            redirect: to => `${to.path}blogs`,
            children: [
                {
                    path: 'blogs',
                    component: PageBlogs
                },
                {
                    path: 'blogs/:id',
                    component: PageBlog
                },
                {
                    path: 'posts',
                    component: PagePosts
                },
                {
                    path: 'posts/:id',
                    component: PagePost
                }
            ]
        },
    ],
    history: createWebHistory(),
});
