<template>
    <nav>
        <v-app-bar
            app
            flat
            :clipped="drawer"
            color="transparent"
        >
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">IAM</span>
                <span>XREYC</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        depressed
                        color="transparent"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon left>mdi-chevron-down</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="link in links" :key="link.title" router :to="link.route">
                        <v-list-item-title>{{ link.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn plain color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer
            app
            v-model="drawer"
            disable-overlay="false"
            class="primary"
        >
            <v-layout column align-center>
                <v-flex class="mt-5">
                <v-avatar size="100">
                    <img class="text-lg-center" src="/avatar-1.png">
                </v-avatar>
                <p class="white--text subheading mt-1">Reyco Seguma</p>
                </v-flex>
            </v-layout>
            <v-list dense nav>
                <v-list-item v-for="link in links" :key="link.title" router :to="link.route">
                    <v-list-item-icon>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    name: 'NavigationBar',
    data() {
        return {
            drawer: false,
            links: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/'},
                { title: 'My Projects', icon: 'mdi-folder', route: '/projects'},
                { title: 'Teams', icon: 'mdi-account', route: '/team'},
            ],
        }
    }
}
</script>