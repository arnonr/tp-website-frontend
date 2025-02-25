<template>
    <ul>
        <!-- has-dropdown -->
        <li
            v-for="(menu, i) in menuData"
            :key="i"
            :class="`${menu.hasDropdown ? 'has-dropdown' : ''} ${
                menu.megaMenu ? 'has-mega-menu' : ''
            }`"
        >
            <NuxtLink :to="menu.link">
                {{ menu.title }}
            </NuxtLink>
            <ul v-if="menu.hasDropdown" class="submenu">
                <li v-for="(sub, i) in menu.submenus" :key="i" style="border-bottom: 1px solid #ddd;">
                    <NuxtLink :to="sub.link">
                        {{ sub.title }}
                    </NuxtLink>
                </li>
            </ul>
            <ul v-if="menu.mega_menus" class="mega-menu">
                <li v-for="(mega, i) in menu.mega_menus" :key="i">
                    <NuxtLink :to="mega.link" class="mega-menu-title">
                        {{ mega.title }}
                    </NuxtLink>
                    <ul>
                        <li v-for="(sub_mega, i) in mega.submenus" :key="i">
                            <NuxtLink :to="sub_mega.link">
                                {{ sub_mega.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
import menuData from "~~/mixins/menuData";

export default {
    mixins: [menuData],
};
</script>

<style scoped>
.main-menu-4 ul li a {
    color: var(--tp-common-white);
    margin-right: 2em;
}
.main-menu-4 ul li:hover > a {
    color: var(--tp-common-black);
}

.main-menu-4 ul li:hover > a::after {
    color: var(--tp-common-black);
}

.main-menu ul li .submenu li a::before {
    display: none;
}

.main-menu ul li .submenu li:hover > a {
    padding-left: 25px;
}

.main-menu-4 ul li.has-dropdown a::after {
    color: var(--tp-common-white);
}

.main-menu-4 ul li.has-dropdown:hover a::after {
    color: var(--tp-common-black);
}

.main-menu ul li .submenu {
    min-width: 250px;
    line-height: 2.5em;
}
</style>
