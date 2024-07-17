<template>

    <div class="login-bg">
        <div class="login-container">
            <header class="login-header">
                <img src="../assets/images/logo.svg" alt="" class="logo mr10">
                <div class="login-title">后台管理系统</div>
            </header>
            <el-form 
            size="large" 
            :model="param" 
            :rules="rules"
            ref="login">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="请输入用户名">
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="param.password" type="password" placeholder="请输入密码">
                    </el-input>
                </el-form-item>
                <div class="pwd-tips">
                    <el-checkbox class="pwd-checkbox" v-model="checked">
                        记住密码
                    </el-checkbox>
                    <el-link type="primary">忘记密码</el-link>
                </div>
                <el-button class="login-btn" type="primary" size="large"
                @click="submitForm(login)">
                    登录
                </el-button>
                <p class="login-tips">Tips: 用户名admin 密码123456</p>
                <p class="login-text">
                    没有账号?<el-link type="primary">立即注册 </el-link>
                </p>
            </el-form>

        </div>
    </div>
</template>

<script setup>
import { reactive, ref,  } from "vue";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";

const param = reactive({
    username: "",
    password: ""
})
const login = ref(null)
const checked = ref(false)
const router = useRouter();
const rules = {
    username: [
        {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
        }

    ],
    password:[
        {
            min: 6, 
            required: true,
            message: "请输入密码",
            trigger: "blur"
        }
    ]
}
const submitForm = (formEl) =>{
    console.log(formEl);
    formEl.validate((valid) => {
        if (valid) {
            ElMessage.success("登录成功");
            localStorage.setItem("ms_name", param.username);
            console.log("submit");
            router.push("/");
        } else {
            ElMessage.error("登录失败");
            console.log("error submit!!");
            return false;
        }
    });

}

</script>

<style lang="css" scoped>
.login-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: url(../../assets/img/login-bg.jpg) center/cover no-repeat;
}

.login-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
}

.logo {
    width: 35px;
}

.login-title {
    font-size: 22px;
    color: #333;
    font-weight: bold;
}

.login-container {
    width: 450px;
    border-radius: 5px;
    background: #fff;
    padding: 40px 50px 50px;
    box-sizing: border-box;
}

.pwd-tips {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin: 0px 0 20px;
    color: #787878;
}

.pwd-checkbox {
    height: auto;
}

.login-btn {
    display: block;
    width: 100%;
}

.login-tips {
    font-size: 12px;
    color: #999;
}

.login-text {
    display: flex;
    align-items: center;
    margin-top: 20px;
    font-size: 14px;
    color: #787878;
}
</style>