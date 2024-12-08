export default {
    goToLogin: () => {
        storeValue("selectedTab", "Sign_In");
    },
    goToRegister: () => {
        storeValue("selectedTab", "Sign_Up");
    }
}
