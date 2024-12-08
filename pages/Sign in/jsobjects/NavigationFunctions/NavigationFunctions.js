export default {
    navigateBasedOnRole: () => {
        const roleId = appsmith.store.roleDocumentId;
        let targetAppURL = '';
        switch (roleId) {
            case 'ewkqotn2otvmvmpc7lv03pnc':
                navigateTo('Region Management');
                break;
            case 'brfrz0brwjcxqmbqaut8se0c':
                navigateTo('Patient Management');
                break;
            default:
                targetAppURL = `http://14.225.218.213:8080/app/user/homepage-67505c2d1cc72f1a54257b29?ward=${encodeURIComponent(appsmith.store.wardDocumentId)}&jwt=${encodeURIComponent(appsmith.store.jwt)}&user_id=${encodeURIComponent(appsmith.store.signinDocumentId)}&loaibo="1"`;
                console.log("Generated URL: ", targetAppURL);  // Kiểm tra URL
                break;
        }
        navigateTo(targetAppURL, 'SAME_WINDOW');
    }
}
