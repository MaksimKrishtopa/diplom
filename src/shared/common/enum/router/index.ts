enum ERouterPath {
    MAIN_PAGE = '/',
    LOGIN_PAGE = '/login',

    RECOVERY = "/recovery",
    RECOVERY_CONFIRMATION = `${ERouterPath.RECOVERY}/email-confirm`,
    RECOVERY_NEW_PASSWORD = `${ERouterPath.RECOVERY}/new-password`,
    RECOVERY_SUCCESS = `${ERouterPath.RECOVERY}/recovery-success`,
}

export default ERouterPath
