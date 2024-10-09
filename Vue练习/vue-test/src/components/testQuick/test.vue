<template>
    <div class="bg-gray-100 p-6">
      <h2 class="text-2xl font-bold mb-6">资产上报</h2>
      <div class="bg-white rounded-lg shadow p-6">
        <!-- Process Flow Diagram -->
        <div class="flex items-center justify-between mb-8">
          <!-- Report Asset -->
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <folder-add-outlined class="text-3xl text-blue-500" />
            </div>
            <span class="text-sm">上报资产</span>
            <span class="text-xs text-gray-500">(IP/域名资产)</span>
          </div>
          <!-- Arrow -->
          <arrow-right-outlined class="text-gray-400 text-2xl" />
          <!-- Intelligent Review -->
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center mb-2">
              <sync-outlined class="text-4xl text-white" />
            </div>
            <span class="text-sm font-bold">智能化审核</span>
          </div>
          <!-- Arrow -->
          <arrow-right-outlined class="text-gray-400 text-2xl" />
          <!-- Notify Asset -->
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <check-circle-outlined class="text-3xl text-blue-500" />
            </div>
            <span class="text-sm">通报资产</span>
            <span class="text-xs text-gray-500">(自动化获取)</span>
          </div>
        </div>
  
        <!-- Asset Types -->
        <div class="flex justify-end mb-8">
          <div class="flex flex-col items-start">
            <div class="flex items-center mb-2">
              <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span>可信资产</span>
            </div>
            <div class="flex items-center mb-2">
              <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span>错报资产</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span>漏报资产</span>
            </div>
          </div>
        </div>
  
        <!-- Single Report Section -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-2">单个上报</h3>
          <p class="text-sm text-gray-600">
            支持针对单个IP资产进行上报，上报后系统将自动对该资产进行智能化审核并完成资产登记。
          </p>
        </div>
        <!-- Reported IP Asset Statistics -->
        <div>
          <h3 class="text-lg font-semibold mb-2">上报IP资产统计</h3>
          <div class="flex space-x-8">
            <div>
              <span class="text-3xl font-bold text-blue-600">176</span>
              <p class="text-sm text-gray-600">行政上报(办)资产</p>
            </div>
            <div>
              <span class="text-3xl font-bold text-blue-600">47</span>
              <p class="text-sm text-gray-600">行政上报(业务)资产</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { FolderAddOutlined, ArrowRightOutlined, SyncOutlined, CheckCircleOutlined } from '@ant-design/icons-vue';
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>