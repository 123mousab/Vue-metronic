<template>
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
        <!-- BEGIN: Left Aside -->
        <button class="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn"><i class="la la-close"></i></button>
        <div id="m_aside_left" class="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
            <!-- BEGIN: Aside Menu -->
            <div id="m_ver_menu" class="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical="1" m-menu-scrollable="1" m-menu-dropdown-timeout="500" style="position: relative;">
                <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                    <li class="m-menu__item  m-menu__item--active" aria-haspopup="true">
                        <a href="index.html" class="m-menu__link ">
                            <i class="m-menu__link-icon flaticon-line-graph"></i>
                            <span class="m-menu__link-title"> <span class="m-menu__link-wrap">
                            <span class="m-menu__link-text">Dashboard</span>
											<span class="m-menu__link-badge">
                                                <span class="m-badge m-badge--danger">
                                                    2
                                                </span>
                                            </span>
                            </span>
                            </span>
                        </a>
                    </li>
                    <li class="m-menu__section ">
                        <h4 class="m-menu__section-text">Components</h4>
                        <i class="m-menu__section-icon flaticon-more-v2"></i>
                    </li>
                    <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" class="m-menu__link m-menu__toggle"><i class="m-menu__link-icon flaticon-layers"></i><span class="m-menu__link-text">Provider</span><i
                            class="m-menu__ver-arrow la la-angle-right"></i></a>
                        <div class="m-menu__submenu "><span class="m-menu__arrow"></span>
                            <ul class="m-menu__subnav">
                                <router-link to="/provider"><li class="m-menu__item " aria-haspopup="true"><a href="components/base/scrollable.html" class="m-menu__link "><i class="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span class="m-menu__link-text">Index</span></a></li></router-link>
                                <router-link to="/provider/create"><li class="m-menu__item " aria-haspopup="true"><a href="components/base/scrollable.html" class="m-menu__link "><i class="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span class="m-menu__link-text">Create</span></a></li></router-link>
                                <router-link to="/provider/edit"><li class="m-menu__item " aria-haspopup="true"><a href="components/base/scrollable.html" class="m-menu__link "><i class="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span class="m-menu__link-text">Edit</span></a></li></router-link>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- END: Aside Menu -->
        </div>

        <!-- END: Left Aside -->
        <div class="m-grid__item m-grid__item--fluid m-wrapper">

            <!-- BEGIN: Subheader -->
            <div class="m-subheader ">
                <div class="d-flex align-items-center">
                    <div class="mr-auto">
                        <h3 class="m-subheader__title ">
                            <slot name="title"></slot>
                        </h3>
                    </div>
                </div>
            </div>

            <!-- END: Subheader -->
            <div class="m-content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Siderbar"
    }
</script>

<style scoped>

</style>