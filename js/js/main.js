// 页面加载动画
document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 公司网站加载完成！");
  });
  
  // 导航栏滚动变色
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("shadow", "bg-dark");
    } else {
      navbar.classList.remove("shadow", "bg-dark");
    }
  });
/**
 * 注册功能
 * 规则：
 * 1. 邮箱不能为空
 * 2. 密码不能为空
 * 3. 同一个邮箱不能重复注册
 */
function register() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("邮箱和密码不能为空");
    return;
  }

  // 获取已存在用户列表
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // 检查是否已注册
  const exists = users.find(user => user.email === email);
  if (exists) {
    alert("该邮箱已注册，请直接登录");
    return;
  }

  // 保存新用户
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("注册成功，请登录");
  window.location.href = "login.html";
}

/**
 * 登录功能
 * 规则：
 * 1. 必须是已注册用户
 * 2. 邮箱 + 密码必须匹配
 * 3. 成功后跳转 index.html
 */
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("请输入邮箱和密码");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    user => user.email === email && user.password === password
  );

  if (!user) {
    alert("用户不存在或密码错误，请先注册");
    return;
  }

  // 登录成功
  localStorage.setItem("loggedInUser", email);
  window.location.href = "index.html";
}

/**
 * 退出登录
 */
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
// 未登录用户禁止访问
if (!localStorage.getItem("loggedInUser")) {
  alert("请先登录");
  window.location.href = "login.html";
}
