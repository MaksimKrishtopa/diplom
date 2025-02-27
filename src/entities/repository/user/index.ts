import { IAdminDto } from "@/shared/interface/user/dto/type.ts";

function generateAdmins(count: number): IAdminDto[] {
    const admins: IAdminDto[] = [];

    for (let i = 0; i < count; i++) {
        admins.push({
            id: window.crypto.randomUUID(),
            email: `admin${i + 1}@example.com`,
            password: '123123',
        });
    }

    return admins;
}

async function getAuthorizeAdminRepository(formData: { email: string; password: string }): Promise<IAdminDto[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fakeAdmins = generateAdmins(1);

            const foundAdmin = fakeAdmins.find(
                admin => admin.email === formData.email && admin.password === formData.password
            );
            if (!foundAdmin) {
                reject('Неверные данные!');
            } else {
                resolve([foundAdmin]);
            }
        }, 1000);
    });
}

export default getAuthorizeAdminRepository;