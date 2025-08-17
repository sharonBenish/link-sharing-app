export type ProfileDetails = {
    profileImage?: File | null | string | undefined
    firstName: string
    lastName: string
    email: string
    refreshToken?: string
}