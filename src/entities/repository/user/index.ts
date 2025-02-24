import { IAdminProps } from "@/entities/type.ts";

function generateAdmins(count: number): IAdminProps[] {
    const admins: IAdminProps[] = [];

    for (let i = 0; i < count; i++) {
        admins.push({
            id: window.crypto.randomUUID(),
            email: `admin${i + 1}@example.com`,
            password: '123123',
        });
    }

    return admins;
}

async function getAllAdminRepository(formData: { email: string; password: string }): Promise<IAdminProps[]> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const fakeAdmins = generateAdmins(5);
            const filteredAdmins = fakeAdmins.filter(
                admin => admin.email === formData.email && admin.password === formData.password
            );
            if (filteredAdmins.length === 0) {
                reject('Неверные данные!')
            }
            resolve(filteredAdmins);
        }, 1000);
    });
}

export default getAllAdminRepository;