<template>
    <!--=============== SIDEBAR ===============-->
    <nav class="sidebar" id="sidebar">
        <div class="sidebar__container">
            <div class="sidebar__user">
                <div class="sidebar__img">
                    <img src="@/assets/img/avt.jpg" alt="User Avatar">
                </div>

                <div class="sidebar__info">
                    <h3>Đăng Khoa</h3>
                    <span>khoacdpp02847@fpt.edu.vn</span>
                </div>
            </div>
            <div class="sidebar__content">
                <div>
                    <h3 class="sidebar__title">{{ $t('message.home') }}</h3>

                    <div class="sidebar__list">
                        <router-link to="/trang-chu/cong-viec" class="sidebar__link" active-class="active-link">
                            <i class="ri-briefcase-4-fill"></i>
                            <span>{{ $t('message.job') }}</span>
                        </router-link>
                        <router-link to="/trang-chu/lich-trinh" class="sidebar__link" active-class="active-link">
                            <i class="ri-calendar-line"></i>
                            <span>{{ $t('message.schedual') }}</span>
                        </router-link>
                        <router-link to="/trang-chu/cham-cong" class="sidebar__link" active-class="active-link">
                            <i class="ri-time-fill"></i>
                            <span>{{ $t('message.timeset') }}</span>
                        </router-link>
                    </div>
                </div>
                <div>
                    <h3 class="sidebar__title">{{ $t('message.message') }}</h3>
                    <div class="sidebar__list">
                        <router-link to="/trang-chu/tin-nhan" class="sidebar__link" active-class="active-link">
                            <i class="ri-chat-3-fill"></i>
                            <span>{{ $t('message.chat') }}</span>
                        </router-link>
                        <router-link to="/trang-chu/thong-bao" class="sidebar__link" active-class="active-link">
                            <i class="ri-notification-3-fill"></i>
                            <span>{{ $t('message.nofication') }}</span>
                        </router-link>
                    </div>
                </div>
                <div>
                    <h3 class="sidebar__title">{{ $t('message.setting') }}</h3>
                    <div class="sidebar__list">
                        <router-link to="/trang-chu/thong-tin" class="sidebar__link" active-class="active-link">
                            <i class="ri-user-3-fill"></i>
                            <span>{{ $t('message.profile') }}</span>
                        </router-link>
                        <router-link to="/trang-chu/ung-dung" class="sidebar__link" active-class="active-link">
                            <i class="ri-apps-2-fill"></i>
                            <span>{{ $t('message.application') }}</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="sidebar__actions">
                <router-link to="/dang-xuat" class="sidebar__link">
                    <i class="ri-door-open-fill"></i>
                    <span>{{ $t('message.signout') }}</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>
<style src="./assets/styles.css"></style>