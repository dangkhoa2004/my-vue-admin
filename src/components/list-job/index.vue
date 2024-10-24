<template>
    <div class="jobs-container">
        <div class="jobs-header">
            <h2>Trang chủ / Công việc</h2>
            <div class="jobs-search-bar">
                <input type="text" placeholder="Tìm kiếm">
            </div>
        </div>
        <div class="jobs-filters">
            <button class="jobs-filter jobs-active">Tất cả</button>
            <button class="jobs-filter">Hoàn thành</button>
            <button class="jobs-filter">Chưa hoàn thành</button>
        </div>
        <div class="jobs-project-list">
            <div class="jobs-project-card">
                <div class="jobs-project-info">
                    <h3>Dự án Kimshen</h3>
                    <p>Status: <span class="jobs-status jobs-incomplete">Chưa hoàn thành</span></p>
                </div>
                <div class="jobs-project-meta">
                    <span class="jobs-date">30/10/2019</span>
                    <span class="jobs-priority jobs-low">Thấp</span>
                </div>
            </div>
            <div class="jobs-project-card">
                <div class="jobs-project-info">
                    <h3>Dự án Thăng Long</h3>
                    <p>Status: <span class="jobs-status jobs-complete">Hoàn thành</span></p>
                </div>
                <div class="jobs-project-meta">
                    <span class="jobs-date">30/09/2019</span>
                    <span class="jobs-priority jobs-high">Cao</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="./assets/styles.css"></style>