<template>
    <ul class="nav nav-wrapper pt-3 ml-3">
        <li
            class="nav-item"
        >
            <router-link
                :to="{
                    name: 'home',
                }"
                class="nav-link"
                :class="$route.name === 'home' ? 'active' : ''"
            >
                Home
            </router-link>
        </li>
        <li
            class="nav-item"
        >
            <router-link
                :to="{
                    name: 'popular.movies',
                }"
                class="nav-link"
                :class="$route.name === 'popular.movies' ? 'active' : ''"
            >
                Popular Movies
            </router-link>
        </li>
    </ul>
</template>
