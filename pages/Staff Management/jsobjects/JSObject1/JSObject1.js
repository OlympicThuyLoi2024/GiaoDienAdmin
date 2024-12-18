export default {
	checkAccess: () => {
		const allowedRoles = 'ewkqotn2otvmvmpc7lv03pnc';
		const currentRole = appsmith.store.roleDocumentId;

		if (!allowedRoles.includes(currentRole)) {
			// Hiển thị cảnh báo và điều hướng ngay lập tức
			showAlert(
				"Bạn không có quyền truy cập vào trang này. Đang chuyển hướng...", 
				"warning" // Kiểu thông báo: "success", "error", "info", "warning"
			);

			// Điều hướng ngay lập tức
			navigateTo("Dashboard"); // Thay Dashboard bằng tên trang bạn muốn điều hướng
		}
	},
};
/**
 * @Project GiaoDienAdmin
 * @Author TT(trungthanhcva2206@gmail.com@gmail.com)
 * @Copyright (C) 2024 CHK. All rights reserved
 * @License GNU/GPL version 3.0
 */

